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

import {render} from "./utils";
import {getFilters} from './mock/filter';
import {TASK_COUNT, SHOWING_TASKS_COUNT_BY_BUTTON, SHOWING_TASKS_COUNT_ON_START} from "./const";
import {generateTasks} from "./mock/task";

const filters = getFilters();
const tasks = generateTasks(TASK_COUNT);

let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, createSiteMenuTemplate(), `beforeend`);
render(siteMainElement, createFilterTemplate(filters), `beforeend`);
render(siteMainElement, createBoardTemplate(), `beforeend`);

const tasksElement = siteMainElement.querySelector(`.board__tasks`);
render(tasksElement, createTaskEditTemplate(tasks[0]), `beforeend`);

tasks.slice(1, showingTasksCount).forEach((task) => {
  render(tasksElement, createTaskTemplate(task), `beforeend`);
});

const boardElement = siteMainElement.querySelector(`.board`);
const taskListElement = siteMainElement.querySelector(`.board__tasks`);

render(taskListElement, createTaskEditTemplate(), `beforeend`);

render(boardElement, createLoadMoreButtonTemplate(), `beforeend`);

const loadMoreButtonElement = document.querySelector(`.load-more`);

loadMoreButtonElement.addEventListener(`click`, () => {
  const prevTasksCount = showingTasksCount;
  showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;

  tasks.slice(prevTasksCount, showingTasksCount).forEach((task) => {
    render(tasksElement, createTaskTemplate(task), `beforeend`);
  });

  if (showingTasksCount >= tasks.length) {
    loadMoreButtonElement.remove();
  }
});

