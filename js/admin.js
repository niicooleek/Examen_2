var grid = document.getElementById('grid');

function cargarTestimoniales() {
  testimoniales.forEach(agregarTestimonial);
}

function agregarTestimonial(testimonial) {
  grid.insertAdjacentHTML('beforeend', `
    <div class="grid-item">
    <div class="delete-container">
      <i onClick="eliminarTestimonio(`+ testimonial.id + `)" class="fas fa-times delete"></i></div>
    <blockquote class="grid-item-testimonial">
      `+ testimonial.testimonio + `
      <footer class="grid-item-footer">
          — <cite class="author">`+ testimonial.autor + `</cite>, <cite>` + testimonial.puesto + `</cite>
      </footer>
    </blockquote>
  </div>
  `);
}

function eliminarTestimonio(id) {
  window.location.assign('eliminar.php?id=' + id)
}

cargarTestimoniales();
