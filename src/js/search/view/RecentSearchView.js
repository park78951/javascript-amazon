import template from './template/Template.js';
import ut from '../../myUtil/myUtil.js'

export default class recentSearchView {
  constructor() {
    this.autoViewContainer = null;
    this.recentSearch = null;
    this.recentSearchExt = false;
  }

  initRender(autoViewContainer) {
    this.autoViewContainer = autoViewContainer;
    const className = "search__recent-search";
    this.attachAutocomContainer(className);
    this.recentSearch = ut.qrSelectorByClass(className, this.autoViewContainer);
  }

  render(recentSearches) {
    this.informRecentSearchMade();
    const recentSearchesTpl = recentSearches.reduce((acc, cur) => {
      return acc+template.createAutoViewItem(cur);
    },"")
    ut.appendElLastly(this.recentSearch, recentSearchesTpl);
    this.recentSearchViewer('show');
  }
  
  attachAutocomContainer(className) {
    const recentSearch = template.createAutoView(className);
    ut.appendElLastly(this.autoViewContainer, recentSearch);
  }

  // showAutoView() {
  //   this.autoViewContainer.classList.remove('hide');
  // }
  
  // removeAutoView() {
  //   this.autoViewContainer.classList.add('hide');
  // }

  
  recentSearchViewer(action) {
    const recentSearhcCL = this.recentSearch.classList
    if(action === 'hide') recentSearhcCL.add('hide');
    else recentSearhcCL.remove('hide');
  }
    
  informRecentSearchMade() {
    this.recentSearchExt = true;
  }

  recentSearchChecker() {
    return this.recentSearchExt;
  }

  showAutoView() {
    this.recentSearch.classList.remove('hide');
  }

  
}

//TODO: 1. Data list view
//      2. Data list 삭제
//      3. delayed rendering(?)
