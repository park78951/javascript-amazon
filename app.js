import config from './src/js/helper/config.js';
import template from './src/js/helper/template.js';
import RenderTemplate from './src/js/renderTemplate.js';
import Carousel from './src/js/carousel.js'
import Viewer from './src/js/viewer.js';
import Carousel from './src/js/carousel.js'

const headerViewer = new Viewer(config.header, template.getHeaderTemplate);
const mainViewer = new Viewer(config.container, template.getMainTempalte);

const getData = async () => 
  await fetch('./src/JSON/localData.json').then(data => data.json());

const headerViewer = new RenderTemplate(config.header, template.getHeaderTemplate);
const mainViewer = new RenderTemplate(config.container, template.getMainTempalte);

const getCarouselData = async () => 
  await fetch('./src/JSON/localData.json').then(data => data.json());

window.addEventListener('DOMContentLoaded', () => {
  const localData = getCarouselData();

  localData
    .then(json => {
      headerViewer.rendering(json.header);
      mainViewer.rendering(json.main);
      return json;
    })
    .then( () => {
      const carousel = new Carousel(config);
      carousel.init();
    });
});