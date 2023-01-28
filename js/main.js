$(document).ready(function () {

    // data filter  

    let $btns = $('.project-area .button-group button');


    $btns.click(function (e) {

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .flex').isotope({
            filter: selector
        }); 

        return false;
    })

    // item magnificPopup

    $('.project-area .button-group #btn1').trigger('click');

    $('.project-area .grid .test-popup-link').magnificPopup({
        type:'image',
        gallery:{enabled:true}
    });

    // owl-carousel (scroll through data)
    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            544:{
                items:2
            }
        }
    })


    // sticky nav bar

    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        } 
    }

    navbarFixed();
});

const dropdownBtn = document.getElementById("btn");
const dropdownMenu = document.getElementById("dropdown");


const toggleDropdown = function () {
    dropdownMenu.classList.toggle("show");
};

dropdownBtn.addEventListener("click", function (e) {
    e.stopPropagation();
  toggleDropdown();
});
// Close dropdown when dom element is clicked
document.documentElement.addEventListener("click", function () {
    if (dropdownMenu.classList.contains("show")) {
      toggleDropdown();
    }
  });
  