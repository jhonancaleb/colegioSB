let bar=document.querySelector('.nav__navbar');
let nav=document.querySelector('.nav');

function mostrar(){
   nav.classList.toggle('show');
}

bar.onclick=mostrar;
