export const ModalManager = (() => {
    // Private variables and functions
    const modal = document.getElementById('modal');
    const openModalBtn = document.getElementById('open-modal-btn');
    const closeModalBtn = document.getElementById('close-modal-btn');

    const openModal = () => {
        modal.classList.add('open');
    };

    const closeModal = () => {
        modal.classList.remove('open');
    };

    const handleOutsideClick = (event) => {
        if (event.target === modal) {
            closeModal();
        }
    };

    // Attach event listeners
    const init = () => {
        if (openModalBtn) openModalBtn.addEventListener('click', openModal);
        if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
        window.addEventListener('click', handleOutsideClick);
    };

    // Initialize when the module is loaded
    init();

    // Public API
    return {
        openModal,
        closeModal,
    };
})();
