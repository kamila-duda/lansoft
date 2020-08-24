{
  const menuMobileButton = document.querySelector('.mobileMenu__button')
  const menuMobile = document.querySelector('.mobileMenu')
  menuMobileButton.addEventListener('click', () => {
    menuMobileButton.classList.toggle('mobileMenu__button--open')
    menuMobile.classList.toggle('mobileMenu--open')
  })
  menuMobile.addEventListener('click', () => {
    menuMobile.classList.toggle('mobileMenu--open')
    menuMobileButton.classList.toggle('mobileMenu__button--open')
  })

  const topOffset = element => {
    let positionOfElement = element.getBoundingClientRect()
    let positionOfTop = positionOfElement.top
    return positionOfTop
  }

  window.addEventListener('scroll', () => {
    const offerList = document.querySelector('.offer__list')
    const offerDescribe = document.querySelector('.offer__describe')
    if (topOffset(offerList) < 370) {
      offerList.style.opacity = '1'
      offerDescribe.style.opacity = '1'
      offerDescribe.style.transitionDelay = '0.5s'
    } else {
      offerList.style.opacity = '0'
      offerDescribe.style.opacity = '0'
      offerDescribe.style.transitionDelay = '0s'
    }

    const aboutUsImages = document.querySelector('.aboutUs__footer')
    topOffset(aboutUsImages) < 370
      ? (aboutUsImages.style.opacity = '1')
      : (aboutUsImages.style.opacity = '0')
  })

  const themeButton = document.querySelector('.header__button')

  themeButton.addEventListener('click', () => {
    themeButton.innerText === 'Jasny motyw'
      ? (themeButton.innerText = 'Ciemny motyw')
      : (themeButton.innerText = 'Jasny motyw')

    const body = document.querySelector('.body')
    const header = document.querySelector('.header')
    const sidebarLinks = document.querySelectorAll('.sidebar__listLink')

    body.classList.toggle('body--lightTheme')
    header.classList.toggle('header--lightTheme')
    themeButton.classList.toggle('header__button--lightTheme')

    sidebarLinks.forEach(function (sidebarLink) {
      sidebarLink.classList.toggle('sidebar__listLink--lightTheme')
    })
  })
}
