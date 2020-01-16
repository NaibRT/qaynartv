$(document).ready(() => {

    function sabitemClick(cElem, elem) {
        if (cElem === elem) {
            elem.classList.add('m-sab-active'),
                elem.children[1].classList.add('m-sabt-active')
        } else {
            elem.classList.remove('m-sab-active');
            elem.children[1].classList.remove('m-sabt-active')
        }
    }

    function sbiClickEvent(e) {
        let chel = document.querySelectorAll('#msab>li');
        console.log(chel)
        document.querySelectorAll('#msab>li').forEach(sbi => {
            sabitemClick(e.currentTarget, sbi)
        })
    }

    let sabItems = document.querySelectorAll('#msab>li');
    sabItems.forEach(s => s.addEventListener('click', sbiClickEvent));

    $('.subcat').click(function(e) {
        e.preventDefault();
        let ul = $(e.currentTarget).children('ul')[0];
        $(ul).toggleClass('subcat-active');
    });

    $('.mnr-menu').click(function(e) {
        e.preventDefault();
        console.log('click')
            // document.querySelector('.m-navbar-container').style.display = 'flex';
        $('.m-navbar-container').toggleClass('mnc-click');
        $('.mobile-body').toggleClass('mb-scroll');
        $(e.currentTarget).toggleClass('mnr-menu-click');
        $('.close-menu').toggleClass('close-menu-click');
    });

    $('.close-menu').click(function(e) {
        e.preventDefault();
        // document.querySelector('.m-navbar-container').style.display = 'flex';
        $('.m-navbar-container').toggleClass('mnc-click');
        $('.mobile-body').toggleClass('mb-scroll');
        $('.mnr-menu').toggleClass('mnr-menu-click');
        $(e.currentTarget).toggleClass('close-menu-click ');
    });

    function livePopUp(e) {
        e.preventDefault();
        $('.live-popup').toggleClass('m-lpt');
        $('body').toggleClass('body-toggle');;
    }


    $('.m-alive').click(livePopUp);
    $('.m-live-popup-img').click(livePopUp);

})