import "./styles.css";
import "./modal.css";
import { unchecked } from "./Assets/unchecked.png";
import { ModalManager } from "./modal.js";
import { TaskManager } from "./getTasks.js";
import { DisplayTask } from "./taskDisplay.js";
import { StorageManager } from "./taskStorage.js";
import { SidebarManager } from "./sidebar.js";


document.addEventListener('DOMContentLoaded', () => {
    DisplayTask.renderAllTasks('all');  // Initial render
    SidebarManager.init();  // Initialize SidebarManager
});
