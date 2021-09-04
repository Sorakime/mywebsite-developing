document.getElementsByTagName('head')[0].innerHTML=`
  ${document.getElementsByTagName('head')[0].innerHTML}
  <link rel="stylesheet" href="/mncr/project/mncrStore/main.css">
`
window.onload=()=>{
  document.body.innerHTML=`
  ${document.body.innerHTML}
    <copy-right>
      <small>Copyright 2021 Sorakime All rights reserved.</small>
    </copy-right>
  `
}
