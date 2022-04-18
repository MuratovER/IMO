
function definitionBut(obj) {
    let name = obj.getAttribute('name');
    let RegistrationChoice = document.querySelector("#RegistrationChoice");

    switch(name){
        case "img2":
                let elem2 = document.querySelector(".main_box_but_form_Iamastud_main");
                if(elem2.style.display == "none"){
                    
                    // RegistrationChoice.style.display = "none";
                    elem2.style.display = "block";
                }
                else{
                    elem2.style.display = "none";
                    RegistrationChoice.style.display = "block";
                }
            break;
        default:
            console.log("rror");
    }
}

var arrayDataRegester = [7];
function FormBlockHideFunction(b=0,obj,boxesHide){
    boxesHide = Array.from(boxesHide);
    let end = boxesHide.length;
    
    for(let i = 0; i < end; i++){
        if(boxesHide[i].style.display != 'block' && boxesHide[i+1] != undefined){
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