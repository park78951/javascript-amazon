class Header {
  constructor(state, {header, headerItems}){
    this.state = state;
    this.header = document.querySelector(header);
    this.headerItems = [...this.header.querySelectorAll(headerItems)]
  }

  clickHeaderItem({target}, moveMain) {
    const clickedIndex = this.getHeaderIndex(target.closest(".carousel__header--item"));
    const currentIndex = this.state.currentItem - 1;
    this.state.offset += this.state.itemWidth * (currentIndex - clickedIndex);
    this.moveHeader(clickedIndex);
    moveMain();
    this.state.currentItem = clickedIndex + 1;
  }

  moveHeader(clickedIndex) {
    this.header.querySelector(".active").classList.remove("active");
    this.headerItems[clickedIndex].classList.add("active");
  }

  getHeaderIndex(element) {
    return this.headerItems.indexOf(element)
  }
}

export default Header;