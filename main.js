function switchTabs(current) {
 if(current == 'portfolio') {
  document.getElementById('portfolio').classList.add('hidden');
  document.getElementById('about').classList.remove('hidden')
 } else {
  document.getElementById('portfolio').classList.remove('hidden');
  document.getElementById('about').classList.add('hidden')
 }
}