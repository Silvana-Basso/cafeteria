const nav= document.getElementById('nav');
nav.addEventListener('click',function(){
    nav.classList.toggle('active');
})


window.addEventListener("scroll", function () {
    const header = document.querySelector(".fixed-header");
    const menu_bar = document.querySelector("#nav .menu-bar");
    const scrollY = window.scrollY;
  
    if (scrollY > 50) {
      header.classList.add("scrolled");
      menu_bar.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
      menu_bar.classList.remove("scrolled");
    }
  });