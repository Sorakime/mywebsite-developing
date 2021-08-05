function view(id){
  document.querySelector(id).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}
