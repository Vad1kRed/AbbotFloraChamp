const infoContainer = document.querySelector('.info-container');
const ingredientContainer = document.querySelector('.ingredient-container');

new Swiper(ingredientContainer, {
    loop: true,
    spaceBetween: 25,
    slidesPerView: 5,
    navigation: {
        nextEl: '.ingredient-button-next',
        prevEl: '.ingredient-button-prev'
    }
})

new Swiper(infoContainer, {
    pagination: {
        el: '.info-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '0' + (index + 1) + '</span>';
        }
    },
    navigation: {
        nextEl: '.info-button-next',
        prevEl: '.info-button-prev'
    }
})