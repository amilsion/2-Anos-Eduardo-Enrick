const menuToggle = document.querySelector('.toggle');
const menuClose = document.querySelector('.menu');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
	menuToggle.classList.toggle('active');
	showcase.classList.toggle('active');
});

menuClose.addEventListener('click', () => {
	menuToggle.classList.toggle('active') == false;
	showcase.classList.toggle('active') == false;
})

