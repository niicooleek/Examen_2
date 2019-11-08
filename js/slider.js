var contenedor = document.getElementById("testimoniales");
var nav = document.getElementById("nav");
var slideActual = 0;

function init() {
  definirAnchoDeSlider();
  testimoniales.forEach(renderearTestimonial);
  testimoniales.forEach(agregarNavItem);
  ajustarSlider();
}

function definirAnchoDeSlider() {
  var cantidad = testimoniales.length + 1;
  var anchoVentana = window.innerWidth;
  contenedor.style.width = cantidad * anchoVentana + "px";
}

function renderearTestimonial(testimonial) {
  contenedor.insertAdjacentHTML('beforeend',
    `
    <div class="contenedor">
      <blockquote class="testimonial">
        `+ testimonial.testimonio + `
        <footer class="testimonial-footer">
            — <cite class="author">`+ testimonial.autor + `</cite>, <cite class="company">` + testimonial.puesto + `</cite>
        </footer>
      </blockquote>
    </div>
    `
  );
}

function slideSiguiente() {

}

function slidePrevio() {

}

function irASlide(slide) {

}

function ajustarSlider() {
  var anchoVentana = window.innerWidth;
  contenedor.style.marginLeft = anchoVentana * slideActual * -1 + 'px';
  ajustarFlechas();
  ajustarNav();
}

function ajustarFlechas() {

}

function agregarNavItem(item, index) {
  nav.insertAdjacentHTML('beforeend', '<div class="nav-item" onClick="irASlide(' + index + ')" />');
}

function ajustarNav() {
  navItems = document.getElementsByClassName('nav-item');
  Array.from(navItems).forEach(function (item) {
    item.classList.remove('activo');
  });
  if (navItems[slideActual]) {
    navItems[slideActual].classList.add('activo');
  }
}

window.addEventListener('resize', function () {
  definirAnchoDeSlider();
  ajustarSlider();
});

init();
