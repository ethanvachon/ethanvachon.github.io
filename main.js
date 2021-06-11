function nav() {
  // const scroll = document.getElementById('body').scrollTop
  if(document.getElementById('body').scrollTop > 75) {
    document.getElementById('nav-items').classList.add('fixed')
  }
  if(document.getElementById('body').scrollTop < 75) {
    document.getElementById('nav-items').classList.remove('fixed')
  }
}