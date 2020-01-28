$(document).ready(() => {


    let sliderControllers = document.querySelectorAll('.insc-sc-item');

    function getindex(e) {
        sliderControllers.forEach(x => {
            if (x === e.currentTarget) {
                x.classList.add('active');
            } else {
                x.classList.remove('active');
            }
        })

        let id = e.currentTarget.getAttribute("data-id");
        let slideLent = document.querySelector(".ins-slide-lent");
        slideLent.style.left = `-${id*330}px`;
    }

    function sliderItemSize() {
        let width = $(document).outerWidth();

        if (width <= 992 && width >= 768) {
            let actualWidth = ((width - 50) / 3);
            let btnWidth = (actualWidth / 2) - 10;
            document.querySelectorAll('.m-shows-main-item').forEach(x =>
                x.style.width = `${actualWidth}px`
            )
            $('.msmc-left,.msmc-right').css('width', `${actualWidth}`)
        }
        if (width <= 768 && width >= 576) {
            let actualWidth = ((width - 30) / 2);
            let btnWidth = (actualWidth / 2) - 10;
            document.querySelectorAll('.m-shows-main-item').forEach(x =>
                x.style.width = `${actualWidth}px`
            )
            $('.msmc-left,.msmc-right').css('width', `${actualWidth}`)
        }
        if (width <= 576) {
            let actualWidth = ((width - 20));
            let btnWidth = (actualWidth / 2) - 10;
            document.querySelectorAll('.m-shows-main-item').forEach(x =>
                x.style.width = `${actualWidth}px`
            )
            $('.msmc-left,.msmc-right').css('width', `${actualWidth}`)
        }
        if (width >= 992 && width < 1050) {
            let actualWidth = ((width - 40) / 3);
            let btnWidth = (actualWidth / 2) - 10;
            document.querySelectorAll('.m-shows-main-item').forEach(x =>
                x.style.width = `${actualWidth}px`
            )
            $('.msmc-left,.msmc-right').css('width', `${actualWidth}`)
        }
    }

    sliderControllers.forEach(x => x.addEventListener('click', getindex));

    let x = 0;
    let clickCount = 1;

    function scroll(target) {
        let msmiWidth = (document.querySelector('.m-shows-main-item').offsetWidth);
        let msmWidth = (document.querySelector('.m-shows-main').offsetWidth);
        let msmLentWidth = (document.querySelector('.msm-lent').offsetWidth);
        let msmLeft = (document.querySelector('.msm-lent').offsetLeft * -1);
        let msm = document.querySelector('.msm-lent');
        let msmScrollLeft = $('.m-shows-main').scrollLeft();
        let scrollleft = msmScrollLeft - ((Math.floor(msmScrollLeft / msmiWidth)) * (msmiWidth + 10));

        if (target === 'left' && ((msmLeft + msmiWidth) < (msmLentWidth - msmWidth))) {
            clickCount += 1;
            if (msmScrollLeft !== 0) {

                x -= (msmScrollLeft + (msmiWidth - scrollleft) + 10);
                $('.m-shows-main').scrollLeft(0);
            } else {
                x -= (msmiWidth + 10);
            }
            msm.style.left = `${x}px`;
        }
        if (target === 'right' && (msmLeft > 0)) {
            clickCount -= 1;
            if (msmScrollLeft !== 0) {
                x += (msmScrollLeft - (msmiWidth - scrollleft) + 10);
                // $('.m-shows-main')[0].scrollLeft = 0;
            } else {
                x += (msmiWidth + 10);
            }

            msm.style.left = `${x}px`;
        }
    };
    $('.msmc-left').click(() => {
        scroll('right')
    });
    $('.msmc-right').click(() => {
        scroll('left')
    });

    sliderItemSize();

});