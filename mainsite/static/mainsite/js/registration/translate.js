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
            clickHeddenFuncton();
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
            clickHeddenFuncton();
            break;
        case "中國人":
            // Lang.value =  '中國人';
            TranslateLang(obj.id, body);
            clickHeddenFuncton();
            break;
        case "Spanish":
            // Lang.value = 'Spanish';
            TranslateLang(obj.id, body);
            clickHeddenFuncton();
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
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart84_1"), "Институт международного образования КНИТУ-КАИ", "innerText");
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
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart75"), "г. Казань, ул. Большая Красная, д. 55", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart76"), "Телефон приемной комиссии", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart7_6"), "Телефон ИМО", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart78"), "Электронная почта", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart79"), "© Институт международного образования КНИТУ-КАИ Все права защищены 2022", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart80"), "© КНИТУ-КАИ Все права защищены 2022", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart81"), "Правила использования", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart82"), "Помощь", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standartPlaceholder83"), "|Напишите что-нибудь...", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart83"), "Информация обо мне", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart84"), "Изменения профиля", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart85"), "Памятка для иностранцев", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart86"), "Основная информация", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart87"), "Редактировать", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart88"), "Полное имя:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart89"), "Пол:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart90"), "Дата рождения:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart91"), "Место рождения:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart92"), "Родной город:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart93"), "Гражданство:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart94"), "Номер телефона:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart95"), "Электронная почта:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart96"), "Ваш пароль:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart97"), "Изменить", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart98"), "Полное имя:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart99"), "Пол:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart100"), "Дата рождения:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart101"), "Место рождения:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart102"), "Родной город:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart103"), "Гражданство:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart104"), "Номер телефона:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart105"), "Электронная почта:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart106"), "Ваш пароль:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart10_7"), "Изменить", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart107"), "Информация о студенте", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart108"), "Пока здесь ничего нет", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart109"), "Похоже вы пока не являетесь студентов КНИТУ-КАИ или ваши данные еще не загрузили в профиль :(", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart110"), "Верификация учтёной записи", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart111"), "Стандарт", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart112"), "Абитуриент", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart113"), "Студент", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart114"), "Для того, чтобы подтвердить личность в ИМО КАИ необходимо отправить письмо на электронную почту для подтверждения вашей личности и получении ваших документов для составления заявкина поступление!", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart115"), "Скопировать адрес", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart116"), "Список необходимых документов", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart117"), "Копия паспорта (1-ая страница с фотографией)", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart118"), "Заверенный нотариусом перевод паспорта на русский язык", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart119"), "Скан всех виз, полученных из российской федерации (если имеются)", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart120"), "Бланк уведомления для гос. услуг", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart121"), "Билеты всего маршрута (авиасообщение и ж/д)", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart121_1"), "Документ об образовании", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart121_2"), "Заверенный нотариусом перевод документа об образовании", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart122"), "Сохранить", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart123"), "Памятка иностранному студенту", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart124"), "Предлагаем вам ознакомиться с информацией, которая поможет вам подготовиться к приезду в Казань и ответит на", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart125"), "часто задаваемые вопросы", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart126"), "По прибытии", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart127"), "Пошаговая инструкция для въезжающих", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart128"), "Пошаговая инструкция для въезжающих (для стран с визовым режимом)", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart129"), "1. Подать документы на оформление приглашения посредством электронной почты: international@kai.ru  2. Получить готовое приглашение и проставить однократную визу в посольстве РФ. 3. Прислать копию билета в Институт международного образования на почту: international@kai.ru 4. По приезду можно заселиться на 3 дня по адресу: ул. Большая Красная, 18, 2й этаж (Профилакторий), сдать ПЦР-тест на Covid-19 и в течение двух дней подойти в Институт международного образования по адресу: ул. Карла Маркса, 10, здание Технического колледжа (через двор), каб. 106, 107. 5. Оформить медицинский полис (ДМС) 6. Пройти медицинское освидетельствование и дактилоскопию 7. После зачисления заселиться в общежитие (при наличии мест)/хостел/квартиру 8. Продлить регистрацию по месту пребывания 9. Подать документы на продление визы", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart130"), "Пошаговая инструкция для въезжающих (для стран с безвизовым режимом)", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart131"), "1. По приезду можно заселиться на 3 дня по адресу: ул. Большая Красная, 18, 2й этаж (Профилакторий), сдать ПЦР-тест на Covid-19 и в течение двух дней подойти в Институт международного образования по адресу: ул. Карла Маркса, 10, здание Технического колледжа (через двор), каб. 106, 107. 2. Оформить медицинский полис (ДМС) 3. Пройти медицинское освидетельствование и дактилоскопию 4. После зачисления заселиться в общежитие (при наличии мест)/хостел/квартиру 5. Продлить регистрацию по месту пребывания", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart132"), "Медицинское освидетельствование, дактилоскопия", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart133"), "На основании Федерального закона N 274-ФЗ от 23 июня 2021г. «О правовом положении иностранных граждан в Российской Федерации» и Федеральный закон «О государственной дактилоскопической регистрации в Российской Федерации» каждый иностранный гражданин, прибывший в Российскую Федерацию на срок превышающий 90 календарных дней, обязан пройти медицинское освидетельствование на наличие или отсутствие инфекционных заболеваний, представляющих опасность для окружающих; на наличие или отсутствия факта употребления наркотических средств или психотропных веществ без назначения врача. Иностранные граждане подлежат обязательной государственной дактилоскопической регистрации и фотографированию однократно. Иностранным гражданам, прошедшим обязательную дактилоскопическую регистрацию и фотографирование, выдается документ. ", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart134"), "1.	Прохождение медицинского освидетельствования. Адрес: г. Казань, ул. Короленко, д. 54.", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart135"), "Режим работы:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart136"), "с 8.00 ч. – 17.00 ч. (кроме субботы и воскресенья).  При себе иметь: паспорт, миграционную карту и ее копию, визу и ее копию, регистрацию. 2.	Необходимо пройти дактилоскопическую регистрацию (отпечатки) по адресу: г. Казань, ул. Чехова д. 8/2, кабинет № 12.  Прохождение дактилоскопической регистрации (отпечатки) без предъявления медицинского заключения осуществляться не будет.", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart137"), "ВНИМАНИЕ!", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart138"), "Иностранные студенты, не выполнившие процедуру прохождения медицинского освидетельствования и дактилоскопической регистрации, не могут заселиться в общежитие и встать на миграционный учет. По этой причине миграционная служба Республики Татарстан не продлит срок пребывания иностранным студентам на территории Российской Федерации и депортирует их на родину. ", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart139"), "Миграционный учет", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart140"), "Каждый иностранный гражданин, прибывший в Российскую Федерацию, обязан встать на миграционный учет и предоставить документы в Институт международного образования КНИТУ-КАИ  Внимание:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart141"), " Срок постановки на миграционный учет с момента приезда составляет: Казахстан, Беларусь, Киргизия – 30 календарных дней Таджикистан – 15 календарных дней Остальные страны – 7 рабочих дней", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart142"), "Для получения регистрации по месту пребывания в общежитии университета необходимо предоставить следующий пакет документов по адресу: ул. Карла Маркса, 10, здание Технического колледжа, каб. 107:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart143"), "1. Паспорт (копия) 2. Действующая виза (копия) (для граждан из стран с визовым режимом) 3. Миграционная карта (копия) 4. Предыдущая регистрация копия (при наличии) 5. Договор о найме жилья в общежитии (копия) 6. Копии билетов (если приехали в Казань через другой город)", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart144"), "Для получения регистрации по месту пребывания в квартире необходимо получить ходатайство от университета. Список документов для оформления ходатайства необходимо предоставить по адресу: ул. Карла Маркса, 10, здание Технического колледжа, каб. 106:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart145"), "1.	Паспорт (копия) 2.	Действующая виза (копия) (для граждан из стран с визовым режимом) 3.	Справка об обучении из отдела по учету студентов (1 здание КАИ, 126 кабинет)", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart146"), "Необходимо повторно вставать на миграционный учет в случае, если: ", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart147"), "1. Иностранный студент  получил новую визу/ новый паспорт/ дубликат миграционной карты. Срок постановки на миграционный учет составляет 3 рабочих дня. 2. Иностранный студент сменил адрес места пребывания. Срок постановки на миграционный учет составляет 7 рабочих дней. 3. Иностранный студент продлевает регистрацию по тому же адресу. Срок постановки на миграционный учет составляет 3 рабочих дня. 4. Иностранный студент находился в больнице на лечении. Срок постановки на миграционный учет после выхода из больницы составляет 3 рабочих дня", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart148"), "Медицинское страхование", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart149"), "Медицинское страхование", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart150"), "На основании Федерального закона N 326-ФЗ от 29 ноября 2010г. ОБ ОБЯЗАТЕЛЬНОМ МЕДИЦИНСКОМ СТРАХОВАНИИ В РОССИЙСКОЙ ФЕДЕРАЦИИ каждый иностранный гражданин в течение первой недели после зачисления в КНИТУ-КАИ обязан оформить полис медицинского страхования, действующий на весь период регистрации/ визы (как правило, сроком на один год). Полис медицинского страхования можно оформить в страховых компаниях, расположенных рядом с университетом. Полис ДМС должен иметь страховую сумму не менее 300 000 рублей на 1 год. Студенты должны продлевать медицинский полис ежегодно до момента выезда из Российской Федерации. Вы можете оформить полис ДМС ежедневно с 13.00 до 16.00 в  1 зд. КАИ в институте международного образования (ул. К.Маркса д.10), где находятся представители компаний «Ак барс страхование» и «СМП-страхование».", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart151"), "Проживание (адреса общежитий)", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart152"), "ПРАВИЛА пребывания иностранных граждан и лиц без гражданства, обучающихся в КНИТУ-КАИ, в Российской Федерации", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart153_1"), "1.	Все иностранные граждане должны соблюдать законы Российской Федерации и настоящие правила. По всем вопросам соблюдения правил пребывания и паспортно-визового обслуживания иностранные граждане должны обращаться в Институт международного образования (ИМО) КНИТУ-КАИ по адресу: г.Казань, ул. Карла Маркса 10, учебное здание № 1, здание технического колледжа кабинеты 106 и 107, Отдел визового сопровождения (ОВС). Время приема иностранных граждан в ОВС: понедельник-пятница, с 14:00 до 17:00. 2.	Иностранные граждане могут находиться и свободно перемещаться по территории Российской Федерации, обязательно имея при себе следующие документы: - национальный паспорт; - действующую визу (при наличии визового режима пребывания в Российской Федерации); - миграционную карту с отметкой о пересечении границы; - отрывную часть бланка уведомления о прибытии иностранного гражданина/лица без гражданства в Российскую Федерацию с отметкой территориального органа УВМ МВД России о постановке на миграционный учёт по месту временного пребывания (проживания). Эти документы должны предъявляться сотрудникам правоохранительных органов (полиции, миграционной службе и др.) при проверке. 3.	При въезде на территорию Российской Федерации иностранные граждане и лица без гражданства заполняют миграционную карту, которую они должны иметь при себе в течение всего срока пребывания в Российской Федерации и предъявлять её при совершении предусмотренных законом миграционных действий. 4.	Иностранные граждане в Российской Федерации подлежат миграционному учету. Для постановки на миграционный учет иностранные граждане, прибывшие в КНИТУ-КАИ и проживающие в общежитии университета, должны в течение двух дней (за исключением праздничных и выходных дней) представить в Управление международной деятельности КНИТУ-КАИ копии и оригиналы следующих документов: паспорт, миграционная карта, действующая виза (при наличии визового режима пребывания в Российской Федерации), оформленная по приглашению КНИТУ-КАИ либо по приглашению Министерства образования и науки Российской Федерации, ордер на заселение в общежитие. договор об аренде квартиры или согласие владельца квартиры (в случае проживания на квартире в Казани). ", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart153_2"), "Для постановки на миграционный учет иностранные граждане, прибывшие в КНИТУ-КАИ и проживающие на квартире, должны в течение двух дней (за исключением праздничных и выходных дней) представить владельцу квартиры копии и оригиналы следующих документов: паспорт, миграционная карта, действующая виза (при наличии визового режима пребывания в Российской Федерации). Постановка на миграционный учет осуществляется только по адресу фактического проживания (пребывания). 5.	Срок временного пребывания в Российской Федерации иностранного гражданина или лица без гражданства определяется сроком действия выданной ему визы и сроком постановки на миграционный учет (при наличии визового режима пребывания в Российской Федерации) или только сроком постановки на миграционный учет по месту пребывания (при наличии безвизового режима пребывания в Российской Федерации). Иностранный гражданин обязан выехать из Российской Федерации до окончания срока действия визы или срока постановки на миграционный учет, за исключением случаев, когда на день истечения указанных сроков иностранному гражданину выдана новая виза на право пребывания в Российской Федерации либо иностранный гражданин поставлен на миграционный учет на очередной срок. КНИТУ-КАИ не осуществляет продление виз и постановку на миграционный учет родственников и знакомых иностранных граждан, самостоятельно прибывших в Казань, и не несет за это ответственность. 6.	Срок временного пребывания иностранного гражданина или лица без гражданства на территории Российской Федерации на весь период обучения продлевается УВМ МВД России по РТ ежегодно, но не более чем на 1 (один) год. ", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart153_2_1"), " Для продления срока временного пребывания иностранный гражданин обязан не менее чем за 20 РАБОЧИХ дней до истечения действующего срока временного пребывания (истечения срока действия имеющейся визы или срока постановки иностранного гражданина на миграционный учет) представить в Управление международной деятельности следующие документы: паспорт (оригинал и копия), миграционная карта (оригинал и копия), уведомление о постановке на миграционный учет (оригинал и копия), действующий полис медицинского страхования, договор на обучение (для обучающихся на платной основе), квитанция об оплате госпошлины в размере, установленном действующим законодательством, необходимое количество фотографий. Документы для продления срока временного пребывания иностранного гражданина не будут приняты УВМ МВД России по РТ, если не будет предоставлен хотя бы один из перечисленных документов или хотя бы один из них будет оформлен неправильно. Оформление/продление многократной визы без предъявления в УВМ МВД России по РТ оригиналов действующего паспорта и миграционной карты невозможно. ", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart153_2_2"), "7.	Иностранный гражданин из страны с визовым режимом пребывания, своевременно не предоставивший в ИМО необходимые документы для продления/ оформления новой многократной визы обязан покинуть территорию Российской Федерации в пределах срока действия имеющейся визы и вернуться на обучение в КНИТУ-КАИ по новой визе, полученной на основании приглашения на въезд в Российскую Федерацию, оформленного в УВМ МВД России по РТ по ходатайству КНИТУ-КАИ или оформленного в МИД РФ по ходатайству Минобрнауки России. 8.	Иностранный гражданин с безвизовым режимом пребывания, своевременно не продливший срок пребывания на территории Российской Федерации обязан выехать из Российской Федерации до окончания срока пребывания. В противном случае иностранный гражданин считается незаконно пребывающим на территории Российской Федерации, несет персональную ответственность в соответствии с законодательством Российской Федерации. 9.	Снятие с миграционного учета по месту пребывания в КНИТУ-КАИ происходит в момент пересечения границы Российской Федерации или в момент постановки на миграционный учет в гостинице или в хостеле во время поездки по территории Российской Федерации, или в лечебном учреждении (больнице, госпитале, диспансере), в том числе и в пределах г. Казани. Каждый раз при возвращении на учебу в КНИТУ-КАИ после пребывания: за границей; в других населенных пунктах Российской Федерации (в случае постановки на миграционный учет); в гостинице; в лечебном учреждении на стационарном лечении иностранный гражданин должен вновь встать на миграционный учет по месту пребывания (проживания) в г.Казани, представив в ИМО (для проживающих в общежитии КНИТУ-КАИ) или владельцу квартиры (для арендующих квартиру) в течение двух дней с момента возвращения на учебу в КНИТУ-КАИ необходимые документы: паспорт (копию), миграционную карту (копию), последнее (во времени) уведомление о постановке на миграционный учет (оригинал). ", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart153_3"), "10.	В случае смены места проживания на срок превышающий 7 дней (в том числе в пределах студгородка КНИТУ-КАИ) иностранный гражданин обязан в двухдневный срок проинформировать об этом ИМО, дирекцию Студгородка и дирекцию принимающего института/ факультета, и встать на миграционный учет по новому месту проживания. 11.	При получении разрешения на временное проживание, вида на жительство или гражданства Российской Федерации иностранный гражданин обязан в течение 24 часов уведомить об этом Отдел по учету студентов, принимающее учебное подразделение и ИМО. 12.	КНИТУ-КАИ не занимается вопросами изменения миграционного статуса иностранного гражданина: получением гражданства РФ, оформлением разрешений на временное проживание или вида на жительство. 13.	Иностранный гражданин за 6 месяцев до истечения срока действия национального паспорта обязан продлить или заменить его в соответствии с действующим в зарубежной стране порядком и представить в ИМО продленный/ новый паспорт. В случае истечения срока действия национального паспорта иностранный гражданин обязан покинуть территорию РФ. ", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart153_3_1"), "14.	В случае утраты документов (национального паспорта, визы, миграционной карты) иностранный гражданин обязан незамедлительно обратиться в ближайшее отделение полиции по месту утраты или обнаружения пропажи документов для получения справки о происшествии, и незамедлительно проинформировать об этом принимающее учебное подразделение и ИМО. 15.	После окончания учебы или отчисления из КНИТУ-КАИ иностранный гражданин обязан покинуть территорию России в течение трех дней с момента отчисления, заблаговременно приобретя проездные билеты. Продление сроков пребывания в Российской Федерации иностранных граждан-выпускников КНИТУ-КАИ по причинам, не связанным с обучением или иным причинам, не предусмотренным законодательством, не допускается. Прекращение обучения в связи с отчислением, как по уважительным, так и неуважительным причинам, а также перерыв в обучении, связанный с академическим отпуском, являются основанием для сокращения срока временного пребывания, в частности, аннулирования имеющейся многократной визы и оформления транзитной визы для выезда из Российской Федерации. В таких случаях иностранный гражданин (из страны с визовым режимом пребывания) обязан заблаговременно приобрести билеты для выезда с территории России, представить в ИМО билеты и документы, необходимые для аннулирования действующей многократной и оформления транзитной визы. После этого, иностранный гражданин, в соответствии с приобретенными заблаговременно билетами, обязан покинуть территорию Российской Федерации до истечения срока действия транзитной визы. 16.	Решение о продлении или сокращении срока пребывания иностранного гражданина на территории Российской Федерации принимается УВМ МВД России по РТ. 17.	Медицинское обслуживание иностранных граждан осуществляется на основании полиса добровольного медицинского страхования, приобретенного за счет личных средств иностранного гражданина. Отсутствие полиса медицинского страхования, действительного на территории Российской Федерации, расценивается как нарушение правил пребывания иностранных граждан на территории Российской Федерации. ", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart153_4"), "18.	Иностранный гражданин обязан выполнять действующие правила внутреннего распорядка обучающихся КНИТУ-КАИ, в частности, добросовестно осваивать образовательную программу, выполнять индивидуальный учебный план, в том числе посещать предусмотренные учебным планом учебные занятия, осуществлять самостоятельную подготовку к занятиям, выполнять задания, данные педагогическими работниками в рамках образовательной программы, своевременно в письменной форме ставить в известность учебное подразделение Университета (институт, факультет, отделение СПО, подготовительное отделение для иностранных граждан и т.д.) о необходимости отсутствия на учебных занятиях, в том числе на экзаменах и зачетах, по уважительной причине. При отсутствии на занятиях, в том числе экзаменах и зачетах по непредвиденной уважительной причине, в первый день явки в Университет представить учебному подразделению документы, подтверждающие уважительность причины пропуска занятий. В случае болезни обучающийся представляет справку лечебного учреждения установленного образца. 19.	Иностранный гражданин обязан письменно согласовывать с принимающим учебным подразделением, Студгородком и ИМО любые свои поездки в другой населенный пункт (вне Казани). 20.	Для поддержания оперативной связи иностранный гражданин обязан иметь при себе мобильный телефон и сообщить актуальный номер в принимающее учебное подразделение, ИМО и Студгородок. При смене номера – также незамедлительно проинформировать указанные в настоящем абзаце подразделения. Также необходимо иметь при себе контакты старосты учебной группы, сотрудников принимающего учебного подразделения, ИМО и Студгородка, ответственных за работу с иностранными гражданами, и кураторов по общежитиям и регионам, выбранных из числа самих иностранных граждан. ", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart153_4_1"), "21.	Иностранный гражданин имеет право осуществлять трудовую деятельность в случае, если он достиг возраста восемнадцати лет при наличии разрешения на работу или патента, если иной порядок не предусмотрен действующим законодательством Российской Федерации. 22.	Иностранные граждане, совершившие преступления, административные или иные правонарушения на территории Российской Федерации, подлежат привлечению к ответственности на общих основаниях с гражданами Российской Федерации и могут быть привлечены к административной и/или дисциплинарной ответственности соответственно. 23.	К иностранным гражданам или лицам без гражданства, допустившим административные или иные правонарушения на территории Российской Федерации, в том числе допустившим нарушение сроков постановки на миграционный учет, нарушение сроков пребывания, находящиеся на территории Российской Федерации с просроченной визой, нарушение порядка осуществления ими трудовой деятельности на территории Российской Федерации, нарушение правил медицинского обслуживания, и др., могут применяться следующие меры воздействия: штраф, административное выдворение, депортация в соответствии с действующим законодательством Российской Федерации. 24.	В отношении иностранных граждан, допустивших неоднократные административные или иные правонарушения, может быть принято решение: об отказе в выдаче разрешения на временное проживание; аннулирование ранее выданного разрешения; аннулирование вида на жительство; отказ в выдаче разрешения на работу; аннулирование ранее выданного разрешения на работу; о неразрешении въезда в Российскую Федерацию или нежелательности пребывания (или проживания) на территории Российской Федерации на три и более лет ", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart154"), "Заявление на отъезд", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart155"), "Скачать файл можно по", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart156"), "клику", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart157"), "Уведомление о приезде", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart158"), "Скачать файл можно по", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart159"), "клику", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart160"), "Зайдите пожалуйста свашего персонального компольютера.", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart161"), "Мобильная версия находится в процессе разработки", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart162"), "Скоро будет....", "innerText");
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
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart84_1"), "Institute of International Education KNRTU-KAI", "innerText");
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
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart75"), "Kazan, Bolshaya Krasnaya str., 55", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart7_6"), "IMO phone number", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart76"), "Admission Committee Phone", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart78"), "Email", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart79"), "© Institute of International Education KNITU-KAI All rights reserved 2022", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart80"), "© KNITU-KAI All rights reserved 2022", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart81"), "Usage Rules", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart82"), "Help", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standartPlaceholder83"), "|Write something...", "placeholder");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart83"), "Information about me", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart84"), "Profile changes", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart85"), "Memo for foreigners", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart86"), "Basic information", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart87"), "Edit", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart88"), "Full name:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart89"), "Gender:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart90"), "date of birth:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart91"), "Place of birth:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart92"), "hometown:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart93"), "Nationality:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart94"), "Phone number:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart95"), "Email:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart96"), "Your password:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart97"), "Change", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart98"), "Full name:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart99"), "Gender:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart100"), "date of birth:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart101"), "Place of birth:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart102"), "hometown:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart103"), "Nationality:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart104"), "Phone number:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart105"), "E-mail:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart106"), "Your password:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart10_7"), "Change", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart107"), "student information", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart108"), "Nothing here yet", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart109"), "Looks like you are not yet students of KNITU-KAI or your data have not yet uploaded to the profile :(", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart110"), "Verification of the account", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart111"), "Standard", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart112"), "Applicant", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart113"), "Student", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart114"), "To confirm your identity at IMO KAI you need to send an email to confirm your identity and receive your documents to apply for admission!", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart115"), "Copy address", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart116"), "List of required documents", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart117"), "Passport copy (1st page with photo)", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart118"), "Notarized translation of the passport into Russian", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart119"), "Scan of all visas received from the Russian Federation (if any)", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart120"), "Notification form for state services", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart121"), "Tickets of the whole route (air and rail)", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart121_1"), "Education document", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart121_2"), "Notarized translation of the document on education", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart122"), "Save", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart123"), "Memo to a foreign student", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart124"), "We offer you to read the information that will help you prepare for your arrival to Kazan and answer to", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart125"), "frequently asked questions", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart126"), "On arrival", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart127"), "Step-by-step instructions for those entering", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart128"), "Step-by-step instructions for visitors (for countries with visa regime)", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart129"), "1. Submit the documents for the invitation via e-mail: international@kai.ru 2. Receive an invitation and a single entry visa at the Russian Embassy. 3. Send a copy of the ticket to the Institute of International Education by e-mail: international@kai.ru 4. Upon arrival, you can check in for 3 days at the address: Bolshaya Krasnaya st., 18, 2nd floor (Preventorium), take a PCR test for Covid-19 and within two days come to the Institute of International Education, 10 Karla Marks St., Technical College building (across the yard), blocks 106, 107. 5. Draw up a medical policy (VHI) 6. Pass a medical examination and fingerprinting 7. After enrolling in a dormitory (if there are places) / hostel / apartment 8. Renew the registration at the place of stay 9. Apply for visa extension", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart130"), "Step-by-step instructions for visitors (for countries with visa-free regime)", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart131"), "1. Upon arrival, you can check in for 3 days at the address: Bolshaya Krasnaya st., 18, 2nd floor (Preventorium), take PCR-test for Covid-19 and within two days come to the Institute of International Education at: 10, Karla Marksa St., Technical College building (across the yard), blocks 106, 107. 2. Draw up a medical policy (VHI) 3. Pass a medical examination and fingerprinting 4. After enrollment, move into a dormitory (if there are places) / hostel / apartment 5. Extend the registration at the place of stay", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart132"), "Medical examination, dactyloscopy", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart133"), "Based on Federal Law № 274-FZ of June 23, 2021. On the Legal Status of Foreign Citizens in the Russian Federation and the Federal Law On State Dactiloscopic Registration in the Russian Federation every foreign citizen arriving in the Russian Federation for a period exceeding 90 calendar days must undergo a medical examination for the presence or absence of infectious diseases posing danger to others; for the presence or absence of the fact of using narcotic drugs or psychotropic substances without a medical appointment. Foreign nationals are subject to mandatory state fingerprint registration and photography once. Foreign nationals who have undergone mandatory fingerprint registration and photographing are issued a document. ", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart134"), "1.	Passing medical examination. Address: 54 Korolenko St., Kazan", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart135"), "Mode of operation:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart136"), "from 8.00 h. - 17.00 ч. (except Saturday and Sunday).  Bring with you: passport, migration card and its copy, visa and its copy, registration. 2.	It is necessary to pass fingerprint registration (fingerprints) at the following address: Kazan, Chekhov street 8/2, room number 12.  Dactyloscopic registration (fingerprints) without a medical report will not be performed.", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart137"), "ATTENTION!", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart138"), "Foreign students who have not completed the procedure of medical examination and fingerprint registration, can not move into the dormitory and get on the migration registration. For this reason the Migration Service of the Republic of Tatarstan will not extend the term of stay of foreign students on the territory of the Russian Federation and will deport them back home. ", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart139"), "Migration registration", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart140"), "Every foreign citizen arriving in the Russian Federation is obliged to get migration registration and provide documents to the Institute of International Education KNITU-KAI Attention:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart141"), " The term of migration registration since arrival is: Kazakhstan, Belarus, Kyrgyzstan - 30 calendar days Tajikistan - 15 calendar days Other countries - 7 working days", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart142"), "To obtain registration at the place of residence in the university dormitory must provide the following package of documents at the address: 10, ul. Karla Marks, building of the Technical College, room 107:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart143"), "1. Passport (copy) 2. Valid visa (copy) (for citizens from countries with a visa regime) 3. Migration card (copy) 4. Previous registration copy (if any) 5. Hostel rental agreement (copy) 6. Copies of tickets (if you come to Kazan via another city)", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart144"), "To obtain registration at the place of residence in the apartment you need to get an application from the university. The list of documents for the application must be submitted to the address: 10, Karla Marksa St., Technical College building, room 106:", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart145"), "1.	Passport (copy) 2.	Valid visa (copy) (for citizens from countries with a visa regime) 3.	Certificate of studies from the Department of Student Records (KAI Building 1, Room 126)", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart146"), "It is necessary to re-enter the migration registration if: ", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart147"), "1. The term of migration registration is 3 working days. 2. A foreign student changed his/her residence address. The period of migration registration is 7 working days. 3. Foreign student extends registration at the same address. The period of migration registration is 3 working days. 4. A foreign student was in hospital for treatment. The period of migration registration after leaving the hospital is 3 working days", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart148"), "Health insurance", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart149"), "Health insurance", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart150"), "Based on the Federal Law N 326-FZ of November 29, 2010. ON MANDATORY MEDICAL INSURANCE IN THE RUSSIAN FEDERATION every foreign citizen within the first week after the enrollment at KNITU-KAI is obliged to get a medical insurance policy valid for the whole period of registration/visa (as a rule, for one year). A health insurance policy can be obtained from insurance companies located near the university. The VMI policy must have a minimum sum insured of 300,000 rubles for 1 year. Students must renew the policy annually before they leave the Russian Federation. You can execute an VHI policy every day from 13.00 till 16.00 in the 1 hall of the KAI Institute of International Education (Moscow). KAI in the Institute of International Education (10, K. Marx St.), where representatives of Ak Bars Insurance and SMP-Insurance are located.", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart151"), "Accommodation (addresses of hostels)", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart152"), "Rules of stay of foreign citizens and persons without citizenship, studying at KNITU-KAI, in the Russian Federation", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart153_1"), "1.	All foreign citizens must comply with the laws of the Russian Federation and these rules. For all questions on rules of stay and passport and visa service foreign citizens must apply to the Institute of International Education (IIE) KNITU-KAI at the address: Kazan, 10, ul. Karla Marks, academic building № 1, technical college building rooms 106 and 107, Department of Visa Support (DVS). Reception time of foreign citizens in OVS: Monday-Friday, from 14:00 to 17:00. 2.	Foreign citizens may stay and move freely within the territory of the Russian Federation if they have the following documents with them: - a valid visa (in case of visa regime in the Russian Federation); - a migration card with a mark of border crossing; - a tear-off part of the notice of arrival of a foreign citizen / stateless person in the Russian Federation with a mark of the territorial body of the Department of Internal Affairs of the Ministry of Internal Affairs of Russia for registration on the migration register at the place of temporary stay (residence). These documents must be presented to law enforcement officials (police, migration service, etc.) at the time of inspection. 3.	When entering the territory of the Russian Federation, foreign citizens and stateless persons shall fill in a migration card, which they shall carry with them throughout their stay in the Russian Federation and present it when performing migration actions stipulated by law. 4.	Foreign citizens in the Russian Federation are subject to migration registration. For migration registration foreign citizens who arrive to KNITU-KAI and live in a dormitory of the University must within two days (except for holidays and weekends) submit copies and originals of the following documents to the Department of International activity of KNITU-KAI: passport, migration card, a valid visa (if there is a visa regime in the Russian Federation), issued by the invitation of KNITU-KAI or by the Ministry of Education and Science of the Russian Federation, warrant for the accommodation in the dormitory. ", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart153_2"), "For migration registration foreign nationals arriving at KNRTU-KAI and living in the apartment, must within two days (except holidays and weekends) submit copies and originals of the following documents: passport, migration card, valid visa (if a visa residence in the Russian Federation). Migration registration is carried out only at the address of actual residence (stay). 5.	The period of temporary stay in the Russian Federation of a foreign citizen or stateless person is determined by the validity period of the visa issued to him and the period of migration registration (in the presence of visa regime of stay in the Russian Federation) or only the period of migration registration at the place of stay (in the presence of visa-free regime of stay in the Russian Federation). A foreign citizen is obliged to leave the Russian Federation before the expiration of the visa or term of migration registration, except in cases where on the date of expiry of these terms a foreign citizen is issued a new visa to stay in the Russian Federation or a foreign citizen is registered with the migration service for the next period. KNITU-KAI does not carry out the extension of visas and migration registration of relatives and friends of foreign nationals, who have independently arrived in Kazan, and is not responsible for this. 6.	The term of temporary stay of a foreign citizen or stateless person on the territory of the Russian Federation for the entire period of study is prolonged by the Department of the Ministry of Internal Affairs of Russia in the Republic of Tatarstan annually, but not more than for 1 (one) year. ", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart153_2_1"), " To extend the period of temporary stay, a foreign national must, at least 20 WORKING days before the expiry of the current period of temporary stay (expiry date of the existing visa or period of registration of a foreign national in the migration service), submit to the Department of International Affairs the following documents: passport (original and copy), migration card (original and copy), notice of migration registration (original and copy), valid health insurance policy, training contract (for Documents for the extension of temporary stay of a foreign citizen will not be accepted by the Department of Internal Affairs of the Ministry of Internal Affairs of the Russian Federation if at least one of the listed documents is not provided or at least one of them is not filled out correctly. Registration/renewal of a multiple-entry visa without presenting the original valid passport and migration card to the Department of Internal Affairs of the Ministry of Internal Affairs of Russia in the RT is impossible. ", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart153_2_2"), "7.	A foreign citizen from a country with visa regime, who has not provided the necessary documents for extension/registration of a new multiple-entry visa in a timely manner to the IMO is obliged to leave the territory of the Russian Federation within the validity period of the visa and return to study at KNITU-KAI with a new visa, obtained on the basis of an invitation to enter the Russian Federation, issued by the Department of the Interior Ministry of Russia in RT at the request of KNITU-KAI or issued in the Russian Foreign Ministry at the request of the Ministry of Education and Science of Russia. 8.	A foreign citizen with a visa-free regime, who has not prolonged the term of stay in the Russian Federation in time, is obliged to leave the Russian Federation before the end of the period of stay. Otherwise the foreign national is considered to be illegally staying on the territory of the Russian Federation and bears personal responsibility in accordance with the legislation of the Russian Federation. 9.	The removal from the migration registration at the place of stay at KNITU-KAI takes place at the moment of crossing the border of the Russian Federation or at the moment of migration registration at the hotel or hostel during the trip through the territory of the Russian Federation, or in a medical institution (hospital, hospital, dispensary), including within the city of Kazan. Each time a foreign citizen returns to study at KNRTU-KAI after staying: abroad; in other settlements of the Russian Federation (in case of migration registration); in a hotel; in a medical institution for inpatient treatment, the foreign citizen must again get on the migration registration at the place of stay (residence) in Kazan. Kazan, presenting to the IMO (for those living in KNITU-KAI dormitory) or the owner of the apartment (for those renting an apartment) the necessary documents within two days of returning to study at KNITU-KAI: passport (copy), migration card (copy), last (in time) notice of migration registration (the original). ", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart153_3"), "10.	In case of a change of residence for a period exceeding 7 days (including within the KNRTU-KAI campus), a foreign national must inform the IMO, the directorate of the campus and the directorate of the host institution/faculty about it within two days and get registered with the migration service at the new place of residence. 11.	When obtaining a temporary residence permit, residence permit, or citizenship of the Russian Federation, the foreign national must notify the Office of Student Records, the receiving academic unit, and IMO within 24 hours. 12.	KNITU-KAI does not deal with issues of changing the migration status of a foreign citizen: obtaining Russian citizenship, registration of temporary residence permits or residence permits. 13. 6 months before the expiration date of the national passport the foreign citizen must renew or replace it according to the procedure in force in the foreign country and submit the renewed/new passport to IMO. In case of expiration of the national passport, the foreign citizen is obliged to leave the territory of the Russian Federation. ", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart153_3_1"), "14.	In case of loss of documents (national passport, visa, migration card), a foreign national must immediately contact the nearest police department at the place of loss or discovery of loss of documents to obtain a certificate of the incident, and immediately inform the receiving educational unit and IMO about it. 15.	After graduation or expulsion from KNRTU-KAI, the foreign national must leave the territory of Russia within three days from the date of expulsion, having purchased travel tickets in advance. Extension of the term of stay in the Russian Federation of foreign citizens-graduates of KNITU-KAI for reasons not related to training or other reasons not stipulated by law is not allowed. Termination of studies due to expulsion, both for good and bad reasons, as well as a break in training associated with academic leave, are grounds for shortening the period of temporary stay, in particular, the cancellation of the existing multiple entry visa and registration of a transit visa to leave the Russian Federation. In such cases, a foreign national (from the country with visa regime of stay) is obliged to buy tickets for departure from Russia in advance, submit tickets and documents necessary for cancellation of the current multiple entry visa and registration of a transit visa to the IMO. After that, the foreign national, in accordance with the tickets purchased in advance, is obliged to leave the territory of the Russian Federation before the expiration of the transit visa. 16.	The decision to extend or reduce the period of stay of a foreign citizen on the territory of the Russian Federation shall be made by the Department of the Ministry of Internal Affairs of the Russian Federation. Medical care for foreign nationals shall be provided on the basis of a voluntary health insurance policy purchased at the foreign national's own expense. The absence of a medical insurance policy valid on the territory of the Russian Federation is regarded as a violation of the rules of stay of foreign citizens on the territory of the Russian Federation. ", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart153_4"), "18.	A foreign citizen must comply with the current internal regulations of students of KNRTU-KAI, in particular, in good faith to master the educational program, implement the individual curriculum, including attendance at classes as provided by the curriculum, to prepare for classes independently, perform the tasks given by teaching staff within the educational program, timely notify in writing the educational unit of the University (Institute, Faculty, Department of SPE, Faculty, Department of Vocational Education, and Department of Higher Education) of the fact of his/her absence from classes, including examinations, and examinations. In case of absence from classes, including exams and tests for an unforeseen good reason, on the first day of the appearance at the University to submit documents confirming the validity of the reasons for missing classes. If a student is ill, he or she must present a prescribed certificate from the health care institution. 19. The student shall confirm in writing with the receiving department, the Student Union and IMO any trips he/she makes to another city or town (outside Kazan). 20.	In order to maintain operative communication, the foreign national is obliged to carry a cell phone and inform the current number to the receiving educational unit, IMO and Studenstadt. If the number is changed, he/she must also immediately inform the units mentioned in this paragraph. You should also have with you the contact information of the student group leader, the host academic unit, IMO and campus staff responsible for working with foreign nationals, and the dormitory and regional supervisors chosen from among the foreign nationals themselves. ", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart153_4_1"), "21.	A foreign citizen has the right to perform labor activities if he has reached the age of eighteen years old with a work permit or patent, unless another procedure is stipulated by the current legislation of the Russian Federation. 22) Foreign nationals who have committed crimes, administrative or other offences in the Russian Federation shall be held liable on the same basis as Russian citizens and may be subject to administrative and/or disciplinary liability accordingly. 23.	Foreign citizens or stateless persons who have committed administrative or other violations on the territory of the Russian Federation, including violations of the time limits for registration at the migration service, violations of the time limits for stay, presence in the Russian Federation with an expired visa, violations of the procedure for conducting labor activities in the Russian Federation, violations of the rules of medical care, etc. may be subject to the following sanctions: a fine, administrative expulsion, deportation 24.	In respect of foreign nationals who have committed repeated administrative or other offenses a decision may be made: to refuse to issue a temporary residence permit; to cancel an earlier permit; to cancel a residence permit; to refuse to issue a work permit; to cancel an earlier work permit; not to allow entry into the Russian Federation or undesirability of stay (or residence) in the Russian Federation for three or more years ", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart154"), "Application for departure", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart155"), "You can download the file by", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart156"), "click", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart157"), "arrival notification", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart158"), "You can download the file by", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart159"), "click", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart160"), "Please log in to your personal computer.", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart161"), "The mobile version is under development", "innerText");
                    TranslateLangObj.translater(document.querySelectorAll(".Lang-standart162"), "Coming soon....", "innerText");
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