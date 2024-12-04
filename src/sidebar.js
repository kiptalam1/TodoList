import { DisplayTask } from "./taskDisplay.js";

export const SidebarManager = (() => {
    const sidebar = document.querySelector('.sidebar');
    const sections = {
        'all-tasks': 'all',
        'todays-tasks': 'today',
        'this-weeks-tasks': 'week',
        'important-tasks': 'important',
        'completed-tasks': 'completed',
    };

    const handleSectionClick = (event) => {
        const sectionId = event.target.id;
        const filterType = sections[sectionId];

        if (filterType) {
            DisplayTask.renderAllTasks(filterType);
        }
    };

    const init = () => {
        sidebar.addEventListener('click', handleSectionClick);
    };

    init();

    return {};
})();
