class Controller {
  constructor(Main, Header, {
    carousel,
    header,
    headerItems,
    carouselMain,
    container,
    item,
    items,
    config = {
      duration: 200,
      easing: "ease-out"
    },
    currentItem = 1,
  } ){
    constructor() {
    // o
    this.itemWidth = this.item.offsetWidth;
    // o
    this.offset = -this.itemWidth;
    // o
    this.currentItem = currentItem;
    // main
    this.itemsLength = this.items.length;
    // main
    this.config = config;
    // main
    this.isTransitioning = false;

    this.main = new Main(this.state, {config}});
    this.Header = new Header(this, );
  }
  init (){
    this.main.setCarouselSize();
    this.attachEvent();
    this.main.insertClone();
    this.main.moveWithoutAnimation();
    this.carouselMain.style.opacity = 1
  }

  attachEvent() {
    const prev = this.main.carousel.querySelector('.prev');
    const next = this.main.carousel.querySelector('.next');
    prev.addEventListener('click', () => this.main.moveToPrev());
    next.addEventListener('click', () => this.main.moveToNext());
    this.header.headerItems.forEach(card => card.addEventListener('click', (e) => this.header.clickHeaderItem(e)));
    this.main.container.addEventListener('transitionend', () => this.main.transitionStatsToggle());
  }
  


}