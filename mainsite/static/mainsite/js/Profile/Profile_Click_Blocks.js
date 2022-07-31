function OnBlock(number){
    let bottoms = document.querySelectorAll(".bottomClick");
    
    let arrayBlock = document.querySelectorAll(".Nblock");
    let i = 0;
    while( i < 3 ){
        arrayBlock[i].style.display = "none";
        bottoms[i].style.background = "#fff";
        i++;
    }
    arrayBlock[number].style.display = "block";
    bottoms[number].style.background = "#F2F2F2";
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