let today = new Date()

function init() {
  let today = new Date()
  const empty = document.getElementById('empty')
  const date = document.getElementById('date')
  date.textContent += today.toLocaleDateString()
}
init()
