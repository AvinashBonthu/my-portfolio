const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('#menu');
const menuBtnBurger = document.querySelector('.menu-btn__burger');
const menuList = document.querySelector('.menu_list');
const menuImage = document.querySelector('.menu_image');
const section1 = document.querySelector('.section-1');
const section2 = document.querySelector('.section-2');
const section3 = document.querySelector('.section-3');
const section4 = document.querySelector('.section-4');
const section5 = document.querySelector('.section-5');
const menuNumber = document.querySelector('.menu_number');
const menuImg = document.querySelector('.menu_img');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    menu.style.transition = 'all 0.2s ease-in-out';
    menu.style.width='100%';
    menu.style.height = '100%';
    menu.style.borderRadius='0';
    menuBtn.style.float='right';
    menuList.style.display = 'inline-block';
    menu.style.backgroundColor = '#121212';
    menuImage.style.display = 'inline-block';
    document.querySelector('body').style.overflowY = 'hidden'

  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    menu.style.width='auto';
    menu.style.height = 'auto';
    menu.style.transition = 'all 0.2s ease-in-out';
    menu.style.borderRadius='300px';
    menuList.style.display = 'none';
    menu.style.backgroundColor = '#fff';
    menuImage.style.display = 'none';
    document.querySelector('body').style.overflowY = 'scroll'
  }
});


menuBtn.addEventListener("mouseover", () => {
	menu.style.paddingLeft = '50px';
	menu.style.paddingBottom = '50px';
	menuBtnBurger.style.width = '20px';
})
menuBtn.addEventListener("mouseout", () => {
	menu.style.paddingLeft = '30px';
	menu.style.paddingBottom = '30px';
	menuBtnBurger.style.width = '40px';
})

// menuList.addEventListener('mouseover', function(){
//     menuImage.classList.toggle('show');
// });

// menuList.addEventListener('mouseout', function(){
//     menuImage.classList.toggle('show');
// });

section1.addEventListener('mouseover', () => {
	menuImage.classList.toggle('show')
	menuNumber.display ='inline-block';
	menuImg.display = 'inline-block';
	menuNumber.innerHTML = '01';
	menuImg.src = '../images/main_2_image.jpg';
	
})
section2.addEventListener('mouseover', () => {
	menuImage.classList.toggle('show')
	menuNumber.display ='inline-block';
	menuImg.display = 'inline-block';
	menuNumber.innerHTML = '02';
	menuImg.src = '../images/aboutme_image.jpg';
	
})
section3.addEventListener('mouseover', () => {
	menuImage.classList.toggle('show')
	menuNumber.display ='inline-block';
	menuImg.display = 'inline-block';
	menuNumber.innerHTML = '03';
	menuImg.src = '../images/work_by_me.jpg';
	
})
section4.addEventListener('mouseover', () => {
	menuImage.classList.toggle('show')
	menuNumber.display ='inline-block';
	menuImg.display = 'inline-block';
	menuNumber.innerHTML = '04';
	menuImg.src = '../images/work_image.jpg';
	
})
section5.addEventListener('mouseover', () => {
	menuImage.classList.toggle('show')
	menuNumber.display ='inline-block';
	menuImg.display = 'inline-block';
	menuNumber.innerHTML = '05';
	menuImg.src = '../images/services_image.jpg';
	
})

section1.addEventListener('mouseout', () => {
	menuImage.classList.toggle('show')
})
section2.addEventListener('mouseout', () => {
	menuImage.classList.toggle('show')
})
section3.addEventListener('mouseout', () => {
	menuImage.classList.toggle('show')
})
section4.addEventListener('mouseout', () => {
	menuImage.classList.toggle('show')
})
section5.addEventListener('mouseout', () => {
	menuImage.classList.toggle('show')
})
