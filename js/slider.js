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

   
    $('.msm-lent').owlCarousel({
        loop:false,
     
        margin:10,
        nav:true,
        navText:[
            `<svg id="arrow-left-line" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <defs>
              <style>
                .cls-1 {
                  fill: none;
                }
          
                .cls-2 {
                  fill: #fff;
                }
              </style>
            </defs>
            <path id="Path_272" data-name="Path 272" class="cls-1" d="M0,0H24V24H0Z"/>
            <path id="Path_273" data-name="Path 273" class="cls-2" d="M7.828,11H20v2H7.828l5.364,5.364-1.414,1.414L4,12l7.778-7.778,1.414,1.414Z"/>
          </svg>`,
            `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <defs>
              <style>
                .cls-1 {
                  fill: none;
                }
          
                .cls-2 {
                  fill: #fff;
                }
              </style>
            </defs>
            <g id="arrow" transform="translate(92 1502) rotate(180)">
              <rect id="Rectangle_140" data-name="Rectangle 140" class="cls-1" width="24" height="24" transform="translate(68 1478)"/>
              <path id="Path_273" data-name="Path 273" class="cls-2" d="M7.828,11H20v2H7.828l5.364,5.364-1.414,1.414L4,12l7.778-7.778,1.414,1.414Z" transform="translate(68 1478)"/>
            </g>
          </svg>`
        ],
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            1050:{
                items:3
            }
        }
    })

});