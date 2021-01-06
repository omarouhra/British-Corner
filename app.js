const navSlide = () => {
  // nav burger
  const burger = document.querySelector('.burger')
  const nav = document.querySelector('.nav-links')
  const navLinks = document.querySelectorAll('.nav-links li')


  //  Toogle nav
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active')

    //  Anitame links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ''
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5
          }s`
      }
      
    })
    //   Burger animation
    burger.classList.toggle('is-active')

  }
  )
}
 // scroll animation
const navLinkTouched = () => {
  const aboutUsLink = document.querySelector('.aboutUs-tapped');
  const servicesLink = document.querySelector('.services-tapped');
  const reviewsLink = document.querySelector('.reviews-tapped');
  const contactLink = document.querySelector('.contact-tapped');
  const nav = document.querySelector('.nav-links');
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelectorAll('.nav-links li');


  aboutUsLink.addEventListener('click', () => {
    //close the nav
    nav.classList.toggle('nav-active');
    //close the burger   
    burger.classList.toggle('is-active');
    // Animate Links again to close
    navLinks.forEach((link, index) => {
      //reset it, acts like a toggle
      if (link.style.animation) {
        link.style.animation = '';
        link.style.opacity = '1';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`
        link.style.opacity = '0';
      }
    }); 
  });

  ///////
  servicesLink.addEventListener('click', () => {
    //close the nav
    nav.classList.toggle('nav-active');
    //close the burger   
    burger.classList.toggle('is-active');
    // Animate Links again to close
    navLinks.forEach((link, index) => {
      //reset it, acts like a toggle
      if (link.style.animation) {
        link.style.animation = '';
        link.style.opacity = '1';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index/ 7}s`
        link.style.opacity = '0';
      }
    });        
  });
  ///////
  reviewsLink.addEventListener('click', () => {
    //close the nav
    nav.classList.toggle('nav-active');
    //close the burger   
    burger.classList.toggle('is-active');
    // Animate Links again to close
    navLinks.forEach((link, index) => {
      //reset it, acts like a toggle
      if (link.style.animation) {
        link.style.animation = '';
        link.style.opacity = '1';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`
        link.style.opacity = '0';
      }
    });        
  });
  //////
  contactLink.addEventListener('click', () => {
    //close the nav
    nav.classList.toggle('nav-active');
    //close the burger   
    burger.classList.toggle('is-active');
    // Animate Links again to close
    navLinks.forEach((link, index) => {
      //reset it, acts like a toggle
      if (link.style.animation) {
        link.style.animation = '';
        link.style.opacity = '1';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`
        link.style.opacity = '0';
      }
    });        
  });

}  
  // services toggle
const triggerText = () => {
  // services toggle
  const triggers = document.getElementsByClassName('trigger')
  const text = document.querySelectorAll('.service_text')
  const triggersArray = Array.from(triggers);
  const title = document.getElementsByName('trigger h3')
  const titleArray =Array.from('title')

  triggersArray.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      const answer = trigger.lastElementChild;
      answer.classList.toggle('service_text--visible');
      trigger.classList.toggle('trigger--active');
     })
  })
}

// review carousel 


const app = () => {
  navSlide();
  triggerText();
  navLinkTouched();

}


      app();