{
  const scroll = document.querySelector('.sidebar__scroll')
  const sidebar = document.querySelector('.sidebar')
  const sectionContainer = document.querySelector('.section__container')
  const sidebarMenu = document.querySelector('.sidebar__menu')

  sidebar.addEventListener('mouseover', () => {
    sidebarMenu.style.opacity = '0'
    scroll.style.right = '10px'
    sectionContainer.style.marginLeft = '140px'
  })

  sidebar.addEventListener('mouseout', () => {
    scroll.style.right = '-20px'
    sidebarMenu.style.opacity = '1'
    sectionContainer.style.marginLeft = '60px'
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

    const footer = document.querySelector('.footer')
    topOffset(footer) < 530
      ? (sidebar.style.display = 'none')
      : (sidebar.style.display = 'unset')
  })

  const backgroundToggle = (element, firstColor, secondColor) => {
    element.style.backgroundColor === firstColor
      ? (element.style.backgroundColor = secondColor)
      : (element.style.backgroundColor = firstColor)
  }

  const fontColorToggle = (element, firstColor, secondColor) => {
    element.style.color === firstColor
      ? (element.style.color = secondColor)
      : (element.style.color = firstColor)
  }

  const themeButton = document.querySelector('.header__button')

  themeButton.addEventListener('click', () => {
    const body = document.querySelector('.body')
    const header = document.querySelector('.header')
    const sidebarLinks = document.querySelectorAll('.sidebar__listLink')

    backgroundToggle(body, 'rgb(13, 0, 43)', 'rgb(255, 255, 255)')
    backgroundToggle(header, 'rgb(13, 0, 43)', 'rgb(255, 255, 255)')
    fontColorToggle(body, 'rgb(255, 255, 255)', 'rgb(0, 0, 0')

    themeButton.innerText === 'Jasny motyw'
      ? (themeButton.innerText = 'Ciemny motyw')
      : (themeButton.innerText = 'Jasny motyw')

    themeButton.style.right === '0px'
      ? (themeButton.style.right = 'unset')
      : (themeButton.style.right = '0px')

    sidebarLinks.forEach(function (sidebarLink) {
      fontColorToggle(sidebarLink, 'rgb(255, 255, 255)', 'rgb(138, 43, 226)')
    })
  })
}
