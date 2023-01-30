window.onload = function () {
  const favicon = document.getElementById('favicon')
  const pageTitle = document.title
  const attentionMessage = 'Come back'

  document.addEventListener('visibilitychange', function (e) {
    const isPageActive = !document.hidden
    toggle(isPageActive)
  })

  function toggle(isPageActive) {
    if (isPageActive) {
      document.title = pageTitle
      favicon = './assets/images/logo.png'
    } else {
      document.title = attentionMessage
      favicon = './assets/images/logo.png'
    }
  }
}
