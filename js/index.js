$(document).ready(function() {
    function smContainer(value) {
        let elemArray = $(".shows-main-container");
        Array.from(elemArray).forEach(x => {
            x.getAttribute('data-name') === value ?
                x.classList.add('smc-active') :
                x.classList.remove('smc-active')
        })
    }

    function sabitemClick(cElem, elem) {
        if (cElem === elem) {
            let val = cElem.children[0].innerHTML;
            smContainer(val)
            elem.classList.add('sab-active'),
                elem.children[1].classList.add('sabt-active')


        } else {
            elem.classList.remove('sab-active');
            elem.children[1].classList.remove('sabt-active')
        }
    }
    let sabItems = document.querySelectorAll('#msab>li');

    function sbiClickEvent(e) {
        let chel = document.querySelectorAll('#msab>li');
        console.log(chel)
        document.querySelectorAll('#msab>li').forEach(sbi => {
            sabitemClick(e.currentTarget, sbi)
        })
    }
    sabItems.forEach(s => s.addEventListener('click', sbiClickEvent));


    let category = document.querySelector('.category');
    let catNavbar = document.querySelector('.cat-navbar');
    let broadcastNavbar = document.querySelector('.broadcast-navbar');

    category.addEventListener('click', (e) => {
        console.log()
        if ($(catNavbar).css('display') === 'none') {
            catNavbar.style.display = 'flex';
            broadcastNavbar.style.display = "none";
            e.currentTarget.nextElementSibling.children[0].src = './img/player.svg';
            e.currentTarget.children[0].src = './img/category-f.svg';
        } else {
            catNavbar.style.display = 'none';
            e.currentTarget.children[0].src = './img/category.svg';
        }
    });

    let broadcast = document.querySelector('.ni-v');
    broadcast.addEventListener('click', (e) => {
        if (broadcastNavbar.style.display === 'none') {
            broadcastNavbar.style.display = 'flex';
            catNavbar.style.display = 'none';
            e.currentTarget.previousElementSibling.children[0].src = './img/category.svg';
            e.currentTarget.children[0].src = './img/player-f.svg';
        } else {
            broadcastNavbar.style.display = 'none';
            e.currentTarget.children[0].src = './img/player.svg';
        }
    });

    function livePopUp(e) {
        e.preventDefault();
        $('.live-popup').toggleClass('live-popup-toggle');
        $('body').toggleClass('body-toggle');
    }

    function livePopDown(e) {
        e.preventDefault();
        $(e.currentTarget).toggleClass('live-popup-toggle');
        $('body').toggleClass('body-toggle');
    }

    $('.alive').click(livePopUp);
    $('.main-news-img').click(livePopUp);
    $('.live-popup').click(livePopDown);
});