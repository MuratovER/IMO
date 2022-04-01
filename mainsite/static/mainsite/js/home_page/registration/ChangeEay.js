
function ChangeEay(eleminformationEay, obj){
    if(obj.getAttribute("type") == "password"){
        obj.setAttribute("type","text");
        eleminformationEay.style.backgroundImage ="url('../img_main/openEye.svg')";
    }
    else{
        obj.setAttribute("type","password");
        eleminformationEay.style.backgroundImage ="url('../img_main/closeEye.svg')";
    }
}