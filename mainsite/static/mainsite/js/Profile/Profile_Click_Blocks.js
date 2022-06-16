function OnBlock(number){
    let arrayBlock = document.querySelectorAll(".Nblock");
    let i = 0;
    while( i < 3 ){
        arrayBlock[i].style.display = "none";
        i++;
    }
    arrayBlock[number].style.display = "block";
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