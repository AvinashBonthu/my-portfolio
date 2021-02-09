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

const project_1 = document.querySelector('.project_1');
const project_1_image = document.querySelector('.project_1_image');
const footer_class = document.querySelector('.footer_class')
const footer_icons = document.querySelector('.footer_icons')
const footer_contact = document.querySelector('.footer_contact')
const footer_signature = document.querySelector('.signature')
const myself_profile = document.querySelector('.myself_profile')
const myself_heading = document.querySelector('.myself_heading')
const myself_information = document.querySelector('.myself_information')
const myself_skills = document.querySelector('.myself_skills')

project_1.classList.add('cssanimation');
    project_1.classList.add('sequence');
    project_1.classList.add('fadeInBottom');

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
        if(isPartiallyVisible(project_1_image)){
            project_1_image.style.opacity = 1;
            project_1_image.style.height = '100%';
            project_1_image.style.width = '39%';
            project_1_image.style.transition = 'all .75s ease';
        }
    })

        window.addEventListener('scroll', () => {
    	if(isPartiallyVisible(myself_profile)){
    		myself_profile.classList.add('cssanimation');
    		myself_profile.classList.add('sequence');
    		myself_profile.classList.add('fadeInBottom');
    		
    		// console.log('true')
    	} else {
		    myself_profile.classList.remove('cssanimation');
		    myself_profile.classList.remove('sequence');
		    myself_profile.classList.remove('fadeInBottom');  

		    // console.log('flase')		
    	}
    })

        window.addEventListener('scroll', () => {
        if(isPartiallyVisible(myself_heading)){
            myself_heading.classList.add('cssanimation');
            myself_heading.classList.add('sequence');
            myself_heading.classList.add('fadeInBottom');
            myself_information.classList.add('cssanimation');
            myself_information.classList.add('sequence');
            myself_information.classList.add('fadeInBottom');
            
            // console.log('true')
        } else {
            myself_heading.classList.remove('cssanimation');
            myself_heading.classList.remove('sequence');
            myself_heading.classList.remove('fadeInBottom');
            myself_information.classList.remove('cssanimation');
            myself_information.classList.remove('sequence');
            myself_information.classList.remove('fadeInBottom');  

            // console.log('flase')     
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





