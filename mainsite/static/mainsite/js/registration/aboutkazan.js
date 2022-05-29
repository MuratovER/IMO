AOS.init({
    offset: 200,
    duration: 1000,
    easing: 'ease-in-quad',
    delay: 100,
});
const gra = function(min, max) {
    return Math.random() * (max - min) + min;
}
const init = function(){
    let items = document.querySelectorAll('section');
        for (let i = 0; i < items.length; i++){
            items[i].style.background = randomColor({luminosity: 'light'});
        }
    cssScrollSnapPolyfill()
}
init();