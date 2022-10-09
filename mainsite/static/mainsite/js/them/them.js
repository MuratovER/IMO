$(document).ready(
    function(){
        //them : true = dark; false = light;
        let but = $("#flexSwitchCheckDefault");
        var zanch;

        but.click(
            function(e){  
                zanch = !zanch;
                but.attr("checked",zanch);
                switch(zanch){

                    case true:
                        themTrue();
                        break;

                        case false:
                            themFalse();
                            break;
                }
            }
        );

        if(localStorage.getItem("them") == null){
            localStorage.setItem("them","false");
            zanch = false;
        }else{
            if(localStorage.getItem("them") == 'false'){
                
                themFalse();
            }else if(localStorage.getItem("them") == 'true'){
                
                themTrue();
            }
        }

        function themTrue(){
            localStorage.setItem("them","true");

            zanch = true;

            but.attr("checked",zanch);
            // Black
            $("body").css("background","#000212");
            $("#hidden_block").css("background","#000212");
            $(".header").css("background","#000212").css("box-shadow","0px 20px 42px -1px rgb(255 255 255 / 8%)");
            $("#hidden_block").css("background","#17181E");
            $(".menu_links_boxs_links").css("border-color","#3A3A3A");
            $(".menu_links_box_displayWhere700px").css("background","#17181E");
            // $(".menu_links_boxs_links_link").css("background","#424242");
            $(".buttonsInHeader_box_usButton").css("background-image","url('static/mainsite/img/kubsMenuDark.svg')");
            $("#lang").css("color","#fff");
            $("h1").css("color","#fff");
            $("h2").css("color","#fff");
            $("h3").css("color","#fff");
            $("h4").css("color","#fff");
            $("p").css("color","#fff");
            $("a").css("color","#fff");
            $(".specialty_box_picture_text").css("color","#fff");
            $(".preloader").css("background-color","#000212");
            $(".spinner").css("background-image","url('static/mainsite/img/preloader/preloaderDark.svg')");
            $(".main_block").css("background-color","rgb(0, 2, 18)");
            $(".main_icon_logo").css("background-image","url('static/mainsite/img/black-logo.svg')");
            $(".menu_links_boxs_links_link").css("background","#252525");
            $(".header2_boxText_twoBTNBox_button").css("border","2px solid #464654");
            $(".Lang-standart13").css("color","#FFFFFF");
            $(".Lang-standart14").css("color","#FFFFFF");
            $(".text_List_In_buttom_imgSvg").css("background-image", "url('static/mainsite/img/pic-listdown.svg')");
            $(".Lang-standart17").css("color","#D9D9DC");
            $(".imo_advantage_Boxinf_imgbox").css("background-color","#1A1B23");
            $(".footer_boxs_links_box_plot").css("background-color","#1A1B23");
            $(".Lang-standart79").css("color","#B7B7B7");
            $(".Lang-standart73").css("color","#B7B7B7");
            $(".Lang-standart76").css("color","#B7B7B7");
            $(".Lang-standart7_6").css("color","#B7B7B7");
            $(".Lang-standart80").css("color","#B7B7B7");
            $(".main_block_form_button1").css("color", "#FFF");
            $("#InputFieldName").css("background-color", "#26282F").css("color", "#8E8E8E");
            $("#id_password1").css("background-color", "#26282F").css("color", "#8E8E8E");
            $(".main_block_form_input_1").css("border", "2px solid #4526FF");
            $("#InputEnterButtom").css("color", "#FFF");
            $("#ForgotPassword").css("color", "#FFF");
            $(".nowVW").css("color", "#0d6efd");
            $(".Lang-standart34").css("color","#FFF");
            $(".button-Backcolor-text-black").css("background-color", "#26282F").css("color", "#8E8E8E");
            $(".profile").css("background-color", "#000212");
            // $(".Lang-standart83").css("background-color", "#14161D").css("color", "#DBDAE0");
            // $(".Lang-standart84").css("background-color", "#14161D").css("color", "#DBDAE0");
            // $(".Lang-standart85").css("background-color", "#14161D").css("color", "#DBDAE0");

            $(".Lang-standart88").css("color", "#F0F0F0");
            $(".Lang-standart89").css("color", "#F0F0F0");
            $(".Lang-standart90").css("color", "#F0F0F0");
            $(".Lang-standart91").css("color", "#F0F0F0");
            $(".Lang-standart92").css("color", "#F0F0F0");
            $(".Lang-standart93").css("color", "#F0F0F0");
            $(".Lang-standart94").css("color", "#F0F0F0");
            $(".Lang-standart95").css("color", "#F0F0F0");
            $(".Lang-standart96").css("color", "#F0F0F0");

            $(".about-info-name").css("color",        "#FFFFFF");
            $(".about-info-gender").css("color",      "#FFFFFF");
            $(".about-info-birthday").css("color",    "#FFFFFF");
            $(".about-info-country").css("color",     "#FFFFFF");
            $(".about-info-city").css("color",        "#FFFFFF");
            $(".about-info-citizenship").css("color", "#FFFFFF");
            $(".about-info-phone").css("color",       "#FFFFFF");
            $(".about-info-email").css("color",       "#FFFFFF");
            
            $(".basic-info").css("background-color", "#14161D").css("border-color", "#3F4457");
            $(".verification-info").css("background-color", "#14161D").css("border-color", "#3F4457");

            
            $("#username").css("background-color", "#26282F").css("color", "#8E8E8E");
            $("#password").css("background-color", "#26282F").css("color", "#8E8E8E");


        }
        function themFalse(){
            localStorage.setItem("them","false");

            zanch = false;

            but.attr("checked",zanch);

            // White

            $("body").css("background","#fff");
            $("#hidden_block").css("background","#fff");
            $(".header").css("background","#fff").css("box-shadow","0px 20px 42px -1px rgb(0 0 0 / 8%)");
            $("#hidden_block").css("background","#fff");
            $(".menu_links_boxs_links_link").css("background","#F9F9F9");
            $(".buttonsInHeader_box_usButton").css("background-image","url('static/mainsite/img/kubsMenu.svg')");
            $(".menu_links_box_displayWhere700px").css("background","#fff");
            $("#lang").css("color","#000");
            $("h1").css("color","#000");
            $("h2").css("color","#000");
            $("h3").css("color","#000");
            $("h4").css("color","#000");
            $("p").css("color","#000");
            $("a").css("color","#000");
            $(".specialty_box_picture_text").css("color","#fff");
            $(".preloader").css("background-color","#FFF");
            $(".spinner").css("background-image","url('static/mainsite/img/preloader/preloader.svg')");
            $(".main_block").css("background-color","#FFF");
            // $(".main_icon_logo").css("background-image","url('static/mainsite/img/black-logo.svg')");
            $(".main_icon_logo").css("background-image","url('static/mainsite/css/home_page/cssimg/mainICON_1.svg')");
            // $(".menu_links_boxs_links_link").css("background","#252525");
            $(".header2_boxText_twoBTNBox_button").css("border","2px solid #000212");
            // Lang-standart13
            $(".Lang-standart13").css("color","#000000");
            $(".Lang-standart14").css("color","#000000");
            $(".text_List_In_buttom_imgSvg").css("background-image", " url('static/css/home_page/cssimg/circlePlasArrow.svg')");
            $(".Lang-standart17").css("color","#383838");
            // .imo_advantage_Boxinf_imgbox
            $(".imo_advantage_Boxinf_imgbox").css("background-color","#F9F9F9");
            // .footer_boxs_links_box_plot
            $(".footer_boxs_links_box_plot").css("background-color","#F2F2F2");
            $(".Lang-standart79").css("color","#000212");
            $(".Lang-standart73").css("color","#000212");
            $(".Lang-standart76").css("color","#000212");
            $(".Lang-standart7_6").css("color","#000212");
            $(".Lang-standart80").css("color","#000212");
            $(".main_block_form_button1").css("color", "#FFF");
            $("#InputFieldName").css("background-color", "#FFF").css("color", "#000000");
            $("#id_password1").css("background-color", "#FFF").css("color", "#000000");
            $(".main_block_form_input_1").css("border", "2px solid #4526FF");
            $("#InputEnterButtom").css("color", "#FFF");
            $("#ForgotPassword").css("color", "#FFF");
            $(".nowVW").css("color", "#0d6efd");
            $(".Lang-standart34").css("color","#FFF");
            // button-Backcolor-text-black
            $(".button-Backcolor-text-black").css("background-color", "#FFF").css("color", "#000000");
            $(".profile").css("background-color", "#FFF");
            // $(".Lang-standart83").css("background-color", "#F2F2F2").css("color", "#383838");
            // $(".Lang-standart84").css("background-color", "#F2F2F2").css("color", "#383838");
            // $(".Lang-standart85").css("background-color", "#F2F2F2").css("color", "#383838");


            $(".Lang-standart88").css("color", "#676767");
            $(".Lang-standart89").css("color", "#676767");
            $(".Lang-standart90").css("color", "#676767");
            $(".Lang-standart91").css("color", "#676767");
            $(".Lang-standart92").css("color", "#676767");
            $(".Lang-standart93").css("color", "#676767");
            $(".Lang-standart94").css("color", "#676767");
            $(".Lang-standart95").css("color", "#676767");
            $(".Lang-standart96").css("color", "#676767");

            $(".about-info-name").css("color",        "#383838");
            $(".about-info-gender").css("color",      "#383838");
            $(".about-info-birthday").css("color",    "#383838");
            $(".about-info-country").css("color",     "#383838");
            $(".about-info-city").css("color",        "#383838");
            $(".about-info-citizenship").css("color", "#383838");
            $(".about-info-phone").css("color",       "#383838");
            $(".about-info-email").css("color",       "#383838");
            
            $(".basic-info").css("background-color", "#FFF").css("border-color", "#FFF");
            $(".verification-info").css("background-color", "#FFF").css("border-color", "#FFF");
            $("#username").css("background-color", "#FFF").css("color", "#000000");
            $("#password").css("background-color", "#FFF").css("color", "#000000");


        }
    }
    
);