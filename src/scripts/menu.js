let menuHeader= document.querySelector('.menu__header');
let exitBtn=menuHeader.querySelector('.header__exit');

exitBtn.addEventListener("click", () => {
	document.querySelector(".menu").style.width = "0";
	document.querySelector(".menu").style.display = "none";
	document.querySelector(".page").style.display = "block";
});

let header=document.querySelector('.header');
let burgerBtn=header.querySelector('.header__burger-menu');


burgerBtn.addEventListener("click", () => {
	document.querySelector(".menu").style.width = "100%";
	document.querySelector(".menu").style.display = "block";
	document.querySelector(".page").style.display = "none";

});

