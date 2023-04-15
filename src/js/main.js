let menuBtn = document.querySelector('.menu-btn');
let menuLink = document.querySelector('.menu__navigation-link');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
});

//как бы работает, но только с первой ссылкой
menuLink.addEventListener('click', function(){
	menu.classList.toggle('active');
	menuBtn.classList.toggle('active');
})


//тоже работает с первой ссылкой
let navLink = document.querySelector('.navigation__link_prices');
let price = document.querySelector('.section__inner_prices');

navLink.addEventListener('click', function(){
	price.classList.toggle('active');
});


  let contactForm = document.getElementById('contactForm');
  
  contactForm.addEventListener('submit', function (event) {
	event.preventDefault();
	const { name, phone } = this.elements;
	console.log({
		name: name.value,
		phone: phone.value
	});

	this.reset();
  });

  


