function OnBlock(number){
    let arrayBlock = document.querySelectorAll(".Nblock");
    let i = 0;
    while( i < 3 ){
        arrayBlock[i].style.display = "none";
        i++;
    }
    arrayBlock[number].style.display = "block";
}