const navSlide = () => {
  // nav burger
  const burger = document.querySelector('.burger')
  const nav = document.querySelector('.nav-links')
  const navLinks = document.querySelectorAll('.nav-links li')

  // services toggle
  const btn1 = document.querySelector('#button1')
  const btn2 = document.querySelector('#button2')
  const btn3 = document.querySelector('#button3')
  const btn4 = document.querySelector('#button4')

  const serviceTitle = document.querySelector('.services_title h3')
  const firstText = document.querySelector('.first')
  const secondText = document.querySelector('.second')
  const thirdText = document.querySelector('.third')
  const fourthText = document.querySelector('.fourth')

  //  Toogle nav
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active')

    //  Anitame links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ''
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`
      }
    })
    //   Burger animation
    burger.classList.toggle('is-active')
  })

  // service 1
  btn1.addEventListener('click', () => {
    if (firstText.style.display) {
      // serviceTitle.style.fontWeight = ''
      firstText.style.display = ''
      btn1.style.transform = ''
    } else {
      // secondText.style.display = 'none'
      // thirdText.style.display = 'none'
      // fourthText.style.display = 'none'
      firstText.style.display = 'block'
      firstText.style.opacity = 1
      btn1.style.transform = 'rotate(90deg)'
      // serviceTitle.style.fontWeight = '900'
    }
  })
  // service 2
  btn2.addEventListener('click', () => {
    if (secondText.style.display) {
      // serviceTitle.style.fontWeight = ''
      secondText.style.display = ''
      btn2.style.transform = ''
    } else {
      secondText.style.display = 'block'
      secondText.style.opacity = 1
      btn2.style.transform = 'rotate(90deg)'
      // serviceTitle.style.fontWeight = '900'
    }
  })
}

navSlide()
