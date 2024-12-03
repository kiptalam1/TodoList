import { TaskManager } from "./getTasks";

export const DisplayTask = (() => {
    const renderTask = () => {
        // get tasks from TaskManager module.
        const tasks = TaskManager.getInputTask();
        const { title, description, date, important } = tasks;
        // get the container that holds all tasks.
        const tasksDiv = document.querySelector('.tasks-div');
        // create elements for all the fields
        const titleText = document.createElement('h4');
        const descriptionText = document.createElement('p');
        const dateText = document.createElement('p');
        const importantText = document.createElement('p');

        titleText.textContent = title;
        descriptionText.textContent = description;
        dateText.textContent = date;
        importantText.textContent = important ? "Important" : "";
        // add elements to the container
        tasksDiv.append(titleText, descriptionText, dateText, importantText);
    };
    return {
        renderTask,
    }
})();