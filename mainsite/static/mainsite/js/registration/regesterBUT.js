
function definitionBut(obj) {
    let name = obj.getAttribute('name');
    let RegistrationChoice = document.querySelector("#RegistrationChoice");

    switch(name){
        case 'img1':
                let elem1 = document.querySelector(".main_box_but_form_Iamastud_main1");
                if(elem1.style.display == "none"){
                    
                    RegistrationChoice.style.display = "none";
                    elem1.style.display = "block";
                }
                else{
                    elem1.style.display = "none";
                    RegistrationChoice.style.display = "block";
                }
            break;
        case "img2":
                let elem2 = document.querySelector(".main_box_but_form_Iamastud_main");
                if(elem2.style.display == "none"){
                    
                    RegistrationChoice.style.display = "none";
                    elem2.style.display = "block";
                }
                else{
                    elem2.style.display = "none";
                    RegistrationChoice.style.display = "block";
                }
            break;
        case 'img3':
                let elem3 = document.querySelector(".main_box_but_form_Iamastud_main3");
                if(elem3.style.display == "none"){
                
                    RegistrationChoice.style.display = "none";
                    elem3.style.display = "block";
                }
                else{
                    elem3.style.display = "none";
                    RegistrationChoice.style.display = "block";
                }
            break;
        default:
            console.log("rror");
    }
}

var arrayDataRegester3 = [12];
function FormBlockHideFunction3(b=0,obj,boxesHide){
    boxesHide = Array.from(boxesHide);
    let end = boxesHide.length;
    console.log('b = '+b);
    console.log("arr3[0]="+arr3[0]+"-arr3[1]="+arr3[1]);
    for(let i = 0; i < end; i++){
        if(boxesHide[i].style.display != 'none' && boxesHide[i+1] != undefined){
            
            console.log(boxesHide[i+1]);
            if(b == 2){
                console.log('bbb = '+b);
                console.log("arr3[0]="+arr3[0]+"-arr3[1]="+arr3[1]);
                if(arr3[0] == true && arr3[1] == true){
                    arrayDataRegester3[0] = document.querySelector("#InputFieldName3").value;
                    arrayDataRegester3[1] = document.querySelector("#InputFieldPassword4").value;
                    
                    boxesHide[i].style.display = 'none';
                    boxesHide[i+1].style.display = 'block';
                    
                }
            }
            if(b == 3){
                console.log('bbb = '+b);
                if(arr3[0] == true && arr3[1] == true && arr3[2] == true && arr3[3] == true && arr3[4] == true && arr3[5] == true && arr3[6] == true){
                    arrayDataRegester3[2] = document.querySelector("#InputFieldMiddleValidationStud3").value;
                    arrayDataRegester3[3] = document.querySelector("#InputFieldCountryNameValidationStud3").value;
                    arrayDataRegester3[4] = document.querySelector("#InputFieldYourNativeSityStud3").value;
                    arrayDataRegester3[5] = document.querySelector("#InputFieldYourNumberPhoneStud3").value;
                    arrayDataRegester3[6] = document.querySelector("#InputFieldEmailAddressStud3").value;
                    console.log(arrayDataRegester3[6]);
                    boxesHide[i].style.display = 'none';
                    boxesHide[i+1].style.display = 'block';
                }
            }
            if(b == 4){
                console.log('bbb = '+b);
                if(arr3[0] == true && arr3[1] == true && arr3[2] == true && arr3[3] == true && arr3[4] == true && arr3[5] == true && arr3[6] == true &&arr3[7] == true && arr3[8] == true && arr3[9] == true && arr3[10] == true && arr3[11] == true){
                    arrayDataRegester3[7] = document.querySelector("#InputFieldMiddleValidationPer3").value;
                    arrayDataRegester3[8] = document.querySelector("#InputFieldCountryNameValidationPer3").value;
                    arrayDataRegester3[9] = document.querySelector("#InputFieldYourCanYouCollPer3").value;
                    arrayDataRegester3[10] = document.querySelector("#InputFieldYourNumberPhonePer3").value;
                    arrayDataRegester3[11] = document.querySelector("#InputFieldEmailAddressPer3").value;
                    console.log(arrayDataRegester3[6]);
                    boxesHide[i].style.display = 'none';
                    boxesHide[i+1].style.display = 'block';
                    let InputFieldPassword3 = document.querySelector("#InputFieldPassword5");
                    InputFieldPassword3.value = arrayDataRegester3[1];
                    console.log("password in array = "+arrayDataRegester3[1]);
                    console.log("password in input value = "+InputFieldPassword3.value);
                    let DataPersText = document.querySelectorAll(".DataPersText3");
                    DataPersText[0].innerText = arrayDataRegester3[0];
                    DataPersText[1].innerText = arrayDataRegester3[3];//cuntry
                    console.log("stud from sity = "+arrayDataRegester3[2]);
                    DataPersText[2].innerText = arrayDataRegester3[4];
                    DataPersText[3].innerText = arrayDataRegester3[2];
                    DataPersText[4].innerText = arrayDataRegester3[5];
                    DataPersText[5].innerText = arrayDataRegester3[6];
                    DataPersText[6].innerText = arrayDataRegester3[7];
                    DataPersText[7].innerText = arrayDataRegester3[8];
                    DataPersText[8].innerText = arrayDataRegester3[9];
                    DataPersText[9].innerText = arrayDataRegester3[10];
                    DataPersText[10].innerText = arrayDataRegester3[11];
                }
            }
            if(b == 5){
                boxesHide[i].style.display = 'none';
                boxesHide[i+1].style.display = 'block';
                console.log("запуск таймера 5 секунд");
                funcTime5sec3();
            }
            if(i == 6){
                //console.log("запуск таймера 5 секунд");
                //funcTime5sec1();
            }
            break;
        }
    }
}

var arrayDataRegester1 = [11];
function FormBlockHideFunction1(b=0,obj,boxesHide){
    boxesHide = Array.from(boxesHide);
    let end = boxesHide.length;
    console.log('b = '+b);
    for(let i = 0; i < end; i++){
        if(boxesHide[i].style.display != 'none' && boxesHide[i+1] != undefined){
            
            console.log(boxesHide[i+1]);
            if(b == 2){
                console.log('bbb = '+b);
                if(arr1[0] == true && arr1[1] == true){
                    arrayDataRegester1[0] = document.querySelector("#InputFieldName1").value;
                    arrayDataRegester1[1] = document.querySelector("#InputFieldPassword1").value;
                    
                    boxesHide[i].style.display = 'none';
                    boxesHide[i+1].style.display = 'block';
                    
                }
            }
            if(b == 3){
                console.log('bbb = '+b);
                if(arr1[0] == true && arr1[1] == true && arr1[2] == true && arr1[3] == true && arr1[4] == true && arr1[5] == true && arr1[6] == true){
                    arrayDataRegester1[2] = document.querySelector("#InputFieldMiddleValidationStud1").value;
                    arrayDataRegester1[3] = document.querySelector("#InputFieldCountryNameValidationStud1").value;
                    arrayDataRegester1[4] = document.querySelector("#InputFieldYourNativeSityStud1").value;
                    arrayDataRegester1[5] = document.querySelector("#InputFieldYourNumberPhoneStud1").value;
                    arrayDataRegester1[6] = document.querySelector("#InputFieldEmailAddressStud1").value;
                    console.log(arrayDataRegester1[6]);
                    boxesHide[i].style.display = 'none';
                    boxesHide[i+1].style.display = 'block';
                }
            }
            if(b == 4){
                console.log('bbb = '+b);
                if(arr1[0] == true && arr1[1] == true && arr1[2] == true && arr1[3] == true && arr1[4] == true && arr1[5] == true && arr1[6] == true &&arr1[7] == true && arr1[8] == true && arr1[9] == true && arr1[10] == true ){
                    arrayDataRegester1[7] = document.querySelector("#InputFieldMiddleValidationPer1").value;
                    arrayDataRegester1[8] = document.querySelector("#InputFieldCountryNameValidationPer1").value;
                    arrayDataRegester1[9] = document.querySelector("#InputFieldYourNumberPhonePer1").value;
                    arrayDataRegester1[10] = document.querySelector("#InputFieldEmailAddressPer1").value;
                    console.log(arrayDataRegester1[6]);
                    boxesHide[i].style.display = 'none';
                    boxesHide[i+1].style.display = 'block';
                    let InputFieldPassword3 = document.querySelector("#InputFieldPassword3");
                    InputFieldPassword3.value = arrayDataRegester1[1];
                    console.log("password in array = "+arrayDataRegester1[1]);
                    console.log("password in input value = "+InputFieldPassword3.value);
                    let DataPersText = document.querySelectorAll(".DataPersText1");
                    DataPersText[0].innerText = arrayDataRegester1[0];
                    DataPersText[1].innerText = arrayDataRegester1[3];//cuntry
                    console.log("stud from sity = "+arrayDataRegester1[2]);
                    DataPersText[2].innerText = arrayDataRegester1[4];
                    DataPersText[3].innerText = arrayDataRegester1[2];
                    DataPersText[4].innerText = arrayDataRegester1[5];
                    DataPersText[5].innerText = arrayDataRegester1[6];
                    DataPersText[6].innerText = arrayDataRegester1[7];
                    DataPersText[7].innerText = arrayDataRegester1[8];
                    DataPersText[8].innerText = arrayDataRegester1[9];
                    DataPersText[9].innerText = arrayDataRegester1[10];
                }
            }
            if(b == 5){
                boxesHide[i].style.display = 'none';
                boxesHide[i+1].style.display = 'block';
                console.log("запуск таймера 5 секунд");
                funcTime5sec1();
            }
            if(i == 6){
                //console.log("запуск таймера 5 секунд");
                //funcTime5sec1();
            }
            break;
        }
    }
}
var arrayDataRegester = [7];
function FormBlockHideFunction(b=0,obj,boxesHide){
    boxesHide = Array.from(boxesHide);
    let end = boxesHide.length;
    
    for(let i = 0; i < end; i++){
        if(boxesHide[i].style.display != 'none' && boxesHide[i+1] != undefined){
            // for(let l = 0; l < arr.length; l++){
                
            // }
            console.log('b = '+b);
            if(b == 1){
                if(arr[0] == true && arr[1] == true){
                    arrayDataRegester[0] = document.querySelector("#InputFieldName").value;
                    arrayDataRegester[1] = document.querySelector("#InputFieldPassword").value;
                    boxesHide[i].style.display = 'none';
                    boxesHide[i+1].style.display = 'block';
                    
                }
            }
            if(b == 2){
                if(arr[0] == true && arr[1] == true && arr[2] == true && arr[3] == true && arr[4] == true && arr[5] == true && arr[6] == true){
                    arrayDataRegester[2] = document.querySelector("#InputFieldMiddleValidation").value;
                    arrayDataRegester[3] = document.querySelector("#InputFieldCountryNameValidation").value;
                    arrayDataRegester[4] = document.querySelector("#InputFieldYourNativeSity").value;
                    arrayDataRegester[5] = document.querySelector("#InputFieldYourNumberPhone").value;
                    arrayDataRegester[6] = document.querySelector("#InputFieldEmailAddress").value;
                    console.log(arrayDataRegester[6]);
                    boxesHide[i].style.display = 'none';
                    boxesHide[i+1].style.display = 'block';
                    let InputFieldPassword2 = document.querySelector("#InputFieldPassword2");
                    InputFieldPassword2.value = arrayDataRegester[1];
                    let DataPersText = document.querySelectorAll(".DataPersText");
                    DataPersText[0].innerText = arrayDataRegester[0];
                    DataPersText[1].innerText = arrayDataRegester[2]; //тут какая то хуйня но я забыл
                    DataPersText[2].innerText = arrayDataRegester[3];
                    DataPersText[3].innerText = arrayDataRegester[4];
                    DataPersText[4].innerText = arrayDataRegester[5];
                    DataPersText[5].innerText = arrayDataRegester[6];
                }
            }
            if(b == 3){
                boxesHide[i].style.display = 'none';
                boxesHide[i+1].style.display = 'block';
            }
            if(i == 2){
                console.log("запуск таймера 5 секунд");
                funcTime5sec();
            }
            break;
        }
    }
}
function funcTime5sec3(){
    let numberTime = document.querySelector("#numberTime3");
    let time1 = setTimeout(() => {
        clearTimeout(time1);
        document.location.href = "https://vk.com/murlak";
        numberTime.innerText = "1";
        console.log("1");
        
    },5000);
    let time2 = setTimeout(() => {
        clearTimeout(time2);
        numberTime.innerText = "2";
        console.log("2");
        
    },4000);
    let time3 = setTimeout(() => {
        clearTimeout(time3);
        numberTime.innerText = "3";
        console.log("3");
        
    },3000);
    let time4 = setTimeout(() => {
        clearTimeout(time4);
        numberTime.innerText = "4";
        console.log("4");
        
    },2000);
    let time5 = setTimeout(() => {
        clearTimeout(time5);
        numberTime.innerText = "5";
        console.log("5");
    },1000);
}
function funcTime5sec1(){
    let numberTime = document.querySelector("#numberTime1");
    let time1 = setTimeout(() => {
        clearTimeout(time1);
        document.location.href = "https://vk.com/murlak";
        numberTime.innerText = "1";
        console.log("1");
        
    },5000);
    let time2 = setTimeout(() => {
        clearTimeout(time2);
        numberTime.innerText = "2";
        console.log("2");
        
    },4000);
    let time3 = setTimeout(() => {
        clearTimeout(time3);
        numberTime.innerText = "3";
        console.log("3");
        
    },3000);
    let time4 = setTimeout(() => {
        clearTimeout(time4);
        numberTime.innerText = "4";
        console.log("4");
        
    },2000);
    let time5 = setTimeout(() => {
        clearTimeout(time5);
        numberTime.innerText = "5";
        console.log("5");
    },1000);
}
function funcTime5sec(){
    let numberTime = document.querySelector("#numberTime");
    let time1 = setTimeout(() => {
        clearTimeout(time1);
        document.location.href = "https://vk.com/murlak";
        numberTime.innerText = "1";
        console.log("1");
        
    },5000);
    let time2 = setTimeout(() => {
        clearTimeout(time2);
        numberTime.innerText = "2";
        console.log("2");
        
    },4000);
    let time3 = setTimeout(() => {
        clearTimeout(time3);
        numberTime.innerText = "3";
        console.log("3");
        
    },3000);
    let time4 = setTimeout(() => {
        clearTimeout(time4);
        numberTime.innerText = "4";
        console.log("4");
        
    },2000);
    let time5 = setTimeout(() => {
        clearTimeout(time5);
        numberTime.innerText = "5";
        console.log("5");
    },1000);
}