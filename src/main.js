import {
  createBoardTemplate
} from './components/board-template';
import {
  createFilterTemplate
} from './components/filter-template';
import {
  createLoadMoreButtonTemplate
} from './components/load-more-button-template';
import {
  createSiteMenuTemplate
} from './components/site-menu-template';
import {
  createTaskEditTemplate
} from './components/task-edit-template';
import {
  createTaskTemplate
} from './components/task-template';

const ROUTE_COUNT = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, createSiteMenuTemplate(), `beforeend`);
render(siteMainElement, createFilterTemplate(), `beforeend`);
render(siteMainElement, createBoardTemplate(), `beforeend`);

const boardElement = siteMainElement.querySelector(`.board`);
const taskListElement = siteMainElement.querySelector(`.board__tasks`);


render(boardElement, createLoadMoreButtonTemplate(), `afterbegin`);
render(taskListElement, createTaskEditTemplate(), `beforeend`);

for (let i = 0; i < ROUTE_COUNT; i++) {
  render(taskListElement, createTaskTemplate(), `beforeend`);
}

render(boardElement, createLoadMoreButtonTemplate(), `beforeend`);
