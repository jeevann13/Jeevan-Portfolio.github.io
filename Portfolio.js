//For typed text
var typed = new Typed(".Typed-text", {
    strings: ["ront-End Developer!!"],
    typeSpeed: 50,
    backSpeed: 100,
    loop: true
})



const mobile_nav = document.querySelector('.navbar-menu');
const nav_header = document.querySelector('.container');


// document.onclick = function(e) {
//     if (e.target.id !== 'mobile_nav' && e.target.id !== 'nav_header'){
//         mobile_nav.classList.remove('active');
//         nav_header.classList.remove('active');
//     }
// }

document.onclick = function (e) {
    if (!mobile_nav.contains(e.target) && !nav_header.contains(e.target)) {
        mobile_nav.classList.remove('active');
        nav_header.classList.remove('active');
    }
}


mobile_nav.onclick = function () {
    mobile_nav.classList.toggle('active');
    nav_header.classList.toggle('active');
}





