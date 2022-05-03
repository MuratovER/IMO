document.querySelector(".indexEnterWindow").addEventListener("DOMContentLoaded", defineLang(window.localStorage.SavingTheCurrentLanguage, document.querySelector('.Lang-name')));
//alert(window.localStorage.SavingTheCurrentLanguage);
function defineLang(obj, Lang) {
    //alert("обновилось");
    var body = document.querySelector(".indexEnterWindow");
    if (body != undefined)
        body = "indexEnterWindow";
    else
        console.log("translater.js-4");
    let htmlLang = document.querySelector('html');
    let objID;
    if (typeof(obj) == "object")
        objID = obj.id;

    else
        objID = window.localStorage.SavingTheCurrentLanguage;

    if (window.localStorage.SavingTheCurrentLanguage == undefined) {
        window.localStorage.SavingTheCurrentLanguage = "Ru";
        objID = "Ru";
    }
    // if(window.localStorage.SavingTheCurrentLanguage == "Ru"){
    //     objID="Ru";
    // }
    // if(window.localStorage.SavingTheCurrentLanguage == "Eng"){
    //     objID="Eng";
    // }
    switch (objID) {
        case "Ru":
            Lang.value = 'Ru';
            window.localStorage.SavingTheCurrentLanguage = "Ru";
            objID = "Ru";

            //alert(window.localStorage.SavingTheCurrentLanguage);
            HASAttribute('ru', htmlLang);
            console.log(htmlLang.getAttribute('lang'));
            TranslateLang("Ru", body);
            ChangeActivIconLanguage("Ru");
            clickHeddenFuncton()
            break;
        case "Eng":
            Lang.value = 'Eng';
            window.localStorage.SavingTheCurrentLanguage = "Eng";
            objID = "Eng";

            //alert(window.localStorage.SavingTheCurrentLanguage);
            HASAttribute('en', htmlLang);
            console.log(htmlLang.getAttribute('lang'));
            TranslateLang("Eng", body);
            ChangeActivIconLanguage("Eng");
            clickHeddenFuncton()
            break;
        case "中國人":
            // Lang.value =  '中國人';
            TranslateLang(obj.id, body);
            clickHeddenFuncton()
            break;
        case "Spanish":
            // Lang.value = 'Spanish';
            TranslateLang(obj.id, body);
            clickHeddenFuncton()
            break;
        default:
            Lang.value = 'language not defined';
    }

}

function ChangeActivIconLanguage(lang) {
    console.log(lang + "hello");
    let elem = document.querySelectorAll(".change");
    elem.forEach(element => {
        element.removeAttribute("class");
        element.setAttribute("class", "img_no_active change");
        console.log("ok");
        console.log(elem.className);
    });
    switch (lang) {
        case "Ru":
            elem[0].removeAttribute("class");
            elem[0].setAttribute("class", "img_active change");
            break;
        case "Eng":
            elem[1].removeAttribute("class");
            elem[1].setAttribute("class", "img_active change");
            break;
        default:
            console.log("noLAng");
            break;
    }
}

function HASAttribute(lang, htmlLang) {
    if (htmlLang.hasAttribute('lang')) {
        htmlLang.removeAttribute('lang');
        htmlLang.setAttribute('lang', lang);
    }
}

function constructTranslateObj() {
    this.objs;
    this.textTranslate;
    let b = (objs, textTranslate) => {
        this.objs = objs;
        this.textTranslate = textTranslate;
    }
    this.translater = (objs, textTranslate, typeAttributeChanged) => {
        switch (typeAttributeChanged) {
            case 'innerText':
                b(objs, textTranslate);
                for (let i = 0; i < this.objs.length; i++) {
                    this.objs[i].innerText = this.textTranslate;
                }
                break;

            case 'placeholder':
                b(objs, textTranslate);
                for (let i = 0; i < this.objs.length; i++) {
                    this.objs[i].placeholder = this.textTranslate;
                }
                break;

            case 'value':
                b(objs, textTranslate);
                for (let i = 0; i < this.objs.length; i++) {
                    this.objs[i].value = this.textTranslate;
                }
                break;
            case 'innerHTML':
                b(objs, textTranslate);
                for (let i = 0; i < this.objs.length; i++) {
                    this.objs[i].innerHTML = this.textTranslate;
                }
                break;
            default:
                console.log("error in translate.js/41");
                return false;
        }
    }
}

function TranslateLang(defineLang, BodyClass) {
    let TranslateLangObj = new constructTranslateObj();
    console.log(defineLang);
    console.log(BodyClass);
    switch (BodyClass) {
        case "indexEnterWindow":
            switch (defineLang) {
                case "Ru":
                    TranslateLangObj.translater(document.querySelectorAll('.LengText-back'), "Назад", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll('.LengText-authorization'), "Авторизация", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll('.LengText-DataEntryPrompt'), "Введите данные своей учетной записи", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll('.InputFieldName'), "Имя пользователя", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll('.InputFieldPassword'), "Пароль", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll('#InputEnterButtom'), "Авторизоваться", "value");
                    TranslateLangObj.translater(document.querySelectorAll('#ForgotPassword'), "Я не помню пароль", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll('.LengText-TwoDashes'), "Или", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll('.LengText-Question-vperTut'), "Впервые тут?", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll('.LengText-RegisterSentence-Auto'), "Зарегистрируйтесь", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll('.LengText-PrivacyPolicy'), "Политика конфидециальности", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll('.LengText-TermsOfUse'), "Условия пользования", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll('.LengText-WhiRigh'), "©2021 КНИТУ КАИ. Все права защищены", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll('.LengText-registration'), "Регистрация", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll('.LengText-TypeOfRegistration'), "Выберите вид регистрации", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll('.LengText-ThereIsProfel'), "Уже есть профиль?", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll('.LengText-login'), "Авторизуйтесь", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll('.LengText-registration-text-iampredst'), "Я – представитель", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll('.LengText-registration-text-iamastudent'), "Я студент", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll('.LengText-registration-text-iamagensi'), "Я рекрутинговое агентство", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-registration-nextstep"), "Последние шаги", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-howCanICallYou"), "Как к Вам обращаться?", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-selectYourCountry"), "Выберите Вашу страну", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-yourLifeSity"), "Ваш родной город", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-yourNumberPhone"), "Ваш номер телефона", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-email"), "Адрес электронной почты", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-checkdata"), "Проверим данные", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-td1NameP"), "Имя пользователя:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-td1yourPass"), "Ваш пароль:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-td1Youlifefrom"), "Вы родом из:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-td1YourLifeSity"), "Ваш родной город:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-td1Howicallyou"), "Как к Вам обращаться:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-td1NumPhone"), "Номер телефона:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-td1Email"), "Адрес электронной почты:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-textRegesterSoglash1"), "Нажимая на кнопку “Зарегистрироваться” вы соглашаетесь с правилами<a href='#' class='loginText_box_a LengText-textRegesterSoglash2'>Политики конфидициальности</a>", "innerHTML");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-howCanICallStud"), "Как зовут студента?", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-selectCountryStud"), "Страна студента", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-LifeSityStud"), "Родной город студента", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-NumberPhoneStud"), "Номер телефона студента (при наличии)", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-emailStud"), "Адрес электронной почты студента (при наличии)", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-howCanICallYou"), "Как к Вам обращаться?", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll(".lengText-whoAreYouForApplicants"), "Кем Вы являетесь для абитуриента?", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-email"), "Ваша электронная почта", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-yourNumberPhone"), "Ваш номер телефона", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-td1HowYourCallmy"), "Как к Вам обращаться", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-td1WhatAreYouStud"), "Вы являетесь для абитуриента", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-td1YourEmailAdress"), "Ваша электронная почта", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-td1YourNumberPhone"), "Ваш номер телефона", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-td1StudLifefrom"), "Студент родом из:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-td1YourLifeSitu"), "Ваш родной город:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-td1HowNameStud"), "Как зовут студента:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-td1NumberPhoneStud"), "Номер телефона студента:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-td1EmailAdress"), "Адрес электронной почты:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-td1h1DataStud"), "Данные студента", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-td1DataPredsText"), "Данные представителя", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-EndTextTHANKS"), "Поздравляем", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-EndTextWeHappiYou"), "Вы успешно зарегистрировались и мы рады Вам", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-EndTextNextWork"), "Продолжить работу", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-EndTextWindowEnd"), "Это окно закроется через <span id='numberTime1'>5</span> секунд", "innerHTML");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-NameOfTheorganizationOrg"), "Название организации", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-typeOfOrganizationOrg"), "Вид деятельность организации", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-howCallyouOrg"), "Как к Вам обращаться?", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-yourNumberPhoneOrg"), "Ваш номер телефона", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-YourEmailadressOrg"), "Ваш адрес электронной почты", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-td1NameOfOrganizationOrg"), "Название организации:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-td1TypeOfOrganizationOrg"), "Вид деятельности организации:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-td1HowICallYouOrg"), "Как к Вам обращаться:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-td1YourNumberPhoneOrg"), "Ваш номер телефона:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-td1AdressEmailOrg"), "Адрес электронной почты:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-InputFieldNameLogin"), "Имя пользователя", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-InputFieldPasswordLogin"), "Пароль", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-ProceedSub"), "Продолжить", "value");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-Question-RememberedPas"), "Вспомнили пароль?", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-Autoriz"), "Авторизуйтесь", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-forgotPastext"), "Забыли Ваш пароль?", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-Dontworryfixitquickly"), "Не беда, быстро восстановим", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-GoEmail"), "Пришло письмо?", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-codASc"), "Введите код подтверждения", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-Question-WeSentYourcod"), "Мы отправили код подтверждения на почту", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-Cod"), "Код", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-Question-getNewCode"), "Получить новый код можно через", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-Continue"), "Что ж продолжим", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-EnterNewPasAndSaveHim"), "Введите новый пароль и сохраните его", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-ComeUpWithNewpas"), "Придумайте новый пароль", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-ComeUpWithNewpasrepeat"), "Напишите пароль еще раз", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-UpdatePassword"), "Обновить пароль", "value");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-EndTextWindowEnd3"), "Это окно закроется через <span id='numberTime3'>5</span> секунд", "innerHTML");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart1"), "Институт Международного образования КАИ", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart2"), "Меню", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart3"), "#поступающим", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart4"), "#вопрос-ответ", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart5"), "#новости", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart6"), "Поиск", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart7"), "Войдите в профиль", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart8"), "Чтобы пользоваться сервисом", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart9"), "Личный кабинет", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart10"), "Подать заявку", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart11"), "Уведомления", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart12"), "Выйти", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart84"), "Институт международного образования КНИТУ-КАИ", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart13"), "Начать сейчас", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart14"), "Подфак", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart15"), "Листайте вниз", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart16"), "Программы обучения", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart17"), "Предлагаем вам ознакомиться с информацией, которая поможет вам подготовиться к приезду в Казань и ответит на часто задаваемые вопросы.", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart18"), "Авиастроение", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart19"), "IT (программная инженерия)", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standarts20"), "Телекоммуникации, интернет, IoT", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standarty21"), "Экономика", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart22"), "Машиностроение", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart23"), "Электроника и наноэлектроника", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart24"), "Кораблестроение", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart25"), "Композитные технологии", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart26"), "Смотреть все программы", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart27"), "Наши новости", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart28"), "Консультация с профессионалами из IT", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart29"), "Консультация с профессионалами из IT", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart30"), "Консультация с профессионалами из IT", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart31"), "Консультация с профессионалами из IT", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart32"), "Об Университете ИМО", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart33"), "На платформе можнополучить знания по актуальным темам и востребованные навыки. Все курсы нацелены на практику: мы следим за актуальностью материала и помогаем с трудоустройством и стажировкой.", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart34"), "Узнайте как мы живем", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart35"), "Преимущества ИМО КАИ", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart36"), "Предлагаем вам ознакомиться с информацией, которая поможет вам подготовиться к приезду в Казань и ответит на часто задаваемые вопросы.", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart37"), "Общежитие", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart38"), "Не следует, однако, забывать о том, что выбранный нами инновационный путь влечет за собой", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart39"), "Комбинат питания", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart40"), "Не следует, однако, забывать о том, что выбранный нами инновационный путь ", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart41"), "КАИ “Олимп”", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart42"), "Не следует, однако, забывать о том, что выбранный нами инновационный путь влечет за собой", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart43"), "Творчество", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart44"), "Не следует, однако, забывать о том, что выбранный нами инновационный путь влечет за собой", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart45"), "Библиотека", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart46"), "Не следует, однако, забывать о том, что выбранный нами инновационный", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart47"), "Центр переводов", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart48"), "Не следует, однако, забывать о том, что выбранный нами инновационный путь влечет за собой", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart49"), "Остались вопросы?", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart50"), "План приема студентов", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart51"), "Необходимые документы", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart52"), "Как подать заявление", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart53"), "Образование", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart54"), "Высшее образование", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart55"), "Среднее профессиональное образование", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart56"), "Дополнительное образование", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart57"), "Высшее образование", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart58"), "Электронная информационно-образовательная среда", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart59"), "Научно-техническая библиотека", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart60"), "Военный учебный центр", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart61"), "Грант «Новые кадры ОПК»", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart62"), "Инклюзивное образование", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart63"), "Университет", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart64"), "История", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart65"), "О КНИТУ-КАИ", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart66"), "КНИТУ-КАИ в рейтингах", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart67"), "Структура", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart68"), "Документы", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart69"), "Безопасность", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart70"), "Брендбук КНИТУ-КАИ", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart71"), "Сведения об образовательной организации", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart72"), "Контакты", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart73"), "Контактная информация", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart74"), "Юридический адрес: 420111 г. Казань, ул. К. Маркса, 10", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart75"), "Адрес приёмной комиссии и приёма документов: 420015, г. Казань, ул. Б. Красная, 55", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart76"), "Телефон приемной комиссии", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart78"), "Электронная почта", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart79"), "Институт международного образования КНИТУ-КАИ", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart80"), "Политика конфидециальности", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart81"), "Правила использования", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart82"), "Помощь", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standartPlaceholder83"), "|Напишите что-нибудь...", "placeholder");





                    //TranslateLangObj.translater(document.querySelectorAll(".LengText-"),"","");
                    break;

                case "Eng":
                    TranslateLangObj.translater(document.querySelectorAll('.LengText-back'), "back", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll('.LengText-authorization'), "Login", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll('.LengText-DataEntryPrompt'), "Enter your account details", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll('.InputFieldName'), "Username", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll('.InputFieldPassword'), "Password", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll('#InputEnterButtom'), "Login", "value");
                    TranslateLangObj.translater(document.querySelectorAll('#ForgotPassword'), "I do not remember the password", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll('.LengText-TwoDashes'), "or", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll('.LengText-Question-vperTut'), "First time here?", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll('.LengText-RegisterSentence-Auto'), "Register", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll('.LengText-PrivacyPolicy'), "Privacy Policy", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll('.LengText-TermsOfUse'), "Terms of use", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll('.LengText-WhiRigh'), "©2021 KNITU KAI. All rights reserved", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll('.LengText-registration'), "Registration", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll('.LengText-TypeOfRegistration'), "Select the type of registration", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll('.LengText-ThereIsProfel'), "Already have a profile?", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll('.LengText-login'), "Login", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll('.LengText-registration-text-iampredst'), "I am a representative", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll('.LengText-registration-text-iamastudent'), "I am a student", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll('.LengText-registration-text-iamagensi'), "I am a recruiting agency", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-registration-nextstep"), "Last steps", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-howCanICallYou"), "How can I call you?", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-selectYourCountry"), "Choose your country", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-yourLifeSity"), "Your hometown", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-yourNumberPhone"), "Your phone number", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-email"), "E-mail address", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-checkdata"), "Check the data", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-td1NameP"), "Username:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-td1yourPass"), "Password:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-td1Youlifefrom"), "Are you from:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-td1YourLifeSity"), "Your hometown:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-td1Howicallyou"), "How can I call you:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-td1NumPhone"), "Phone number:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-td1Email"), "E-mail address:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-textRegesterSoglash1"), "By clicking on the 'Register' button you agree to the rules<a href='#' class='loginText_box_a LengText-textRegesterSoglash2'>Privacy Policy</a>", "innerHTML");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-howCanICallStud"), "What is the name of the student?", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-selectCountryStud"), "Student's country?", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-LifeSityStud"), "Student's hometown?", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-NumberPhoneStud"), "Student phone number (if available)", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-emailStud"), "Student email address (if available)", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-howCanICallYou"), "How can I call you?", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll(".lengText-whoAreYouForApplicants"), "Who are you for an applicant?", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-email"), "Your email", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-yourNumberPhone"), "Your phone number", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-td1HowYourCallmy"), "How can I call you", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-td1WhatAreYouStud"), "You are an entrant", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-td1YourEmailAdress"), "Your email", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-td1YourNumberPhone"), "Your phone number", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-td1StudLifefrom"), "The student is from:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-td1YourLifeSitu"), "Your hometown:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-td1HowNameStud"), "What is the name of the student:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-td1NumberPhoneStud"), "Student phone number:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-td1EmailAdress"), "E-mail address:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-td1h1DataStud"), "Student Data", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-td1DataPredsText"), "Representative details", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-EndTextTHANKS"), "Congratulations", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-EndTextWeHappiYou"), "You have successfully registered and we are glad to see you", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-EndTextNextWork"), "Continue work", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-EndTextWindowEnd"), "This window will close in <span id='numberTime1'>5</span> seconds", "innerHTML");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-NameOfTheorganizationOrg"), "Name of the organization", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-typeOfOrganizationOrg"), "Type of activity of the organization", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-howCallyouOrg"), "How can I call you?", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-yourNumberPhoneOrg"), "Your phone number?", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-YourEmailadressOrg"), "Your e-mail address?", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-td1NameOfOrganizationOrg"), "Name of the organization:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-td1TypeOfOrganizationOrg"), "Type of activity of the organization:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-td1HowICallYouOrg"), "How can I call you:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-td1YourNumberPhoneOrg"), "Your phone number:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-td1AdressEmailOrg"), "E-mail address:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-InputFieldNameLogin"), "Username", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-InputFieldPasswordLogin"), "Password", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-ProceedSub"), "Proceed", "value");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-Question-RememberedPas"), "Remembered the password?", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-Autoriz"), "Login", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-forgotPastext"), "Forgot your password?", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-Dontworryfixitquickly"), "Don't worry, we'll get back to you quickly.", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-GoEmail"), "The mail has arrived?", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-codASc"), "Enter confirmation code", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-Question-WeSentYourcod"), "We have sent a confirmation code to your email", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-Cod"), "The Cod", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-Question-getNewCode"), "You can get a new code through", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-Continue"), "Let's continue", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-EnterNewPasAndSaveHim"), "Enter a new password and save it", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-ComeUpWithNewpas"), "Create a new password", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-ComeUpWithNewpasrepeat"), "Write the password again", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-UpdatePassword"), "Update password", "value");
                    TranslateLangObj.translater(document.querySelectorAll(".LengText-EndTextWindowEnd3"), "This window will close in <span id='numberTime3'>5</span> seconds", "innerHTML");

                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart1"), "KAI Institute of International Education", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart2"), "Menu", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart3"), "#incoming", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart4"), "#Q&A", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart5"), "#news", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart6"), "Search", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart7"), "Sign in profile", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart8"), "To use the service", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart9"), "My Account", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart10"), "Apply", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart11"), "Notifications", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart12"), "Exit", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart84"), "Institute of International Education KNRTU-KAI", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart13"), "Start Now", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart14"), "Subfaq", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart15"), "Scroll down", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart16"), "Studies", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart17"), "We invite you to read information that will help you prepare for your arrival in Kazan and answer frequently asked questions.", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart18"), "Aircraft", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart19"), "IT (Software Engineering)", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standarts20"), "Telecom, Internet, IoT", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standarty21"), "Economy", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart22"), "Engineering", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart23"), "Electronics and Nanoelectronics", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart24"), "Shipbuilding", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart25"), "Composite technologies", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart26"), "View All Programs", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart27"), "Our news", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart28"), "IT Pro Consultation", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart29"), "IT Pro Consultation", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart30"), "IT Pro Consultation", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart31"), "IT Pro Consultation", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart32"), "About IMO University", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart33"), "On the platform, you can get knowledge on relevant topics and in-demand skills. All courses are aimed at practice: we monitor the relevance of the material and help with employment and internships.", "innerText ");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart34"), "Learn how we live", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart35"), "IMO KAI Benefits", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart36"), "We invite you to read information that will help you prepare for your arrival in Kazan and answer frequently asked questions.", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart37"), "dormitory", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart38"), "However, we should not forget that the innovative path we have chosen entails", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart39"), "Power Combine", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart40"), "However, we should not forget that the innovative path we have chosen is ", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart41"), "KAI Olympus", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart42"), "However, we should not forget that the innovative path we have chosen entails", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart43"), "Creativity", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart44"), "However, we should not forget that the innovative path we have chosen entails", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart45"), "Library", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart46"), "However, we should not forget that the one we have chosen is innovative", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart47"), "Translation Center", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart48"), "However, we should not forget that the innovative path we have chosen entails", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart49"), "Any questions?", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart50"), "Student Admission Plan", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart51"), "Documents Required", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart52"), "How to apply", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart53"), "Education", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart54"), "Higher Education", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart55"), "Secondary Vocational Education", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart56"), "Additional Education", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart57"), "Higher Education", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart58"), "Electronic Information and Educational Environment", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart59"), "Scientific Library", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart60"), "Military Training Center", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart61"), "New OPK Frames Grant", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart62"), "Inclusive Education", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart63"), "University", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart64"), "History", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart65"), "ABOUT KNRTU-KAI", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart66"), "KNRTU-KAI in ratings", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart67"), "Structure", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart68"), "Documents", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart69"), "Security", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart70"), "KNRTU-KAI Brandbook", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart71"), "Information about educational institution", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart72"), "Contacts", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart73"), "Contact Information", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart74"), "Legal address: 420111 Kazan, K. Marx str., 10", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart75"), "Address of the admissions office and acceptance of documents: 420015, Kazan, B. Krasnaya st., 55", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart76"), "Admission Committee Phone", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart78"), "Email", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart79"), "Institute of International Education KNRTU-KAI", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart80"), "Privacy Policy", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart81"), "Usage Rules", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart82"), "Help", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standartPlaceholder83"), "|Write something...", "placeholder");
                    //TranslateLangObj.translater(document.querySelectorAll(""),"","");
                    break;

                case "中國人":
                    alert("Функкция перевода не доступна/ Translation function is not availabl");
                    // Lang.value =  '中國人';
                    break;

                case "Spanish":
                    alert("Функкция перевода не доступна/ Translation function is not availabl");
                    // Lang.value = 'Spanish';
                    break;
                default:
                    return 0;
            }
            break;

        default:
            return 0;
    }

}