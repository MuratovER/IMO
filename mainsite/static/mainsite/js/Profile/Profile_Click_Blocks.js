function OnBlock(number){
    let bottoms = document.querySelectorAll(".bottomClick");
    
    let arrayBlock = document.querySelectorAll(".Nblock");
    let i = 0;
    while( i < 3 ){
        arrayBlock[i].style.display = "none";
        bottoms[i].style.background = "var(--Profile-list-BackBackground)";
        i++;
    }
    arrayBlock[number].style.display = "block";
    bottoms[number].style.background = "var(--Profile-list-changeBackground)";
}
function ClickPlasBlock(NameBlock){
    elem = document.querySelector(NameBlock);
    let block = "block";
    let none = "none";
    let elemStatus = window.getComputedStyle(elem,null).getPropertyValue("display");
    if(elemStatus == none)
        elem.style.display = block;
    if(elemStatus == block)
        elem.style.display = none;
}
function CopyToBuf()
{
    let elem = document.querySelector(".verification-mail-field_copyto");
    navigator.clipboard.writeText(elem.innerText);
    console.log(navigator.clipboard.readText() + " Скопировано");
}

// chage Profile list ///////////////////////////////////////////////////////////////////////

const toggleSwitch = document.querySelector('.form-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {        document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);