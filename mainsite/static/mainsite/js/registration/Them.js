function settings(name="settings"){
    this.name = name;
    this.settBackColor = (obj, BGcolor = "#000") => {
        if(obj != null){
            obj.style.backgroundColor = BGcolor;
        }
        else
           return false;
    }
    this.settTextColor = (obj, color = "#fff") => {
        if(obj != null){
            obj.style.color = color;
        }
        else
           return false;
    }
    this.settBackImage = (obj, BGimg = "url('../img_main/master.jpg')") => {
        if(obj != null){
            obj.style.backgroundImage = "url('../img_main/"+BGimg+"')";
        }
        else
           return false;
    }
    this.settForBackColor = (obj, BGcolor = "#000") => {
        if(obj != null){
            for(let i = 0; i < obj.length; i++){
                obj[i].style.backgroundColor = BGcolor;
            }
        }
        else
           return false;
    }
    this.settForTextColor = (obj, color = "#fff") => {
        if(obj != null){
            for(let i = 0; i < obj.length; i++){
                obj[i].style.color = color;
            }
        }
        else 
            return false;
    }
    this.settAttribute = (obj, atrib = "class", value = "not_class") => {
        if(obj != null){
            obj.setAttribute(atrib,value);
        }
        else 
            return false;
    }
    this.settForBorderColor = (obj,borderColor = "red") => {
        if(obj != null){
            for(let i = 0; i < obj.length; i++){
                obj[i].style.borderColor = borderColor;
            }
        }
        else
            return false;
    }
    this.settForAttribute = (obj, atrib = "class", value = "not_class") => {
        if(obj != null){
            for(let i = 0; i < obj.length; i++){
                obj[i].setAttribute(atrib,value);
            }
        }
        else
            return false;
    }
}
var set = new settings();

let elem2 = document.querySelector("#main_block");
let elemImgLogo = document.querySelector("#imgLogo");
let elemArrow = document.querySelector("#arrow");
let elemButtomExit = document.querySelector("#buttomExit");
let elemTextLogin = document.querySelector("#TextLogin");
let elemTextButtomLogin = document.querySelector("#TextButtomLogin");
let elemInputFieldName = document.querySelector("#InputFieldName");
let elemInputFieldPassword = document.querySelector("#InputFieldPassword");
let elemLangs = document.querySelector("#Langs");
let elemHiddenBlock = document.querySelector("#hidden_block");

let elemHiddenBlockLengRU = document.querySelector("#HiddenBlockLengRU");
let elemHiddenBlockLengENG = document.querySelector("#HiddenBlockLengENG");
let elemHiddenBlockLengChinese = document.querySelector("#HiddenBlockLengChinese");
let elemHiddenBlockLengSpanish = document.querySelector("#HiddenBlockLengSpanish");

let footer_box_text1 = document.querySelector("#footer_box_text1");
let footer_box_text2 = document.querySelector("#footer_box_text2");
let elemRegesterText = document.querySelector("#regesterText");
let elemclorHR_B81 = document.querySelector("#clorHR_B81");
let elemclorHR_B80 = document.querySelector("#clorHR_B80");
let elemclorHR_B82 = document.querySelector("#clorHR_B82");
let elemHend = document.querySelector("#hend");
let elemForgotPassword = document.querySelector("#ForgotPassword");

let elemhidden_block_id1 = document.querySelector("#hidden_block_id1");
let elemhidden_block_id2 = document.querySelector("#hidden_block_id2");
let elemhidden_block_id3 = document.querySelector("#hidden_block_id3");
let elemhidden_block_id4 = document.querySelector("#hidden_block_id4");
set.settBackColor(elem2,"rgb(0, 2, 18)");

let elemsThemButtomRegister = document.querySelectorAll(".main_block_form_flex_Regester_boxMainBoxes_ButtomRegister");
let elemsThemboxMainBoxes_text = document.querySelectorAll(".main_block_form_flex_Regester_boxMainBoxes_text");
let elemsThem_ButtomRegister1Shadow = document.querySelectorAll(".Them_ButtomRegister1");
let Them_ButtomRegister_img1 = document.querySelector(".Them_ButtomRegister_img1");
let Them_ButtomRegister_img2 = document.querySelector(".Them_ButtomRegister_img2");
let Them_ButtomRegister_img3 = document.querySelector(".Them_ButtomRegister_img3");


function clickThemeFunction(){
    let elem2 = document.querySelector("#main_block");
    console.log(elem2.style.backgroundColor);
    if(elem2.style.backgroundColor == "rgb(0, 2, 18)")
    {
        set.settBackColor(elem2,"#fff");
        set.settAttribute(elemImgLogo,"src","img/mainICON_2.svg");
        set.settBackImage(elemArrow,'arrow_2.svg');
        set.settTextColor(elemButtomExit,"#6D6F72");
        set.settTextColor(elemTextLogin,"#000");
        set.settTextColor(elemTextButtomLogin,"#545454");
        set.settAttribute(elemInputFieldName,"class","main_block_form_input_2");
        set.settAttribute(elemInputFieldPassword,"class","main_block_form_input_2");
        set.settAttribute(elemLangs,"class","main_block_blok_TopMenu_Addition_langs_2 Lang-name");
        set.settAttribute(elemHiddenBlock,"class","hidden_block_2");
        set.settAttribute(elemHiddenBlockLengRU,"class","hidden_block_leng_2_RU");
        set.settAttribute(elemHiddenBlockLengENG,"class","hidden_block_leng_2_ENG");
        set.settAttribute(elemHiddenBlockLengChinese,"class","hidden_block_leng_2_Chinese _Chinese");
        set.settAttribute(elemHiddenBlockLengSpanish,"class","hidden_block_leng_2_Spanish");
        set.settAttribute(footer_box_text2,"class","main_block_footer_box_text2 LengText-TermsOfUse");
        set.settAttribute(footer_box_text1,"class","main_block_footer_box_text2 LengText-PrivacyPolicy");

        set.settTextColor(elemRegesterText,"#000");
        set.settBackColor(elemclorHR_B81,"#B8B8B8");
        set.settTextColor(elemclorHR_B80,"#B8B8B8");
        set.settBackColor(elemclorHR_B82,"#B8B8B8");
        
        set.settAttribute(elemForgotPassword,"class","main_block_form_ForgotPassword_2");
        set.settBackColor(elemhidden_block_id1,"#F5F5F5");
        set.settBackColor(elemhidden_block_id2,"#F5F5F5");
        set.settBackColor(elemhidden_block_id3,"#F5F5F5");
        set.settBackColor(elemhidden_block_id4,"#F5F5F5");
            console.log("if,"+elemImgLogo.getAttribute('src')+elemArrow.style.backgroundImage+elemLangs.style.Color);
        set.settForBackColor(elemsThemButtomRegister,"#fff");
        set.settForBorderColor(elemsThemButtomRegister,"#EDEDED");
        set.settForTextColor(elemsThemboxMainBoxes_text,"#000");
        set.settForAttribute(elemsThem_ButtomRegister1Shadow,"class","main_block_form_flex_Regester_boxMainBoxes_ButtomRegister Them_ButtomRegister2");

        set.settBackImage(Them_ButtomRegister_img1,'IAmpreds2.svg');
        set.settBackImage(Them_ButtomRegister_img2,'IAmAStudent2.svg');
        set.settBackImage(Them_ButtomRegister_img3,'RecrutAgens2.svg');
    }
    
    else{
        set.settBackColor(elem2,"rgb(0, 2, 18)");
        set.settAttribute(elemImgLogo,"src","img/mainICON_1.svg");
        set.settBackImage(elemArrow,'arrow_1.svg');
        set.settTextColor(elemButtomExit,"#CECECE");
        set.settTextColor(elemTextLogin,"#fff");
        set.settTextColor(elemTextButtomLogin,"#7E7E84");
        set.settAttribute(elemInputFieldName,"class","main_block_form_input_1");
        set.settAttribute(elemInputFieldPassword,"class","main_block_form_input_1");
        set.settAttribute(elemLangs,"class","main_block_blok_TopMenu_Addition_langs_1 Lang-name");
        set.settAttribute(elemHiddenBlock,"class","hidden_block_1");
        set.settAttribute(elemHiddenBlockLengRU,"class","hidden_block_leng_1_RU");
        set.settAttribute(elemHiddenBlockLengENG,"class","hidden_block_leng_1_ENG");
        set.settAttribute(elemHiddenBlockLengChinese,"class","hidden_block_leng_1_Chinese _Chinese");
        set.settAttribute(elemHiddenBlockLengSpanish,"class","hidden_block_leng_1_Spanish");
        set.settAttribute(footer_box_text2,"class","main_block_footer_box_text1 LengText-TermsOfUse");
        set.settAttribute(footer_box_text1,"class","main_block_footer_box_text1 LengText-PrivacyPolicy");


        set.settTextColor(elemRegesterText,"#fff");
        set.settBackColor(elemclorHR_B81,"#44495B");
        set.settTextColor(elemclorHR_B80,"#44495B");
        set.settBackColor(elemclorHR_B82,"#44495B");
        
        set.settAttribute(elemForgotPassword,"class","main_block_form_ForgotPassword_1");
        set.settBackColor(elemhidden_block_id1,"#27262C");
        set.settBackColor(elemhidden_block_id2,"#27262C");
        set.settBackColor(elemhidden_block_id3,"#27262C");
        set.settBackColor(elemhidden_block_id4,"#27262C");
            console.log("else"+elemImgLogo.getAttribute('src')+elemLangs.style.Color);
        set.settForBackColor(elemsThemButtomRegister,"#191C23");
        set.settForBorderColor(elemsThemButtomRegister,"#26282F");
        set.settForTextColor(elemsThemboxMainBoxes_text,"#fff");
        set.settForAttribute(elemsThem_ButtomRegister1Shadow,"class","main_block_form_flex_Regester_boxMainBoxes_ButtomRegister Them_ButtomRegister1");

        
        set.settBackImage(Them_ButtomRegister_img1,'IAmpreds1.svg');
        set.settBackImage(Them_ButtomRegister_img2,'IAmAStudent1.svg');
        set.settBackImage(Them_ButtomRegister_img3,'RecrutAgens1.svg');
    }
    console.log("hello");
    console.log(elem2.style.backgroundColor);
}