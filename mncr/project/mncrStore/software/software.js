var os=window.navigator.userAgent
//init
var software={
  title: document.getElementsByTagName('title')[0].innerText.substring(0, document.getElementsByTagName('title')[0].innerText.lastIndexOf('-')-1),
}
window.init=(obj)=>{
  software.version=obj.ver;
  software.summary=obj.summary;
  software.os=obj.os;
  if(obj.beta){
    software.isBeta=obj.beta;
  }else{
    software.isBeta=false;
  }
}

function status(){
  if(software.isBeta==true){
    return `<span>Beta</span>`;
  }else{
    return ``;
  }
}
function isDownloadable(os){
  software.os.forEach((i,item)=>{
    if(os==item)
      return true;
  })
}
function dlButton(){
  if(isDownloadable()==true){
    return 'ダウンロード';
  }else{
    return 'ダウンロードできません';
  }
}
function extensions(){
  switch (os) {
    case 'windows':
      return 'exe';
      break;
    case 'mac':
      return 'dmg';
      break;
    default:

  }
}

//add element
window.onload=()=>{
  // in <header>
  document.getElementsByTagName('head')[0].innerHTML=`
  ${document.getElementsByTagName('head')[0].innerHTML}
  <link rel="stylesheet" href="../software.css">
  <link rel="stylesheet" href="../../main.css">
  <meta name="viewport" content="width=device-width, initial-scale=1">`;

  // in <body>
  document.body.innerHTML=`
  <header>
    <div id="icon"></div>
    <div>
      <h1>${software.title} ${status()}</h1>
      <h3>${software.version}</h3>
      <p>${software.summary}</p>
    </div>
    <div id="download"><span>${dlButton()}</span></div>
  </header>
  ${document.body.innerHTML}`;

  //in <div #description>
  document.getElementById('description').innerHTML=`
  ${software.summary}<br>
  ${document.getElementById('description').innerHTML}`;
  document.getElementsByTagName('header')[0].getElementsByTagName('div')[0].style.backgroundImage=`url('../../icons/${software.title.toLowerCase()}.png')`;

  //for <body>
  document.body.innerHTML=`
  ${document.body.innerHTML}
  <copy-right>
    <small>Copyright 2021 Sorakime All rights reserved.</small>
  </copy-right>`;
  document.getElementById('version').innerText=software.version;

  document.getElementsByTagName('download').getElementsByTagName('span')[0].addEventListener('click',()=>{
    window.open(`./${software.name.toLowerCase()}${software.ver.replace(/ /,'')}.${extensions()}`);
  })
}
