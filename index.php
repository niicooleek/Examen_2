<?php include 'header.php'; ?>

<div class="slider">
  <div id="testimoniales" class="testimoniales"></div>
  <div class="flechas">
    <div class="area area-left" onClick="slidePrevio()" id="flechaIzquierda">
      <i class="fas fa-angle-left"></i>
    </div>
    <div class="area area-right" onCLick="slideSiguiente()" id="flechaDerecha">
      <i class="fas fa-angle-right"></i>
    </div>
  </div>
  <div class="nav" id="nav"></div>
  <a href="admin.php" class="admin-icon"><i class="fas fa-cog"></i></a>
</div>

<?php include 'testimoniales.php'; ?>

<script src="js/slider.js"></script>

<?php include 'footer.php'; ?>
