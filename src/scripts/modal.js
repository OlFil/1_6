let btnStatus = document.querySelector('.buttons__repair-btn');
let btnCall=document.querySelector('.buttons__checkstatus-btn');

let btnPageStatus = document.querySelector('.page__repair-btn');
let btnPageCall=document.querySelector('.page__checkstatus-btn');

let modalStatus = document.querySelector('.modal-status');
let modalCall=document.querySelector('.modal-call');


let exitStatus = document.querySelector('.modal-status-close-btn');
let exitCall=document.querySelector('.modal-call-close-btn');

function returnScroll() {
  document.body.classList.remove("scroll-lock");
}

function LockScroll() {
  document.body.classList.add("scroll-lock");
}

function closeOnBackDropClick({ currentTarget, target }) {
  const dialogElement = currentTarget;
  const isClickedOnBackDrop = target === dialogElement;
  if (isClickedOnBackDrop) {
    dialogElement.close();
  }
}


btnStatus.addEventListener("click", () => {
	modalStatus.showModal();
	LockScroll();
});

btnCall.addEventListener("click", () => {
	modalCall.showModal();
	LockScroll();
});

btnPageStatus.addEventListener("click", () => {
	modalStatus.showModal();
	LockScroll();
});

btnPageCall.addEventListener("click", () => {
	modalCall.showModal();
	LockScroll();
});

exitStatus.addEventListener("click", () => {
	modalStatus.close();
	returnScroll();

});

exitCall.addEventListener("click", () => {
	modalCall.close();
	returnScroll();
});

modalCall.addEventListener("click", closeOnBackDropClick);

modalStatus.addEventListener("click", closeOnBackDropClick);

