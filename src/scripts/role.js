const infoContainer = document.querySelector('.info-container');

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