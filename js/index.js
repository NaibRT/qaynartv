import createAd from './ad.js'
$(document).ready(function() {

    $(window).scroll(function () { 
        let top=window.scrollY;
        if(top>=1){
          $('header').addClass('header-fix');
        }
        else{
            $('header').removeClass('header-fix');
        }

    });

    let adobject = null;

    fetch('https://veklam.com/item/11/1366x768/28/20/vitrin.az?fbclid=IwAR2BUKjLBamRxqymOApVRmp637DNe8wFgwWcYj1PN9bMkPBWdAdyJp74g3U', {
            mode: 'no-cors',
            headers: { 'Access-Control-Allow-Origin': '*' }
        })
        .then((Response) => {
            let ad = Response.text();
            ad.then(d => { d ? JSON.parse(d) : {} });
        })
        .catch(err => {
            console.log(err)
        })

    // $.ajax({
    //     type: "Get",
    //     url: "https://veklam.com/item/11/1366x768/28/20/vitrin.az?fbclid=IwAR2BUKjLBamRxqymOApVRmp637DNe8wFgwWcYj1PN9bMkPBWdAdyJp74g3U",
    //     dataType: 'json',
    //     success: function(response) {
    //         console.log(response)
    //         adobject = createAd(response)
    //     }
    // });

    // $('.advert-popup-ins').append(adobject);
    // document.querySelector('#advert-popup').requestFullscreen().
    // then(result => {
    //     console.log(result)
    // }).
    // catch(err => {
    //     console.log(err.message)
    // });

    $('.search-btn').click((e) => {
       console.log(this);
        let value=$('#search-for')[0].value;
        if(value){
            $(this).unbind('submit').submit()
        }else{
            e.preventDefault();
        }
 
        console.log('click')
        $('#search-for').toggleClass('search-for-toggle')
        $('.search-btn').toggleClass('sfb-toggle')
    });

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

    $(category).click((e) => {
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
    $(broadcast).click((e) => {
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
        console.log('click')
        $('.live-popup').toggleClass('display-flex');
        $('body,.wrap-body').toggleClass('overflow-hidden');
    }

    function livePopDown(e) {
        e.preventDefault();
        console.log('click')
        $(e.currentTarget).toggleClass('display-flex');
        $('body,.wrap-body').toggleClass('overflow-hidden');
    }

    $('.alive,.main-news-img,.mn-title').click(livePopUp);
    $('.live-popup').click(livePopDown);
});