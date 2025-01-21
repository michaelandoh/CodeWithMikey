$(document).ready(function () {
    const header = $("#mainHeader");

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            header.addClass("sticky");
        } else {
            header.removeClass("sticky");
        }
    });
});


//background 



//scroll logic 


document.addEventListener("scroll", () => {
    const header = document.getElementById("mainHeader");
    if (window.scrollY > 50) { // Adjust scroll threshold as needed
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


// Enable Bootstrap tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));