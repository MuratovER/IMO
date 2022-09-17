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

        // dark

        function themTrue(){
            localStorage.setItem("them","true");

            zanch = true;

            but.attr("checked",zanch);

            $("body").css("background","#000212");
            $("#hidden_block").css("background","#000212");
            $(".header").css("background","#000212").css("box-shadow","0px 20px 42px -1px rgb(255 255 255 / 8%)");
            $("#hidden_block").css("background","#17181E");
            $(".menu_links_boxs_links").css("border-color","#3A3A3A");
            $(".menu_links_box_displayWhere700px").css("background","#17181E");
            $(".menu_links_boxs_links_link").css("background","#17181E");
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
            $(".header2_boxText_twoBTNBox_button").css("border-color","#fff");
            $(".text_List_In_buttom_imgSvg").attr("class","text_List_In_buttom_imgSvgDark");
        }

        // light

        function themFalse(){
            localStorage.setItem("them","false");

            zanch = false;

            but.attr("checked",zanch);

            $("body").css("background","#fff");
            $("#hidden_block").css("background","#fff");
            $(".header").css("background","#fff").css("box-shadow","0px 20px 42px -1px rgb(0 0 0 / 8%)");
            $("#hidden_block").css("background","#fff");
            $(".menu_links_boxs_links_link").css("background","#fff");
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
            $(".header2_boxText_twoBTNBox_button").css("border-color","#000212");
            $(".text_List_In_buttom_imgSvgDark").attr("class","text_List_In_buttom_imgSvg");
        }
    }
);