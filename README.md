# UI TESTS

Este repositorio fue creado para probar la interfaz de usuario de una libreria online.

## Banner tests
 
Primero hay un set up donde se visita la página

#### Loaded web-page state test
Se prueba que al cargar la página, el banner se encuentre abierto y tenga todos sus componentes.

#### Validate link test

Valida el link de la página.

#### Validate img src test

Valida la referencia de la imágen.

#### Closing banner tests

Valida que el banner cierre correctamente.


#### Oppening banner tests

Valida que el banner abra correctamente.

#### Link correctitude test

Se valida que el link del icono libreria lleve a una página.

#### Open overview on click test

Valida que del dashboard se abra el overview.

#### Close overview on click test

Valida que del dashboard se cierre el overview.

## Content tests

### Add tests

#### Loaded add state test

Valida que el boton add abra una ventana llamada Add Book con el boton save deshabilitado y el cancel habilitado.

#### Close add tab

No se puede validar el test ya que el boton de cerrar no funciona en la ventana de Add Book.

#### Not empty fields add

Valida que el add no agregue nada si los campos están vacios.

### Body tests

#### Loaded body state

Valida que los botones sean visibles.

#### Check all boxes

Valida que el boton de seleccionar todos los libros funcione.

#### Check single box 

Valida que se pueda seleccionar solo un libro.

### Delete tests

#### Delete all 

No se puede validar esta prueba ya que al cargar la página desaparece por un segundo el recuadro para seleccionar todos los libros.

#### Single delete

Valida que se seleccione correctamente un libro para ser borrado.

### Edit tests

#### Edit book

Valida que al editar un libro, cambie su contenido en la ui.

### Loaded edit state

No se puede validar esta prueba ya que al momento de editar, en la pestaña aparece agregar libro, no editarlo.

### Cancel edit button

Valida que se pueda cancelar la edición.

### Close edit tab

No se puede validar el test ya que el boton de cerrar no funciona en la ventana de Edit Book.

### Empty fields edit 

Valida que si los campos quedan vacios, no se pueda guardar la edición.