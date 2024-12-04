import { DisplayTask } from "./taskDisplay.js";
import { ModalManager } from "./modal.js";
import { StorageManager } from "./taskStorage.js";

export const TaskManager = (() => {
    const taskForm = document.getElementById('task-form');
    const taskTitle = document.getElementById('title');
    const taskDescription = document.getElementById('description');
    const taskDueDate = document.getElementById('due-date');
    const taskImportant = document.getElementById('important');

    const addTaskButton = document.getElementById('submit-modal-btn');
    const getInputTask = () => {
        return {
            title: taskTitle.value,
            description: taskDescription.value,
            date: taskDueDate.value,
            important: taskImportant.checked, 
            completed: false,
        };
    };
 // Handle form submission
    const handleFormSubmit = (event) => {
        event.preventDefault(); 

        const task = getInputTask();

        if (!task.title.trim()) {
            alert("Task title is required!");
            return;
        }
        // save task using storageManager.
        StorageManager.addTask(task);
        // Call renderTask from DisplayTask to display the new task
        DisplayTask.renderAllTasks('all');

        taskForm.reset(); // Clear the form after submission

        ModalManager.closeModal();
    };

    // Add event listener for form submission
    taskForm.addEventListener('submit', handleFormSubmit);
    addTaskButton.addEventListener('click', handleFormSubmit);

    return {
        getInputTask,
    }
})();
