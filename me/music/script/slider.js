let listbtn=document.createElement('div');
listbtn.appendChild(document.createElement('a'));
document.addEventListener('DOMContentLoaded',()=>{
  document.getElementsByTagName('slide-wrapper')[0].appendChild(listbtn);
  document.getElementsByTagName('slide-wrapper')[0].getElementsByTagName('div')[0].setAttribute('onclick','moveslider()');
});

function moveslider() {
  document.querySelector('slide-wrapper p:not([data-hide-slider])')[0].setAttribute('data-temp-slider');
  document.querySelector('slide-wrapper p[data-hide-slider]')[0].removeAttribute('data-hide-slider');
  document.querySelector('slide-wrapper p[data-temp-slider]')[0].setAttribute('data-hide-slider');
  document.querySelector('slide-wrapper p[data-temp-slider]')[0].removeAttribute('data-temp-slider');
}
