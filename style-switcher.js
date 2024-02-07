// TOGGLE STYLE SWITCH CLICK ON SWITCH

// const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
// styleSwitcherToggle.addEventListener("click", () => {
//     document.querySelector(".style-switcher").classList.toggle("open");
// })


// HIDE SWITCHERT THEME ON SCROLL BAR

window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

// THEME COLORS

const alternateStyles = document.querySelectorAll('alternate-style');

function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute('title')) {
            style.removeAttribute('disabled');
        } else {
            style.setAttribute('disabled', 'true');
        }
    });
}
document.addEventListener('DOMContentLoaded', function () {
    const alternateStyles = document.querySelectorAll('.alternate-style');

    function setActiveStyle(color) {
        alternateStyles.forEach((style) => {
            if (color === style.getAttribute('title')) {
                style.removeAttribute('disabled');
            } else {
                style.setAttribute('disabled', 'true');
            }
        });
    }

    // Example usage:
    setActiveStyle('color-1');

    // Style switcher toggler
    const switcherToggler = document.querySelector('.style-switcher-toggler');
    const styleSwitcher = document.querySelector('.style-switcher');

    switcherToggler.addEventListener('click', function () {
        styleSwitcher.classList.toggle('open');
    });

    // Theme color click event
    const colorSpans = document.querySelectorAll('.colors span');

    colorSpans.forEach((span) => {
        span.addEventListener('click', function () {
            const color = span.classList[0];
            setActiveStyle(color);
        });
    });
});



// THEME LIGHT & DARK

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", ()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun")
    dayNight.querySelector("i").classList.toggle("fa-moon")
    document.body.classList.toggle("dark")
})
window.addEventListener("load", ()=>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun")
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon")
    }
})
