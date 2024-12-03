export const TaskManager = (() => {
    const taskTitle = document.getElementById('title');
    const taskDescription = document.getElementById('description');
    const taskDueDate = document.getElementById('due-date');
    const taskImportant = document.getElementById('important');

    const getInputTask = () => {
        return {
            title: taskTitle.value,
            description: taskDescription.value,
            date: taskDueDate.value,
            important: taskImportant.checked, 
        };
    };

    return {
        getInputTask,
    }
})();
