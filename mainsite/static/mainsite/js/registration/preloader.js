// window.onload = function () {
//     setTimeout(function () {
//         document.getElementById("preloader_malc").style.display = "none";
//     }, 1500);
// };

window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
}