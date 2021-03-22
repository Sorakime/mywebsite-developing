const win=location.search.split('=').slice(-1)[0];
const view=' v.'+win;
document.getElementsByTagName('view-1')[0].innerHTML=view;
document.getElementsByTagName('title')[0].innerHTML=`monochrome. License ${view} - monochrome Project. - SmncrS`;
