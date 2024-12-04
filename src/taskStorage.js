export const StorageManager = (() => {
    const localStorageKey = 'tasks'; 
    // Fetch tasks from localStorage
    const getTasks = () => {
        const tasks = localStorage.getItem(localStorageKey);
        return tasks ? JSON.parse(tasks) : [];
    };
    // Save tasks to localStorage
    const saveTasks = (tasks) => {
        localStorage.setItem(localStorageKey, JSON.stringify(tasks));
    };
    // Add a task
    const addTask = (task) => {
        const tasks = getTasks();
        const taskWithId = { id: Date.now(), ...task }; // Add unique ID
        tasks.push(taskWithId);
        saveTasks(tasks);
    };
    // Delete a task
    const deleteTask = (index) => {
        const tasks = getTasks();
        const updatedTasks = tasks.filter((task) => task.id !== id);
        saveTasks(updatedTasks);
    };

     // Filter tasks
    const filterTasks = (filterType) => {
        const tasks = getTasks();
        const today = new Date();
        const startOfWeek = new Date(today);
        startOfWeek.setDate(today.getDate() - today.getDay()); // Start of the week

        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6); // End of the week

        switch (filterType) {
            case 'today':
                return tasks.filter(
                    (task) => new Date(task.date).toDateString() === new Date().toDateString()
                );
            case 'week':
                return tasks.filter((task) => {
                    const taskDate = new Date(task.date);
                    return taskDate >= startOfWeek && taskDate <= endOfWeek;
                });
            case 'important':
                return tasks.filter((task) => task.important);
            case 'completed':
                return tasks.filter((task) => task.completed);
            default:
                return tasks; // All tasks
            }
        };

    return {
        getTasks,
        addTask,
        deleteTask,
        filterTasks,
    };
})();
