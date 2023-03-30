function initializeApp() {
	let sliderToggleButton = document.querySelector('.slider__read-more-btn');
	let sliderToggleButtonText=sliderToggleButton.querySelector('.read-more-btn__text');
	let sliderToggleButtonImg=sliderToggleButton.querySelector('.read-more-btn__icon');
	let sliderList = document.querySelector('.slider');


	sliderToggleButton.addEventListener("click", () => {
			
		sliderToggleButtonImg.classList.toggle('read-more-btn__icon--rotate');
		sliderList.classList.toggle('slider--hidden');

			if (sliderToggleButtonImg.classList.contains('read-more-btn__icon--rotate')) {
				sliderToggleButtonText.textContent = 'Скрыть';

			} else {
				sliderToggleButtonText.textContent = 'Показать все';
			}
	});


	let sliderToggleButton2 = document.querySelector('.slider2__read-more-btn');
	let sliderToggleButtonText2=sliderToggleButton2.querySelector('.read-more-btn__text');
	let sliderToggleButtonImg2=sliderToggleButton.querySelector('.read-more-btn__icon');
	let sliderList2 = document.querySelector('.slider2');



	sliderToggleButton2.addEventListener("click", () => {
			
		sliderToggleButtonImg2.classList.toggle('read-more-btn__icon--rotate');
		sliderList2.classList.toggle('slider2--hidden');

			if (sliderToggleButtonImg2.classList.contains('read-more-btn__icon--rotate')) {
				sliderToggleButtonText2.textContent = 'Скрыть';

			} else {
				sliderToggleButtonText2.textContent = 'Показать все';
			}
	});

	let contentBtn=document.querySelector('.content__read-more-btn');
	let contentButtonImg=contentBtn.querySelector('.read-more-btn__icon');
	let invisibleText=document.querySelector('.text__p2');


	contentBtn.addEventListener("click", () => {
		contentButtonImg.classList.toggle('read-more-btn__icon--rotate');
		invisibleText.classList.toggle('text__p2--invisible');

		});

}

document.addEventListener("DOMContentLoaded", initializeApp);
