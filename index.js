window.addEventListener("scroll", ()=>{
    var btn = document.querySelector("btt-btn")
    if(window.scrollY > 100){
    btn.style.display = "flex";
}else {
    btn.style.display = "none";
}
})

window.addEventListener("scroll", ()=>{
    var nav = document.querySelector("nav")
    if(window.scrollY > 0){
    nav.style.backgroundColor = "purple";
}else {
    nav.style.backgroundColor = "black";
}
})

var home = document.querySelector("#home-section")
var overlay = document.querySelector(".overlay")

home.addEventListener("click",()=>{
   overlay.classList.add("active")
})

overlay.addEventListener("click",()=>{
    overlay.classList.remove("active")
})

var grandparent = document.querySelector(".grandparent")
var parent = document.querySelector(".parent")
var child = docment.querySelector("child")

grandparent.addEventListener("click", ()=>{
    console.log("grandparent 1")
})

parent.addEventListener("click", ()=>{
    console.log("parent 1")
})