window.onload=()=>{
  document.getElementsByTagName('body')[0].innerHTML=`${document.getElementsByTagName('body')[0].innerHTML}
  <small>Copyright 2021 Sorakime. Licensed by monochrome. License.</small>`;
  document.getElementsByTagName('span')[0].addEventListener('click',()=>{
    location.href='/mncr/';
  })
}
