// Llamar a los elementos que tengan la clase .list__button--click y modificar la altura del menu al hacer click
let listElements = document.querySelectorAll('.list__button--click');

listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=>{
        
        listElement.classList.toggle('arrow');

        let height = 0;
        let menu = listElement.nextElementSibling;
        if(menu.clientHeight == "0"){
            height=menu.scrollHeight;
        }
        menu.style.height = `${height}px`;
    })
});

// Llamar al boton para volver al inicio:
let mybutton = document.getElementById("myBtn");

// cuando el usuario scrolls hacia abajo 20px, aparecera el boton
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// cuando se haga click en el boton, se volvera a arriba
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}