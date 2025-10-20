// Load saved theme preference on page load
function loadTheme() {
  const savedTheme = localStorage.getItem('theme')
  const html = document.documentElement
  const img = document.querySelector('#profile img')

  if (savedTheme === 'light') {
    html.classList.add('light')
    img.setAttribute('src', './assets/avatar-light.jpg')
  } else {
    html.classList.remove('light')
    img.setAttribute('src', './assets/avatar-dark.jpg')
  }
}

// Toggle between light and dark mode
function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  // Get the img tag
  const img = document.querySelector('#profile img')

  // Replace the image
  if (html.classList.contains('light')) {
    // If light mode, add light image
    img.setAttribute('src', './assets/avatar-light.jpg')
    localStorage.setItem('theme', 'light')
  } else {
    // If not light mode, keep dark image
    img.setAttribute('src', './assets/avatar-dark.jpg')
    localStorage.setItem('theme', 'dark')
  }
}

// Handle keyboard navigation for theme switch
function handleSwitchKeydown(event) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    toggleMode()
  }
}

// Initialize theme on page load
loadTheme()
