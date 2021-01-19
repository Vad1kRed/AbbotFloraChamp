const factItem = document.querySelectorAll('.fact__item');

factItem.forEach(item => {
    item.addEventListener('click', function() {
        this.querySelector('.fact__hidden').classList.toggle('fact__hidden--active');
    });
});
