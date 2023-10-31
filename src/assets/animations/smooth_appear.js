function deleteElement() {
    const element = document.querySelector('.task_card');
    element.classList.add('disappear');
    
    // Supprimez l'élément du DOM après la fin de la transition
    element.addEventListener('transitionend', () => {
      element.add();
    });
  }