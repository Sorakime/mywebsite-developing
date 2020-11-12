if (location.search) {
  const win=location.search.split('=').slice(-1)[0];
  document.getElementsByTagName('view-1')[0].innerHTML='v.'+win;
  document.getElementsByTagName('title')[0].innerHTML='monochrome. License'+win+' - monochrome Project. - SmncrS';

}
