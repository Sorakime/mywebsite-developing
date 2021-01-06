let listbtn=document.createElement('div');
listbtn.appendChild(document.createElement('a'));
document.addEventListener('DOMContentLoaded',()=>{
  document.getElementsByTagName('slide-wrapper')[0].appendChild(listbtn);
  document.getElementsByTagName('slide-wrapper')[0].getElementsByTagName('div')[0].setAttribute('onclick','moveslider()');
});

function moveslider() {
  document.querySelector('slide-wrapper p[data-hide-slider]').setAttribute('data-temp-slider',''); //+data-hide-slieder + data-temp-slider
  document.querySelector('slide-wrapper p[data-temp-slider]').removeAttribute('data-hide-slider'); //+data-temp-slider
  document.querySelector('slide-wrapper p:not([data-temp-slider])').setAttribute('data-hide-slider',''); //~data-hide-slider
  document.querySelector('slide-wrapper p[data-temp-slider]').removeAttribute('data-temp-slider'); //
}
