document.addEventListener("DOMContentLoaded",() => {
    let ClassOfClickLinkinMAin = document.querySelector(".ClassOfClickLinkinMAin").addEventListener("click",()=>{
        clickToHeader();
    });
});
function clickToHeader(){
    document.location = "http://127.0.0.1:8000/";
}