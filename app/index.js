var clickedMenu = false;

document.body.querySelector(".menuIcon").addEventListener("click", function () {
    clickedMenu=!clickedMenu;
    if(clickedMenu){
        document.body.querySelector(".menu").style.top="60px";
    }else{
        document.body.querySelector(".menu").style.top="-600px";
    }
})
var clickedProduct1 = false;

document.body.querySelector(".productBox1").addEventListener("click", function () {
    clickedProduct1=!clickedProduct1;
    if(clickedProduct1){
        document.body.querySelector(".menu").style.display="borderBox";
    }else{
        document.body.querySelector(".menu").style.display="none";
    }
})

var clickedProduct2 = false;
var clickedProduct3 = false;
var clickedProduct4 = false;