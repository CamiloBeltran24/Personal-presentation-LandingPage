window.addEventListener('load', function () {
  getScrollPosition();
  sublistVisibility();
});

//Funcion para agregar una clase a un elemento HTML
function addClass(element, myClass) {
  if (!element.classList.contains(myClass)) {
    element.classList.add(myClass);
  }
}
//Fin de la funcion

function isSublist(element, myClass = 'navigation__sublist') {
  if (element.classList.contains(myClass)) {
    return true;
  } else {
    return false;
  }
}

//Funcion para remover clases de un elemento HTML
function removeClass(element, myClass) {
  if (element.classList.contains(myClass)) {
    element.classList.remove(myClass);
  }
}
//Fin de la funcion

//Funcion para detectar cuando se hace scroll en la pagina web
function getScrollPosition() {
  window.onscroll = function () {
    let scrollPosition = window.scrollY;
    if (scrollPosition > 80) {
      addClass(document.querySelector('.header'), 'internal');
    } else {
      removeClass(document.querySelector('.header'), 'internal');
    }
  };
}
//Fin de la funcion

//Funcion para mostrar el subnav del navigation
function sublistVisibility() {
  let navigationItems = document.querySelectorAll('.navigation__list--item');
  navigationItems.forEach((item) => {
    item.addEventListener('mouseover', () => {
      // console.log(item.firstElementChild);
      if (item.firstElemenetChild !== null) {
        let sublist = item.firstElementChild;
        console.log(sublist);
        let newList = isSublist(sublist);
        if (newList) {
          sublist.classList.toggle('visible');
        }
      }
    });
    item.addEventListener('mouseout', () => {
      if (item.firstElemenetChild !== null) {
        let sublist = item.firstElementChild;
        console.log(sublist);
        let newList = isSublist(sublist);
        if (newList) {
          sublist.classList.toggle('visible');
        }
      }
    });
  });
}
//Fin de la funcion
