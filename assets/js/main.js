// preloader
(function () {
    document.body.onload = function () {
        setTimeout(function () {
            let preloader = document.getElementById('load');
            if (!preloader.classList.contains('success')) {
                preloader.classList.add('success');
            }
        }, 1500)
    }
})();

// customCursor
(function () {
    const root = document.querySelector(':root');
    document.addEventListener('mousemove', (e) => {
        root.style.setProperty('--xS', e.clientX + 'px');
        root.style.setProperty('--yS', e.clientY + 'px');
    });
})();

// slider
(function () {
    const slides = document.querySelectorAll(".sliderItem");
    const activeClass = "visibleItem";
    let index = 0;

    setInterval(() => {
        slides[index].classList.remove(activeClass);

        index++;

        if (index + 1 > slides.length) {
            index = 0;
        }

        slides[index].classList.add(activeClass);
    }, 1000);
})();

// activeSkew
(function () {
    var headerPage = document.querySelector('.customShapeBottomReverse');

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 0) {
            headerPage.classList.add('activeSkew');
        } else {
            headerPage.classList.remove('activeSkew')
        }
    })

})();

// animate
(function () {
    const animItems = document.querySelectorAll('.animItems');

    if (animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll);

        function animOnScroll() {
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                // получаю высоту моего объекта
                const animItemHeight = animItem.offsetHeight;
                // получаею позицию моего объекта относительно высоты
                const animItemOffset = offset(animItem).top;
                // коэфициент регулировки анимации
                const animStart = 4;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;
                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }
                // если мы прокрутили больше чем позиция объекта, но меньше чем его высота, то добавляем класс актив
                if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('activeAnim');
                } else {
                    // если есть класс animNoActiv,то класс актив убираться не будет
                    if (!animItem.classList.contains('animNoActiv')) {
                        animItem.classList.remove('activeAnim');
                    }

                }
            }

        }

        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {
                top: rect.top + scrollTop,
                left: rect.left + screenLeft
            }
        }

        // задержка функции 
        setTimeout(() => {
            animOnScroll();
        }, 300);
    }
})();