function openNav(){
    document.getElementById("mobile-menu").style.width="100%";
}

function closeNav(){
    document.getElementById("mobile-menu").style.width="0%";
}

window.addEventListener("scroll",function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0)
})