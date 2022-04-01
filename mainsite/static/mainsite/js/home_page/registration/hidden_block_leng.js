let elem = document.getElementById("hidden_block");
elem.style.display = 'flex';
function clickHeddenFuncton(){
    let elem = document.getElementById("hidden_block");
    if(elem.style.display == "none"){
        elem.style.display = 'flex';
        console.log(elem.style.display);
    }
    else{
        elem.style.display = 'none';
        console.log(elem.style.display);
    }
}
function exitBT(){
    let objs = document.querySelectorAll(".FormBlockHideFunctionMainBtExit");
    let mainObj = document.querySelector('#RegistrationChoice');
    for(let i = 0; i < objs.length; i++){
        if(objs[i].style.display == 'block'){
            objs[i].style.display = 'none';
            mainObj.style.display='block';
        }
    }
}