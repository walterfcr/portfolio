  function openModalById(id, options = {}) {
    const modalEl = document.getElementById(id);

    // Default options (no backdrop to avoid hiding the previous modal)
    const config = Object.assign({ backdrop: false, keyboard: true }, options);
    const modalInstance = new bootstrap.Modal(modalEl, config);

    modalInstance.show();

    // Manually preserve the modal-open state
    document.body.classList.add('modal-open');
  }

  // Keep modal-open class if any modal remains visible
  document.addEventListener('hidden.bs.modal', () => {
    const openModals = document.querySelectorAll('.modal.show');
    if (openModals.length > 0) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  });