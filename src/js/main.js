class Main {
  constructor(state, {carouselMain, container, item, items}) {
    this.state = state;
    this.carouselMain = this.carousel.querySelector(carouselMain);
    this.container = this.carousel.querySelector(container);
    this.item = this.carousel.querySelector(item);
    this.items = this.carousel.querySelectorAll(items);
    this.itemsLength = this.items.length;
    this.config = config;
  }



  attachEvent() {
    const prev = this.carousel.querySelector('.prev');
    const next = this.carousel.querySelector('.next');
    prev.addEventListener('click', () => this.moveToPrev());
    next.addEventListener('click', () => this.moveToNext());
    this.headerItems.forEach(card => card.addEventListener('click', (e) => this.clickHeaderItem(e)));
    this.container.addEventListener('transitionend', () => this.transitionStatsToggle());
  }
  setCarouselSize() {
    this.carouselMain.style.width = this.item.offsetWidth + 'px';
    this.carouselMain.style.height = this.item.offsetHeight + 'px';
  }

  moveToNext() {
    if(!this.isTransitioning) {
      this.state.offset -= this.state.itemWidth;
      this.moveMain();
      this.state.currentItem++;
      if (this.isClone()) this.fakeMove();
      this.moveHeader(this.state.currentItem - 1);
    }
  }

  moveToPrev() {
    if(!this.isTransitioning) {
      this.state.offset += this.state.itemWidth;
      this.moveMain();
      this.state.currentItem--;
      if (this.isClone()) this.fakeMove();
      this.moveHeader(this.state.currentItem - 1);
    }
  }

  moveMain() {
    this.transitionStatsToggle();
    this.container.style.transition = `transform ${this.config.duration}ms ${this.config.easing}`;
    this.container.style.transform = `translate3D(${this.offset}px, 0, 0)`;
  }

  transitionStatsToggle() {
    this.isTransitioning = this.isTransitioning ? false : true;
  }

  insertClone() {
    const firstItem = this.items[0];
    const lastItem = this.items[this.items.length - 1];

    this.container.insertBefore(lastItem.cloneNode(true), this.container.firstChild);
    this.container.appendChild(firstItem.cloneNode(true));
  }

  isClone() {
    return this.state.currentItem === 0 || this.state.currentItem === this.itemsLength + 1;
  }

  moveWithoutAnimation() {
    this.container.style.transition = 'none';
    this.container.style.transform = `translate3D(${this.state.offset}px, 0, 0)`;
  }

  fakeMove() {
    if (this.currentItem === 0) {
      this.state.offset -= this.itemsLength * this.state.itemWidth;
      this.currentItem = this.currentItem + this.itemsLength;
    } else {
      this.state.offset += this.itemsLength * this.state.itemWidth;
      this.state.currentItem = this.state.currentItem - this.itemsLength;
    }
    setTimeout(() => this.moveWithoutAnimation(), this.config.duration);
  }
}

export default Main;
