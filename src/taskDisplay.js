import { StorageManager } from "./taskStorage.js";

export const DisplayTask = (() => {
    // get the container that holds all tasks.
    const tasksDiv = document.querySelector('.tasks-div');
    // Clear existing tasks from the DOM
    const clearTasks = () => {
        tasksDiv.innerHTML = '';
    };

    const renderAllTasks = (filterType) => {
        // get tasks from StorageManager module.
        const tasks = StorageManager.filterTasks(filterType);
        clearTasks();
        tasks.forEach((task) => {
            // create elements for all the fields
            const contDiv = document.createElement('div');
            contDiv.className = 'cont-div';
            const titleText = document.createElement('h4');
            const descriptionText = document.createElement('p');
            const dateText = document.createElement('p');
            const importantText = document.createElement('p');
            const deleteButton = document.createElement('button');

            titleText.textContent = task.title;
            descriptionText.textContent = task.description;
            dateText.textContent = task.date;
            importantText.textContent = task.important ? "Important" : "";
            deleteButton.textContent = 'Delete';

             // Attach delete event
            deleteButton.addEventListener('click', () => {
                StorageManager.deleteTask(task.id);
                renderAllTasks(filterType); // Re-render tasks
            });
            // add elements to the container
            contDiv.append(titleText, descriptionText, dateText, importantText);
            tasksDiv.appendChild(contDiv);
        });
    };

    return {
        renderAllTasks,
    }
})();