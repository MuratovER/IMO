let menuHiddenButtom = document.querySelector(".menu_links_box_displayWhere700px");
let Elem = document.querySelector(".menu_links_boxs_links");
let hideMenuInProffil = document.querySelector(".buttonsInHeader_box_usButton");
let clickOnserch = document.querySelectorAll(".clickOnserch");
let Serch = document.querySelector(".serchON");
let serchON_box = document.querySelector(".serchON_box");
let buttonsInHeader_box_lang = document.querySelector('.buttonsInHeader_box_lang');
var none = 'none';
var flex = 'flex';

if(menuHiddenButtom != undefined)
{
    menuHiddenButtom.addEventListener('click', () => FuncClickDisplayStyleCheck(Elem));
}
if(hideMenuInProffil != undefined)
{
    hideMenuInProffil.addEventListener('click', () => { OpenMenu(document.querySelector(".hideMenu_in_Proffil")); });
    console.log(Serch);
}
window.addEventListener('resize', () => CheckWindowSize(Elem))

if(clickOnserch[0] != undefined && clickOnserch[1] != undefined)
{
    clickOnserch[0].addEventListener('click', () => OpenSerchMenu(Serch, serchON_box));
    clickOnserch[1].addEventListener('click', () => OpenSerchMenu(Serch, serchON_box));
}
buttonsInHeader_box_lang.addEventListener('click', () => { OpenMenu(document.querySelector('.headerLanguage')); });
if(serchON_box != undefined && Serch != undefined)
{
    serchON_box.addEventListener('click', () => OpenSerchMenu(Serch, serchON_box));
    Serch.addEventListener('click', () => CloseSerchMenu(Serch, serchON_box));
}

function CloseSerchMenu(Ssserch, emlement1) {
    Ssserch.style.height = 0 + '%';
    Ssserch.style.top = -102 + 'px';
    emlement1.style.display = none;
}

function OpenSerchMenu(Sserch, emlement1) {
    Sserch.style.height = 100 + '%';
    Sserch.style.top = 0 + 'px';
    emlement1.style.display = flex;
}

function OpenMenu(elem) {
    let styleDisplay = window.getComputedStyle(elem, null).getPropertyValue("display");
    console.log(elem);
    if (styleDisplay == none) {
        elem.style.display = flex;
    } else if (styleDisplay == flex) {
        elem.style.display = none;
    }

}

function CheckWindowSize(elem) {
    if (window.innerWidth == 1062 || window.innerWidth < 1062) {
        elem.style.display = none;
    }
    if (window.innerWidth == 1063 || window.innerWidth > 1062) {
        elem.style.display = flex;
    }
}

function FuncClickDisplayStyleCheck(elem) {
    // getComputedStyle позволяет получить объект стилей элемента

    styleDisplay = window.getComputedStyle(elem, null).getPropertyValue('display');
    if (styleDisplay == none) {
        elem.style.display = flex;
    } else if (styleDisplay == flex) {
        elem.style.display = none;
    }
}