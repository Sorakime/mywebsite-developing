function navopen() { //open navigation
  var navcts=document.getElementsByTagName('nav-cts')[0];
  document.getElementsByTagName('nav-btn')[0].setAttribute('onclick','navclose();');
  navcts.setAttribute('id','navbtn');
}
function navclose() { //close navigation
  var navcts=document.getElementsByTagName('nav-cts')[0];
  navcts.removeAttribute('id');
  document.getElementsByTagName('nav-btn')[0].setAttribute('onclick','navopen();');
}
document.getElementsByTagName('nav-btn')[0].setAttribute('onclick','navopen();');
