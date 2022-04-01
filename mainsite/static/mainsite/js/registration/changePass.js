function mouseUp3(obj){
    changeInputText3(obj);
}
function mouseUp1(obj){
    changeInputText1(obj);
}
function mouseUp(obj){
    changeInputText(obj);
}
function ConstructValidationInput(obj){
    this.obj = obj;
    this.Validation = () => {
        if(this.obj.value != '') {this.obj.style.borderColor = "green"; console.log(this.obj.style.borderColor); return true;} else{ this.obj.style.borderColor = "red"; console.log(this.obj.style.borderColor); return false;}
    }
}
var arr3 = [12];
var arr1 = [11];
var arr = [7];
for(let i = 0; i < arr.length; i++){
    arr[i] == false;
}
for(let i = 0; i < arr1.length; i++){
    arr1[i] == false;
}
for(let i = 0; i < arr3.length; i++){
    arr3[i] == false;
}
function changeInputText3(obj){
    let validObj = new ConstructValidationInput(obj);
    switch(obj.id){
        case "InputFieldName3":
            arr3[0] = validObj.Validation();
            console.log(arr3[0]);
            break;
        case "InputFieldPassword4":
            arr3[1] = validObj.Validation();
            console.log(arr3[1]);
            break;
        case "InputFieldMiddleValidationStud3":
            arr3[2] = validObj.Validation();
            break;
        case "InputFieldCountryNameValidationStud3":
            arr3[3] = validObj.Validation();
            break;
        case "InputFieldYourNativeSityStud3":
            arr3[4] = validObj.Validation();
            break;
        case "InputFieldYourNumberPhoneStud3":
            arr3[5] = validObj.Validation();
            break;
        case "InputFieldEmailAddressStud3":
            arr3[6] = validObj.Validation();
            break;
        case "InputFieldMiddleValidationPer3":
            arr3[7] = validObj.Validation();
            break;
        case "InputFieldCountryNameValidationPer3":
            arr3[8] = validObj.Validation();
            break;
        case "InputFieldYourCanYouCollPer3":
            arr3[9] = validObj.Validation();
            break;
        case "InputFieldYourNumberPhonePer3":
            arr3[10] = validObj.Validation();
            break;
        case "InputFieldEmailAddressPer3":
            arr3[11] = validObj.Validation();
            break;
        default:
            console.log("error_changePass.js-4");
    }
}
function changeInputText1(obj){
    let validObj = new ConstructValidationInput(obj);
    switch(obj.id){
        case "InputFieldName1":
            arr1[0] = validObj.Validation();
            console.log(arr1[0]);
            break;
        case "InputFieldPassword1":
            arr1[1] = validObj.Validation();
            console.log(arr1[1]);
            break;
        case "InputFieldMiddleValidationStud1":
            arr1[2] = validObj.Validation();
            break;
        case "InputFieldCountryNameValidationStud1":
            arr1[3] = validObj.Validation();
            break;
        case "InputFieldYourNativeSityStud1":
            arr1[4] = validObj.Validation();
            break;
        case "InputFieldYourNumberPhoneStud1":
            arr1[5] = validObj.Validation();
            break;
        case "InputFieldEmailAddressStud1":
            arr1[6] = validObj.Validation();
            break;
        case "InputFieldMiddleValidationPer1":
            arr1[7] = validObj.Validation();
            break;
        case "InputFieldCountryNameValidationPer1":
            arr1[8] = validObj.Validation();
            break;
        case "InputFieldYourNumberPhonePer1":
            arr1[9] = validObj.Validation();
            break;
        case "InputFieldEmailAddressPer1":
            arr1[10] = validObj.Validation();
            break;
        default:
            console.log("error_changePass.js-4");
    }
}
function changeInputText(obj){
    let validObj = new ConstructValidationInput(obj);
    switch(obj.id){
        case "InputFieldName":
            arr[0] = validObj.Validation();
            console.log(arr[0]);
            break;
        case "InputFieldPassword":
            arr[1] = validObj.Validation();
            console.log(arr[1]);
            break;
        case "InputFieldMiddleValidation":
            arr[2] = validObj.Validation();
            break;
        case "InputFieldCountryNameValidation":
            arr[3] = validObj.Validation();
            break;
        case "InputFieldYourNativeSity":
            arr[4] = validObj.Validation();
            break;
        case "InputFieldYourNumberPhone":
            arr[5] = validObj.Validation();
            break;
        case "InputFieldEmailAddress":
            arr[6] = validObj.Validation();
            break;
        default:
            console.log("error_changePass.js-4");
    }
}