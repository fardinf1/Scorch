// Metacritic Rating Indicator
var meta = document.getElementsByClassName("metacritic");
for(var x = 0; x < meta.length; x++) {
	if(meta[x].textContent >= 60) {
		meta[x].style.backgroundColor = "green";
	} else if (meta[x].textContent >= 40 && meta[x].textContent <= 59) {
		meta[x].style.backgroundColor = "#FFA600";
	} else if (meta[x].textContent >= 1 && meta[x].textContent <= 39) {
		meta[x].style.backgroundColor = "red";
	}
}

var icon = document.getElementsByClassName("postTitleIcon");
var text = document.getElementsByClassName("postTitle");
for(var i = 0; i < icon.length; i++) {
	if(text[i].textContent.includes("فیلم")) {
		icon[i].classList.add("fas");
		icon[i].classList.add("fa-film");
	}
	else if (text[i].textContent.includes("سریال")) {
		icon[i].classList.add("fas");
		icon[i].classList.add("fa-video");
	}
	else if (text[i].textContent.includes("بازی")) {
		icon[i].classList.add("fas");
		icon[i].classList.add("fa-gamepad");
	}
	else if (text[i].textContent.includes("کتاب")) {
		icon[i].classList.add("far");
		icon[i].classList.add("fa-book");
	}
	else if (text[i].textContent.includes("نرم افزار")) {
		icon[i].classList.add("fas");
		icon[i].classList.add("fa-microchip");
	}
	else {
		icon[i].classList.add("fas");
		icon[i].classList.add("fa-dot-circle");
	}
}

function openNav() {
  document.getElementById("mobileNavbar").style.width = "320px";
}
function closeNav() {
  document.getElementById("mobileNavbar").style.width = "0";
}

function openSearch() {
  document.getElementById("mobileSearch").style.width = "320px";
}
function closeSearch() {
  document.getElementById("mobileSearch").style.width = "0";
}

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 7000,
    responsive:{
        320:{
            items:2,
            nav:true
        },
        480:{
            items:3,
            nav:false
        },
        768:{
            items:4,
            loop:false
        },
        980:{
            items:4,
            loop:false
        },
        1200:{
            items:5,
            loop:false
        }
    }
})