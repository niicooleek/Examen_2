<?php include 'header.php'; ?>

<div class="admin bg-light">
  <a href="index.php" class="admin-icon"><i class="fas fa-home"></i></a>
  <form method="post" action="agregar.php" class="form">
    <textarea name="testimonio" placeholder="Testimonio"></textarea>
    <input type="text" name="autor" placeholder="Nombre Completo" autocomplete="off" />
    <input type="text" name="puesto" placeholder="Puesto y/o Empresa" autocomplete="off" />
    <button type="submit">Agregar Testimonial</button>
  </form>
  <hr />
  <div class="testimonial-grid" id="grid"></div>
</div>

<?php include 'testimoniales.php'; ?>

<script src="js/admin.js"></script>

<?php include 'footer.php'; ?>
