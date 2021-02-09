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


const my_projects = document.querySelector('.my_projects');
const my_projects_intro = document.querySelector('.my_projects_intro');
const my_projects_heading = document.querySelector('.my_projects_heading');
const project_1 = document.querySelector('.project_1');
const project_1_image = document.querySelector('.project_1_image');
const project_2_image = document.querySelector('.project_2_image');
const footer_class = document.querySelector('.footer_class')
const footer_icons = document.querySelector('.footer_icons')
const footer_contact = document.querySelector('.footer_contact')
const footer_signature = document.querySelector('.signature')


my_projects.classList.add('cssanimation');
    my_projects.classList.add('sequence');
    my_projects.classList.add('fadeInBottom');

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

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}





