function switchTabs(current) {
 if(current == 'portfolio') {
  document.getElementById('portfolio').classList.add('hidden');
  document.getElementById('about').classList.remove('hidden')
  document.getElementById('about-text').classList.add('selected')
  document.getElementById('portfolio-text').classList.remove('selected')
 } else {
  document.getElementById('portfolio').classList.remove('hidden');
  document.getElementById('about').classList.add('hidden')
  document.getElementById('portfolio-text').classList.add('selected')
  document.getElementById('about-text').classList.remove('selected')
 }
}