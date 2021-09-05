window.onload=()=>{
  document.getElementsByTagName('main')[0].innerHTML=`
  ${document.getElementsByTagName('main')[0].innerHTML}
  <p>
    <a href="/mncr/about">About</a>
    <a href="/mncr/project/">Projects</a>
  </p>`
  document.getElementsByTagName('body')[0].innerHTML=`${document.getElementsByTagName('body')[0].innerHTML}
  <small>Copyright 2021 Sorakime. Licensed by <a href="/mncr/license?v=1.1.1">monochrome. License.</a></small>`;
  document.getElementsByTagName('span')[0].addEventListener('click',()=>{
    location.href='/mncr/';
  })
}
