document.addEventListener('DOMContentLoaded', _ => {
  const obfLinks = document.querySelectorAll('[data-obflink]')

  obfLinks.forEach((link) => {
    const handleNavigation = (event) => {
      const {obflink} = link.dataset
      const decodedLink = decodeURIComponent(escape(window.atob(obflink)))

      if ((event.type === 'click') || (event.type === 'keydown' && event.key === 'Enter')) {
        if (event.ctrlKey || event.type === "keydown" && event.shiftKey) {
          event.preventDefault()
          const newWindow = window.open(decodedLink, '_blank')
          newWindow.focus()
        } else {
          event.preventDefault()
          document.location.href = decodedLink
        }
      }
    }

    link.addEventListener('click', handleNavigation)
    link.addEventListener('keydown', handleNavigation)
  })
})