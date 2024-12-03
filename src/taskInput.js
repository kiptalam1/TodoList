
export const TaskManager = (() => {
    const taskTitle = document.getElementById('title');
    const taskDueDate = document.getElementById('due-date');
    const listContainer = document.getElementById('list-container');
    const addTaskBtn = document.getElementById('add-btn');


    const getInputValues = () => {
        const taskValue = taskTitle.value;
        const taskDateValue = taskDueDate.value;
        // Throw warning if empty task is added
        if (taskValue.trim() === "") {
            alert("Task cannot be empty!");
            return;
        }
        return { taskValue, taskDateValue };
    }

    const updateTaskDisplay = () => {
        const inputValues = getInputValues();
        if (!inputValues) return;
        const { taskValue, taskDateValue } = inputValues;
        // Create a list element.
        const li = document.createElement('li');
        li.textContent = taskValue;
        listContainer.appendChild(li);
        taskTitle.value = ''; // Empty the input field for next task addition.
    }



    addTaskBtn.addEventListener('click', updateTaskDisplay);
    // Expose functions for future use.
    return {
        addTask: updateTaskDisplay,
    };
})();