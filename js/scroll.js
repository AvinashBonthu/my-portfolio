// const introduction_div2 = document.querySelector('.introduction_div2');

// introduction_div2.addEventListener('scroll', () => {
// 	introduction_div2.style.opacity = '1 - window.scrollTop() / 250';
// })



// $(document).ready(function(){ 
// 	$(".wish").fadeIn(1000);
// 	$(".myself").fadeIn(1000);


// if(document.querySelector('.wish').style.opacity === 0){
// 	$(".wish1").fadeIn(1000);
// 	$(".myself1").fadeIn(1000);
// }

// if(document.querySelector('.wish1').style.opacity === 0){
// 	$(".wish").fadeOut(1000);
// 	$(".myself").fadeOut(1000);
// }
 
//         });


$(window).scroll(function () {
	$(".introduction_div2").css('opacity', (1 - $(window).scrollTop() / 375));
});

let only_once = true;
let about_only_once = true;

const aboutDiv = document.querySelector('.about_div')
const aboutImageDiv = document.querySelector('.about_image_div')
const aboutInformation = document.querySelector('.about_information')
const aboutName = document.querySelector('.about_name')
const about = document.querySelector('.about')
const my_services = document.querySelector('.my_services')
const services_intro = document.querySelector('.services_intro')
const services_heading = document.querySelector('.services_heading')
const services_icon = document.querySelector('.services_icon')
const services = document.querySelector('.services')
const my_services_div2 = document.querySelector('.my_services_div2')
const my_services_div1 = document.querySelector('.my_services_div1')
const fab = document.querySelector('.fab')
const robo = document.querySelector('.robo')
const developer = document.querySelector('.developer')
const ai = document.querySelector('.AI')
const fas = document.querySelector('.fas')
const my_projects = document.querySelector('.my_projects');
const my_projects_intro = document.querySelector('.my_projects_intro');
const my_projects_heading = document.querySelector('.my_projects_heading');
const project_1 = document.querySelector('.project_1');
const project_1_image = document.querySelector('.project_1_image');
const project_2_image = document.querySelector('.project_2_image');
const my_achievements = document.querySelector('.my_achievements');
const my_achievements_intro = document.querySelector('.my_achievements_intro');
const my_achievements_heading = document.querySelector('.my_achievements_heading');
const achievement_number = document.querySelector('.achievement_numbers')
const nbr1 = document.querySelector('#nbr1')
const nbr2 = document.querySelector('#nbr2')
const nbr3 = document.querySelector('#nbr3')
const footer_class = document.querySelector('.footer_class')
const footer_icons = document.querySelector('.footer_icons')
const footer_contact = document.querySelector('.footer_contact')
const footer_signature = document.querySelector('.signature')


aboutDiv.classList.add('cssanimation');
    aboutDiv.classList.add('sequence');
    aboutDiv.classList.add('fadeInBottom');

    function isPartiallyVisible(el) {
      var elementBoundary = el.getBoundingClientRect();
 
      var top = elementBoundary.top;
      var bottom = elementBoundary.bottom;
      var height = elementBoundary.height;
 
      return ((top + height >= 0) && (height + window.innerHeight >= bottom));
    }

    function isFullyVisible(el) {
      var elementBoundary = el.getBoundingClientRect();
 
      var top = elementBoundary.top;
      var bottom = elementBoundary.bottom;
 
      return ((top >= 0) && (bottom <= window.innerHeight));
    }

    window.addEventListener('scroll', () => {
    	if(isPartiallyVisible(my_services_div1)){
    		services_intro.classList.add('cssanimation');
    		services_intro.classList.add('sequence');
    		services_intro.classList.add('fadeInBottom');
    		services_heading.classList.add('cssanimation');
    		services_heading.classList.add('sequence');
    		services_heading.classList.add('fadeInBottom');
    		// services.classList.add('cssanimation');
    		// services.classList.add('sequence');
    		// services.classList.add('fadeInBottom');
    		// console.log('true')
    	} else {
		    services_intro.classList.remove('cssanimation');
    		services_intro.classList.remove('sequence');
    		services_intro.classList.remove('fadeInBottom');
    		services_heading.classList.remove('cssanimation');
    		services_heading.classList.remove('sequence');
    		services_heading.classList.remove('fadeInBottom');
    		// services.classList.remove('cssanimation');
    		// services.classList.remove('sequence');
    		// services.classList.remove('fadeInBottom');
		    // console.log('flase')		
    	}
    })

        window.addEventListener('scroll', () => {
    	if(isPartiallyVisible(aboutDiv)){
    		aboutImageDiv.classList.add('cssanimation');
    		aboutImageDiv.classList.add('sequence');
    		aboutImageDiv.classList.add('fadeInBottom');
    		aboutInformation.classList.add('cssanimation');
    		aboutInformation.classList.add('sequence');
    		aboutInformation.classList.add('fadeInBottom');
    		aboutName.classList.add('cssanimation');
    		aboutName.classList.add('sequence');
    		aboutName.classList.add('fadeInBottom');
    		// console.log('true')
    	} else {
		    aboutImageDiv.classList.remove('cssanimation');
		    aboutImageDiv.classList.remove('sequence');
		    aboutImageDiv.classList.remove('fadeInBottom');  
		    aboutInformation.classList.remove('cssanimation');
		    aboutInformation.classList.remove('sequence');
		    aboutInformation.classList.remove('fadeInBottom');  
		    aboutName.classList.remove('cssanimation');
		    aboutName.classList.remove('sequence');
		    aboutName.classList.remove('fadeInBottom');
		    // console.log('flase')		
    	}
    })

    window.addEventListener('scroll', () => {
    	if(isPartiallyVisible(my_services_div2)){
    		fab.classList.add('cssanimation');
    		fab.classList.add('sequence');
    		fab.classList.add('fadeInBottom');
    		robo.classList.add('cssanimation');
    		robo.classList.add('sequence');
    		robo.classList.add('fadeInBottom');
    		developer.classList.add('cssanimation');
    		developer.classList.add('sequence');
    		developer.classList.add('fadeInBottom');
    		ai.classList.add('cssanimation');
    		ai.classList.add('sequence');
    		ai.classList.add('fadeInBottom');
    		fas.classList.add('cssanimation');
    		fas.classList.add('sequence');
    		fas.classList.add('fadeInBottom');
    		services.classList.add('cssanimation');
    		services.classList.add('sequence');
    		services.classList.add('fadeInBottom');
    		// console.log('true')
    	} else {
		    fab.classList.remove('cssanimation');
    		fab.classList.remove('sequence');
    		fab.classList.remove('fadeInBottom');
    		robo.classList.remove('cssanimation');
    		robo.classList.remove('sequence');
    		robo.classList.remove('fadeInBottom');
    		developer.classList.remove('cssanimation');
    		developer.classList.remove('sequence');
    		developer.classList.remove('fadeInBottom');
    		ai.classList.remove('cssanimation');
    		ai.classList.remove('sequence');
    		ai.classList.remove('fadeInBottom');
    		fas.classList.remove('cssanimation');
    		fas.classList.remove('sequence');
    		fas.classList.remove('fadeInBottom');
    		services.classList.remove('cssanimation');
    		services.classList.remove('sequence');
    		services.classList.remove('fadeInBottom');
		    // console.log('flase')		
    	}
    })

    window.addEventListener('scroll', () => {
    	if(isPartiallyVisible(my_projects)){
    		my_projects_intro.classList.add('cssanimation');
    		my_projects_intro.classList.add('sequence');
    		my_projects_intro.classList.add('fadeInBottom');
    		my_projects_heading.classList.add('cssanimation');
    		my_projects_heading.classList.add('sequence');
    		my_projects_heading.classList.add('fadeInBottom');
    	} else {
		    my_projects_intro.classList.remove('cssanimation');
    		my_projects_intro.classList.remove('sequence');
    		my_projects_intro.classList.remove('fadeInBottom');
    		my_projects_heading.classList.remove('cssanimation');
    		my_projects_heading.classList.remove('sequence');
    		my_projects_heading.classList.remove('fadeInBottom');		
    	}
    })

    window.addEventListener('scroll', () => {
    	if(isPartiallyVisible(project_1_image)){
    		project_1_image.style.opacity = 1;
    		project_1_image.style.height = '100%';
    		project_1_image.style.width = '39%';
    		project_1_image.style.transition = 'all .75s ease';
    	}
    })

    window.addEventListener('scroll', () => {
    	if(isPartiallyVisible(project_2_image)){
    		project_2_image.style.opacity = 1;
    		project_2_image.style.height = '100%';
    		project_2_image.style.width = '39%';
    		project_2_image.style.transition = 'all .75s ease';
    	}
    })

    window.addEventListener('scroll', () => {
    	if(isPartiallyVisible(my_achievements)){
    		my_achievements_intro.classList.add('cssanimation');
    		my_achievements_intro.classList.add('sequence');
    		my_achievements_intro.classList.add('fadeInBottom');
    		my_achievements_heading.classList.add('cssanimation');
    		my_achievements_heading.classList.add('sequence');
    		my_achievements_heading.classList.add('fadeInBottom');
    	} else {
		    my_achievements_intro.classList.remove('cssanimation');
    		my_achievements_intro.classList.remove('sequence');
    		my_achievements_intro.classList.remove('fadeInBottom');
    		my_achievements_heading.classList.remove('cssanimation');
    		my_achievements_heading.classList.remove('sequence');
    		my_achievements_heading.classList.remove('fadeInBottom');		
    	}
    })

    window.addEventListener('scroll', () => {
        if(isPartiallyVisible(footer_class)){
            footer_icons.classList.add('cssanimation');
            footer_icons.classList.add('sequence');
            footer_icons.classList.add('fadeInBottom');
            footer_contact.classList.add('cssanimation');
            footer_contact.classList.add('sequence');
            footer_contact.classList.add('fadeInBottom');
            footer_signature.classList.add('cssanimation');
            footer_signature.classList.add('sequence');
            footer_signature.classList.add('fadeInBottom');
            // console.log('true')
        } else {
            footer_icons.classList.remove('cssanimation');
            footer_icons.classList.remove('sequence');
            footer_icons.classList.remove('fadeInBottom');  
            footer_contact.classList.remove('cssanimation');
            footer_contact.classList.remove('sequence');
            footer_contact.classList.remove('fadeInBottom');  
            footer_signature.classList.remove('cssanimation');
            footer_signature.classList.remove('sequence');
            footer_signature.classList.remove('fadeInBottom');
            // console.log('flase')     
        }
    })


var speed = .1;

function incEltNbr(id) {
  elt = document.getElementById(id);
  endNbr = Number(document.getElementById(id).innerHTML);
  incNbrRec(0, endNbr, elt);
}

function incNbrRec(i, endNbr, elt) {
  if (i <= endNbr) {
    elt.innerHTML = i;
    setTimeout(function() {
      incNbrRec(i + 1, endNbr, elt);
    }, speed);
  }
}


window.addEventListener('scroll', () => {
    	if(isFullyVisible(my_achievements) && only_once){
			incEltNbr("nbr3");
			only_once = false;
    	}
    })

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}





