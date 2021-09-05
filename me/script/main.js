function contents(which){
  if(which==true){
    document.body.getElementsByTagName('div')[0].setAttribute('id','opened');
    document.getElementsByTagName('header')[0].getElementsByTagName('h1')[0].getElementsByTagName('h4')[0].getElementsByTagName('a')[0].setAttribute('href','javascript:contents(false)');
  }else{
    document.body.getElementsByTagName('div')[0].removeAttribute('id')
    document.getElementsByTagName('header')[0].getElementsByTagName('h1')[0].getElementsByTagName('h4')[0].getElementsByTagName('a')[0].setAttribute('href','javascript:contents(true)');
  }
}
window.onload=()=>{
  document.getElementsByTagName('header')[0].getElementsByTagName('h1')[0].innerHTML=`
  ${document.getElementsByTagName('header')[0].getElementsByTagName('h1')[0].innerHTML}
  <h4><a href="javascript:contents(true)">Contents</a></h4>`;
}
