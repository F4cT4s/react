Proyecto de E-Commerce basado en la venta de luminaria Wi-Fi, utilizando como datos los productos de la marca Wiz.

La aplicacion esta conformada por 4 navlinks en los cuales se encuentra una vista general y las otras 3 separa por categoria de luminarias segun su forma de instalacion, consta de su cart solicitado y en la parte del footer encontramos el copyright de la marca y 3 links a sus redes originales de la marca.

Se agrego por fuera de lo solicitado un boton de "Volver al inicio", en el componente Item con la ruta ("/"), para poder regresar al shop. Tambien se agrego un boton "switch" en el componente checkout, con la finalidad de aceptar terminos y condiciones, y al aceptar renderiza el boton ¨Realizar compra¨ que en su estado previo es un boton en estado (disable) y muestra el mensaje ¨Aceptar Terminos y condiciones¨.
Por otro lado en el componente "Chekout" se agrego un input de "Direccion" y al realizar la compra se genera, ademas de un id de compra, un numero de Tracker para el usuario que este mismo es el mostrado en el componente "Closeinfo".

El proyecto tiene instalada la libreria "BootstrapSwitchButton", la cual se utiliza en el componente checkout, y es la que carga el boton de "Aceptar Terminos y Condiciones".

