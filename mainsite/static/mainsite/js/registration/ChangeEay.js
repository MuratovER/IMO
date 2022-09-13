function ChangeEay(eleminformationEay, obj){
    if(obj.getAttribute("type") == "password"){
        obj.setAttribute("type","text");
        eleminformationEay.style.backgroundImage ="url('../../../static/mainsite/img/openEye.svg')";
    }
    else{
        obj.setAttribute("type","password");
        eleminformationEay.style.backgroundImage ="url('../../../static/mainsite/img/closeEye.svg')";
    }
}