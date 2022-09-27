

var search=document.querySelector("#search")
var help = document.querySelector(".Help")
search.onclick = function(){
   help.classList.remove("d-none")
}

var xbtn = document.querySelector('#x_btn');

xbtn.onclick = function(){
   help.classList.add("d-none")

}

var menu=document.querySelector("#icon")
var slidebar=document.querySelector("#slidebar")

menu.addEventListener("click",function (){
    if(slidebar.style.width==="100%"){
        slidebar.style.width="0%"
    }
    else{
        slidebar.style.width="100%"
    }
})

var language=document.querySelector("#languages")
var langslide = document.querySelector(".lang-con")
var langtop=document.querySelector("lang-top")

language.addEventListener("click",function(){
      
    if(langslide.style.width==="10%"){
        langslide.style.width="0%"
    }
    else{
        langslide.style.width="10%"
    }
    
})