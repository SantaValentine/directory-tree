const folders = document.querySelectorAll('.folder');

folders.forEach(folder => {
    folder.addEventListener('click', function() {
        const parentLi = this.parentElement;

        if (!parentLi.classList.contains('open')) {
            parentLi.classList.add('open');
        } else {
            parentLi.classList.remove('open');
        }
    });
});
