# Examen 2 - Slider de testimoniales

### Objetivos Generales:

Evaluar los conocimientos de PHP y Javascript aprendidos durante el curso. El alumno deberá de ser capaz de:
* Diseñar una base de datos según los requerimientos del ejercicio
* Crear una base de datos en el servidor utilizando PHPMyAdmin
* Obtener información de la base datos utilizando el lenguaje SQL
* Mostrar la información obtenida de la base de datos de una manera amigable en la interfáz del usuario
* Agregar información a la base de datos
* Eliminar información de la base de datos
* Aplicar los conocimientos de JS para implementar un slider y navegar los distintos recursos obtenidos de la base de datos

### Objetivo Práctico:

Generar un slider de testimoniales o frases con un administrador de contenido en donde el usuario podrá agregar o eliminar testimonios.

[Ve el demo aquí](http://macarenapoo.com/testimoniales/index.php)

![Slider Demo](images/Slider.gif "Demo")

### Evaluación

1. Crea una tabla en la base de datos que lleve tu nombre, ej: `macarena_testimoniales`
2. Crea los campos necesarios para poder guardar los testimoniales, cada testimonial lleva un párrafo, el autor y el rol o puesto del autor.
3. Agrega el código necesario al archivo `agregar.php` para que al enviar el formulario que se encuentra en `admin.php` se agregue la información en la tabla que creamos en el paso 1. Verifica que la información haya sido agregada correctamente en la interfáz de PHPMyAdmin.
4. Después de agregar el record a la tabla, redirecciona al usuario a `admin.php`
5. En el archivo `testimoniales.php` obten todos los records que existen en la tabla que creaste en el paso 1, y guárdalos en el arreglo `testimoniales` como un objeto con la siguiente forma: `{ id: 0, testimonio: '', autor: '', puesto: '' }`. 
Al finalizar este paso deberás ver el primer testimonial en `index.php` y todos los testimoniales listados en `admin.php`. Puedes navegar entre estas dos páginas con el ícono que se encuentra en la parte superior derecha de la pantalla.
6. Agrega el código necesario en el archivo `eliminar.php` para poder borrar un elemento de la base de datos. Recuerda que el id del testimonio vendrá en el url. No olvides redireccionar al usuario a `admin.php` después de este paso.
7. En el archivo `slider.js` en la función `ajustarSlider()` agrega el código necesario para mover el contenedor (`id="testimoniales"`) a la derecha o a la izquierda según el slide que esté activo.
8. Agrega el código necesario en `slideSiguiente()` y `slidePrevio` para actualizar el valor de `slideActual` y ajustar la posición del slider, de las flechas y del nav (puntitos para navegar).
9. Agrega el código necesario en `irASlide()` para que al hacer click en los puntos de navegación el usuario vaya al slide deseado.
10. Actualiza la función `ajustarFlechas()` esconder la flecha izquierda cuando el slider actual sea la primera slide, y esconder la flecha derecha cuando el slidera actual sea la última. Para esconder las flechas agrega la clase `hide` a cada flecha

### Entrega
1. Desarrolla tu examen en una rama en Github
2. Entrega un Pull Request de Github con tu trabajo final
3. Sube tu trabajo al servidor, ya funcionando con la base de datos
4. Envíanos un mail con el link a tu pull request y el link a tu trabajo en el servidor.
