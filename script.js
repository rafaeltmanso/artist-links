function loadTheme() {
  const savedTheme = localStorage.getItem('theme')
  const html = document.documentElement
  const img = document.querySelector('#profile img')

  if (savedTheme === 'light') {
    html.classList.add('light')
    img.src = './assets/avatar-light.jpg'
  } else {
    html.classList.remove('light')
    img.src = './assets/avatar-dark.jpg'
  }
}

function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')
  const img = document.querySelector('#profile img')
  const isLight = html.classList.contains('light')

  img.src = `./assets/avatar-${isLight ? 'light' : 'dark'}.jpg`
  localStorage.setItem('theme', isLight ? 'light' : 'dark')
}

function handleSwitchKeydown(event) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    toggleMode()
  }
}

loadTheme()
