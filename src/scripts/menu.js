let menuHeader= document.querySelector('.menu__header');
let exitBtn=menuHeader.querySelector('.header__exit');

let menu=document.querySelector(".menu");
let header=document.querySelector('.header');
let burgerBtn=header.querySelector('.header__burger-menu');

let page=document.querySelector('.page');

function close(){
	menu.style.width = "0";
	document.body.classList.remove("scroll-lock");
	page.classList.remove("body-hidden");
	header.classList.remove("body-hidden");
	menu.style.display = "none";
	menu.classList.remove('menu-open')
}

function open(){
	menu.style.width = "100%";
	document.body.classList.add("scroll-lock");
	page.classList.add("body-hidden");
	header.classList.add("body-hidden");
	menu.style.display = "block";
	menu.classList.add('menu-open')
}

exitBtn.addEventListener("click", () => {
close();

});


burgerBtn.addEventListener("click", () => {
open();

});

page.addEventListener("click", () => {
	if(page.classList.contains("body-hidden")) close()
	});
	
