let menuBtn = document.querySelector('.menu-btn');
let menuLink = document.querySelectorAll('.menu__navigation-link');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
});

//эта штука не работает вообще
menuLink.forEach (function() {
	menuLink.addEventListener('click', function(menuOff) {
		menu.classList.toggle('active');
		menuBtn.classList.toggle('active');
});
});

/*menuLink.addEventListener('click', function(menuOff){
	menu.classList.toggle('active');
	menuBtn.classList.toggle('active');
})
эта работает ожидаемо онли на первую ссылку в списке*/






