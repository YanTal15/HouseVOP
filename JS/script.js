//Меню-бургер
let openBurger = document.querySelector('.nav__burger')
let menuBurger = document.querySelector('.nav__burger-menu')
let closeBurger = document.querySelector('.nav__burger-close')


openBurger.addEventListener('click', function(){
    menuBurger.classList.remove('d-none')
})
closeBurger.addEventListener('click', function(){
    menuBurger.classList.add('d-none')
})

document.addEventListener( 'click', (e) => {
	let menuArea = e.composedPath().includes(menuBurger);

    let btnArea = e.composedPath().includes(openBurger);
 
	if ( !menuArea && !btnArea) {
		menuBurger.classList.add('d-none')
	}
})

//Плавный скролл
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        menuBurger.classList.add('d-none')
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

//Мышка

let mouse = document.querySelector('.header__mouse')
let mousePlace = 21.5
let isUp = false
//определяем старт движения объекта по клику на него
console.log(mouse.style.bottom)
let mouseMove = function(){

let start = Date.now(); // запоминаем время, когда начинается движение
let timer = setInterval(function() {

  // определяем количество времени со старта движения

  let timePassed = Date.now() - start;

 

  if (timePassed >= 2000) {

    clearInterval(timer); // заканчиваем движение через 1,5 секунды
    if(!isUp){isUp = true}else{isUp = false}
    mousePlace = parseFloat(mouse.style.bottom, 10)
    console.log(mousePlace)
    mouseMove()
    return;

  }

 

  // отрисовываем движение на момент «timePassed», который прошел со старта движения объекта
    if(!isUp){
        mouseUp();
    }else{mouseDown()}
 

}, 25);

 

// пока «timePassed» отчисляет время от 0 до 1500 миллисекунд

// «left» корректирует «пиксельное» значение объекта

function mouseUp() {
  mouse.style.bottom = mousePlace + 0.05 + 'rem';
  mousePlace = parseFloat(mouse.style.bottom, 10)
}

function mouseDown() {
  mouse.style.bottom = mousePlace - 0.05 + 'rem';
  mousePlace = parseFloat(mouse.style.bottom, 10)
}
}
mouseMove()