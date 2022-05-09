# Bienvenido al E-commerce proyecto final

Este proyecto se realizó a los fines de cumplir con todos los requisitos del proyecto final del curso de React perteneciente a la carrera de FrontEnd de CoderHouse

## Principales Funcionalidades

Este proyecto se monta sobre el sitio oficial realizado en el marco del curso inicial de Desarrollo Web de una profesional de la salud en el cúal se presento una Landing Page de la profesiona.

A partir de la idea de desarrollar una tienda on-line para comercializar distintos productos y servicios se utilizó la misma estructura visual y colores.

A continuación un breve repaso de los distintos componentes utilizados.

## General

Se utilizó la biblioteca Material UI para dar un estilo homogéneo a los distintos elementos que componen la App.

## NavBar

Se utilizó React-router-dom para conseguir la funcionalidad de movilidad entre páginas y de comportamiento por defecto.
Además permte realizar distintos filtros de productos con los diferentes botones discriminando entre "Planes", "Recetarios" y "Planes Integrales"

### ItemList

Se utilizó un condicional con formato Spinner para esperar la carga de los distintos productos y el componente Card de cada producto en la Base de Datos.

### Card

Recibe información a través del parámetro `data` y ensambla el componente Card con la información de cada producto.


### ItemDetail

En esta pantalla se presenta la información detallada y redistribuida del producto seleccionado con el componente ItemCount el cual agrega al Context Cart el producto seleccionado al dar "Agregar al carrito" y actualiza el CartWidget mostrando el número de cantidad de productos agregados.

## CartWidget

Este componente muestra los distintos productos seleccionados en la pantalla previa de ItemDetail, realiza una sumatoria y muestra el total actual permitiendo suprimir el producto que se desee y presenta un enlace "Finalizar la compra" el cuál lleva a la pantalla final para terminar la compra.

### Cart

Muestra la pantalla final donde se visualizan los distintos productos seleccionados permitiendo finalizar la compra presentando un modal para ingresar los datos de contacto y al seleccionar el botón "Enviar" devuelve un numero de Id de orden de pedido.

## Adicionales

Se agregó el botón "Sitio" enlazado al sitio oficial referido previamente para dar interconetcividad entre ambos elementos.