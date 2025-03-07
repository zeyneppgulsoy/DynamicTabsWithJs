function showTab(tabId) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active')); //All tab contents remove 'active' class

    const buttons = document.querySelectorAll('.tablist button');
    buttons.forEach(button => button.classList.remove('active')); // All tab buttons remove 'active' class

    const selectedTabContent = document.getElementById(tabId);
    selectedTabContent.classList.add('active'); // Adds the 'active' class to the selected tab content

    const selectedTabButton = document.querySelector(`[onclick="showTab('${tabId}')"]`);
    selectedTabButton.classList.add('active'); // Adds the 'active' class to the selected tab button

    
    //This section is for the swiper slider
    if (tabId === 'tab1-content') {
        new Swiper('#tab1-content .swiper-container', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: '#tab1-content .swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '#tab1-content .swiper-button-next',
                prevEl: '#tab1-content .swiper-button-prev',
            },
        });
    } else if (tabId === 'tab2-content') {
        new Swiper('#tab2-content .swiper-container', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: '#tab2-content .swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '#tab2-content .swiper-button-next',
                prevEl: '#tab2-content .swiper-button-prev',
            },
        });
    } else if (tabId === 'tab3-content') {
        new Swiper('#tab3-content .swiper-container', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: '#tab3-content .swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '#tab3-content .swiper-button-next',
                prevEl: '#tab3-content .swiper-button-prev',
            },
        });
    }
}

window.onload = function() {
    showTab('tab1-content');
};
