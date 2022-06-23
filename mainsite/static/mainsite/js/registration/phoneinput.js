document.addEventListener("DOMContentLoaded", function () {
    let phoneInputs = document.querySelectorAll('input[data-tel-input]');

    let getInputNumbersValue = function (input) {
        return input.value.replace(/\D/g, "");
    }

    let onPhoneInput = function (e) {
        let input = e.target,
            inputNumbersValue = getInputNumbersValue(input),
            formattedInputValue = "",
            selectionStart = input.selectionStart;

        if (!inputNumbersValue) {
            return input.value = "";
        }

        if (input.value.length != selectionStart) {
            if (e.data && /\D/g.test(e.data)) {
                input.value = inputNumbersValue;
            }
            return;
        }

        // if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
        //     //Russian phone number
        //     if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
        //     let firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
        //     formattedInputValue = firstSymbols + " ";
        //     if (inputNumbersValue.length > 1) {
        //         formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
        //     }
        //     if (inputNumbersValue.length >= 5) {
        //         formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
        //     }
        //     if (inputNumbersValue.length >= 8) {
        //         formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
        //     }
        //     if (inputNumbersValue.length >= 10) {
        //         formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
        //     }

        // } else {
        //     // not Russian phone number

        //     formattedInputValue = "+" + inputNumbersValue.substring(0, 16);
        // }
        // input.value = formattedInputValue;

        if (inputNumbersValue[0] >= 0) {
            console.log("hellow");
            if (inputNumbersValue.length >= 0) {
                formattedInputValue += "(" + inputNumbersValue.substring(0, 3);
            }
            if (inputNumbersValue.length >= 4) {
                formattedInputValue += ") " + inputNumbersValue.substring(3, 6);
            }
            if (inputNumbersValue.length >= 7) {
                formattedInputValue += '-' + inputNumbersValue.substring(6, 8);
            }
            if (inputNumbersValue.length >= 9) {
                formattedInputValue += '-' + inputNumbersValue.substring(8, 10);
            }
            if (inputNumbersValue.length >= 11) {
                formattedInputValue += '-' + inputNumbersValue.substring(10, 12);
            }
        } else {
            console.log("no-hellow")
        }
        input.value = formattedInputValue;
    }

    let onPhoneKeyDown = function (e) {
        let input = e.target;
        if (e.keyCode == 8 && getInputNumbersValue(input).length == 1) {
            input.value = "";
        }
    }

    let onPhonePaste = function (e) {
        let pastedText = e.clipboardData || window.clipboardData,
            input = e.target,
            inputNumbersValue = getInputNumbersValue(input);
        if (pasted) {
            let pastedText = pasted.getData("Text");
            if (/\D/g.test(pastedText)) {
                input.value = inputNumbersValue;
            }
        }
    }

    for (i = 0; i < phoneInputs.length; i++) {
        let input = phoneInputs[i];
        input.addEventListener("input", onPhoneInput);
        input.addEventListener("keydown", onPhoneKeyDown);
        input.addEventListener("paste", onPhonePaste);
    }
});