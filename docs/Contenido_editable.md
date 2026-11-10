Desarrollo de una interfaz web responsiva para el restaurante Raíz

Samuel Andres Delgado Urrego

Universidad Manuela Beltrán

Ingeniería Web I

8 de noviembre de 2026


---


Introducción

El presente trabajo desarrolla una interfaz web responsiva para Raíz, un restaurante ficticio de cocina de temporada. La propuesta permite consultar una carta, conocer el concepto del establecimiento y completar una reserva demostrativa. El proyecto responde a la actividad de desarrollo de una interfaz web responsiva mediante una solución funcional construida con HTML5, CSS3 y JavaScript, acompañada de evidencias de funcionamiento y documentación técnica.

El problema de diseño consiste en presentar la misma información de forma comprensible en computador, tableta y teléfono móvil. Una composición amplia no puede trasladarse directamente a una pantalla pequeña sin revisar las columnas, los espacios, la navegación y las dimensiones de los controles. Por ello, el proyecto adopta una estrategia Mobile First y combina unidades flexibles, CSS Grid, Flexbox y consultas de medios.

El resultado es un sitio estático que funciona con recursos locales y no requiere bibliotecas externas. Las pruebas verifican su adaptación a ocho anchos de pantalla y el comportamiento de sus interacciones. La reserva es una simulación explícita: valida entradas y muestra un resumen, pero no almacena datos, no envía correos y no confirma disponibilidad comercial.

Objetivo general

Desarrollar una interfaz web semántica, coherente y responsiva para consultar la oferta de un restaurante y simular una reserva, conservando la legibilidad y la navegación en computador, tableta y teléfono móvil.

Objetivos específicos

Organizar el contenido mediante elementos semánticos de HTML5; aplicar un sistema visual consistente con CSS3; reorganizar la interfaz con Grid, Flexbox y Media Queries; incorporar interacciones accesibles; y comprobar el resultado mediante pruebas y evidencias reproducibles.


---


Desarrollo

Escenario y requisitos de la interfaz

El público previsto está compuesto por personas que desean explorar platos y planear una visita desde diferentes dispositivos. El recorrido principal comienza con la presentación de Raíz, continúa con la consulta de la carta y termina en el formulario. El nombre, los platos, el horario y los precios forman parte de un escenario académico; no describen un negocio real ni una oferta comercial vigente.

La página reúne cinco secciones: inicio, carta, propuesta de cocina, información de visita y reserva. El encabezado contiene la marca y el menú; el pie incluye la autoría y un enlace para regresar al inicio. Se evita pedir una cuenta o datos de pago porque esas funciones exceden el objetivo de una interfaz introductoria. Los datos de prueba del formulario se mantienen únicamente en la página abierta.

Fundamentos del diseño responsivo

El diseño responsivo permite ajustar una página a distintos tamaños de pantalla mediante composiciones flexibles. Las consultas de medios activan reglas cuando se cumplen condiciones del dispositivo o del área de visualización. Mobile First parte de una composición pequeña y agrega cambios conforme aumenta el espacio disponible (MDN Web Docs, s. f.-d). En Raíz, el orden móvil constituye la base de lectura y los puntos de cambio responden a la distribución del contenido.

Flexbox facilita organizar elementos en una dimensión, mientras que Grid permite distribuirlos en filas y columnas (MDN Web Docs, s. f.-a, s. f.-b). El proyecto utiliza Flexbox en grupos de acciones y navegación, y Grid en la carta, la presentación y el formulario. La combinación permite resolver necesidades distintas sin duplicar el contenido HTML.

La semántica aporta significado a las regiones del documento y distingue encabezados, navegación, contenido principal y pie de página (MDN Web Docs, s. f.-c). Este criterio se incorpora desde la estructura, en lugar de depender exclusivamente de contenedores genéricos.


---


Estructura semántica de HTML5

El archivo index.html declara el idioma español mediante lang="es", la codificación UTF-8 y la etiqueta viewport con width=device-width e initial-scale=1. La codificación conserva correctamente las tildes; el idioma informa a las tecnologías de asistencia; y el viewport hace que el ancho de diseño corresponda al área disponible del dispositivo.

El elemento header contiene el identificador visual y un nav con nombre accesible. Los enlaces internos apuntan a identificadores existentes: carta, nosotros, visita y reserva. El botón móvil identifica el menú que controla mediante aria-controls y comunica su estado con aria-expanded. Antes del encabezado se incluye un enlace de salto que permite llegar directamente al contenido con el teclado.

El elemento main delimita el contenido central. Cada section posee un encabezado asociado; el h1 presenta la propuesta principal y los h2 organizan las secciones. La carta utiliza cuatro elementos article, uno por plato, con imagen, nombre, descripción y precio. Las imágenes se agrupan con el contenido al que pertenecen y cuentan con textos alternativos que las identifican como ilustraciones.

La presentación usa figure y figcaption para relacionar la imagen principal con su leyenda. El formulario utiliza label, input, select y button. Las preguntas frecuentes se implementan mediante details y summary, que ofrecen una interacción desplegable nativa. El footer cierra el documento con la autoría y el retorno al inicio.

Separación de responsabilidades

La estructura se mantiene en index.html, la apariencia en css/styles.css y la interacción en js/app.js. Las cuatro ilustraciones SVG se almacenan en img. Esta organización facilita localizar cambios y revisar el proyecto en Git. El script se carga con defer para ejecutar su lógica después de analizar el documento, sin bloquear la construcción inicial del contenido.


---


Diseño visual y estilos CSS3

El sistema visual utiliza un fondo crema (#F7F4EB), texto verde oscuro (#233C2E), un acento terracota (#B74326) y superficies claras (#FFFDF6). Las variables de CSS concentran estos valores y permiten mantener consistencia. El acento identifica detalles de marca y acciones relevantes; los bordes discretos separan regiones sin añadir ruido visual.

Georgia se emplea en titulares para dar carácter editorial y Arial en el cuerpo y los controles para favorecer una lectura directa. Ambas familias tienen alternativas locales, de modo que la página no depende de la descarga de fuentes. El tamaño del título principal usa clamp() con límites mínimo y máximo para variar de manera gradual. La altura de línea del cuerpo es 1.6 y los párrafos se mantienen alineados a la izquierda.

El contenedor principal tiene un máximo de 1160 píxeles. En pantallas pequeñas su ancho es el disponible menos 40 píxeles, lo que deja 20 píxeles por lado. A partir de 640 píxeles se reserva un margen lateral de 32 píxeles. Esta decisión conserva espacio de lectura en el móvil y evita que el contenido se extienda excesivamente en monitores amplios.

Las imágenes son ilustraciones vectoriales originales creadas para el proyecto, no fotografías de alimentos reales. Su formato SVG conserva nitidez al cambiar de tamaño. La regla max-width: 100% evita que excedan su contenedor; height: auto conserva la relación de aspecto cuando no hay un recorte intencional. La imagen principal y las tarjetas aplican aspect-ratio y object-fit: cover para sostener una composición uniforme.

Los botones tienen dimensiones táctiles amplias y estados visuales diferenciados. El foco se señala mediante un contorno de tres píxeles; no se elimina la identificación del elemento activo. Las tarjetas usan fondos claros y separación suficiente entre nombre, descripción y acción. La carga diferida de las imágenes secundarias reduce trabajo inicial del navegador, mientras la imagen principal se solicita de inmediato.


---


Estrategia Mobile First y puntos de cambio

La hoja de estilos comienza con una sola columna. En este estado, el texto principal precede a la imagen, la carta apila sus tarjetas y los campos del formulario ocupan todo el ancho disponible. El menú se despliega mediante un botón cuando JavaScript está activo. Sin JavaScript, sus enlaces permanecen visibles para conservar la navegación.

Tableta desde 640 píxeles

La consulta @media (min-width: 640px) organiza la carta en dos columnas con repeat(2, minmax(0, 1fr)). El formulario también utiliza dos columnas: fecha y hora comparten una fila, mientras nombre, correo y número de personas abarcan ambas mediante grid-column: 1 / -1. La presentación conserva su orden vertical para que el texto y la imagen no compitan por un ancho insuficiente.

Computador desde 1024 píxeles

La consulta @media (min-width: 1024px) reemplaza el botón móvil por una navegación horizontal. La presentación distribuye texto e imagen en dos columnas; la explicación de la cocina y la región de visita adoptan igualmente composiciones paralelas. La carta conserva dos columnas deliberadamente: esta cantidad ofrece espacio para descripciones y acciones, aunque el monitor permita acomodar más tarjetas.

Prevención del desbordamiento

La regla global box-sizing: border-box incorpora borde y relleno al cálculo del ancho. Los elementos de Grid usan minmax(0, 1fr), y los controles del formulario tienen min-width: 0 y width: 100%. Flexbox permite envolver los filtros y las acciones con flex-wrap. Los textos de confirmación admiten saltos en cadenas largas mediante overflow-wrap: anywhere. No se ocultan errores de anchura mediante overflow-x: hidden en el documento.

También se respeta prefers-reduced-motion: reduce, que desactiva el desplazamiento suave. Los puntos de cambio se verificaron a ambos lados de sus límites: 639 y 640 píxeles, y 1023 y 1024 píxeles. Así se revisa la transición efectiva entre reglas, además de tres resoluciones representativas.


---


Interacción y accesibilidad

Navegación y filtros

El botón de menú alterna una clase que controla la visibilidad de los enlaces y actualiza aria-expanded. Elegir una sección cierra el menú. La tecla Escape también lo cierra y devuelve el foco al botón. Al cambiar al punto de diseño de computador se restablece el estado, evitando conservar un despliegue móvil incoherente.

Los filtros muestran todos los platos, entradas, principales o postres. Cada tarjeta declara su categoría en data-category, y cada botón su filtro en data-filter. JavaScript compara esos valores y modifica el atributo hidden de las tarjetas. aria-pressed identifica el filtro activo y una región con role="status" anuncia la cantidad de resultados. Los filtros no recargan la página ni modifican los datos originales.

Formulario demostrativo

Cada campo tiene una etiqueta visible asociada a su identificador, práctica que ayuda a reconocer el dato solicitado y a relacionarlo con su control (World Wide Web Consortium [W3C], s. f.). Se incluyen nombre, correo, fecha, hora y número de personas. Los atributos required, type="email", minlength y maxlength aportan restricciones nativas, complementadas por validaciones en JavaScript.

La fecha mínima se calcula con el calendario local del navegador. Se rechazan días pasados y lunes, porque el escenario indica cierre semanal. El nombre se valida después de retirar espacios al principio y al final. Un envío válido produce un resumen mediante textContent, de manera que los datos no se interpretan como HTML. Al editar un campo se elimina el resumen anterior para no mostrar una confirmación desactualizada.

El aviso de simulación se presenta antes del envío y en el resultado. El sistema no gestiona reservas reales: no tiene servidor, base de datos ni verificación de cupos. Si se desarrollara una versión comercial, esas operaciones requerirían validación del lado del servidor y reglas de disponibilidad. Las preguntas frecuentes usan controles nativos que también pueden accionarse con teclado.


---


Pruebas y resultados

La verificación se ejecutó sobre el sitio servido localmente en Microsoft Edge basado en Chromium, utilizando tamaños de viewport emulados. No se utilizaron teléfonos ni tabletas físicos. El registro resultados-pruebas.json conserva la versión del navegador, la fecha técnica y el resultado de cada comprobación. Las capturas completas se incluyen en la carpeta evidencias y las figuras siguientes muestran vistas representativas.

Se realizaron 36 comprobaciones automatizadas y todas fueron aprobadas. En los anchos 320, 390, 639, 640, 768, 1023, 1024 y 1440 píxeles, el ancho desplazable del documento no superó el viewport y todas las imágenes cargaron. En 1440 × 900 se observó navegación horizontal y presentación en dos columnas; en 768 × 1024, carta de dos columnas y presentación vertical; en 390 × 844, navegación plegable y carta de una columna.

Las pruebas de interacción verificaron apertura del menú, cierre con Escape y retorno del foco, y cierre al elegir un enlace. Los filtros produjeron un resultado para entradas, dos para principales, uno para postres y cuatro para toda la carta. También se comprobó la apertura de una pregunta frecuente, la existencia de destinos para todos los enlaces internos y la asociación de etiquetas en todos los campos.

El formulario rechazó fecha pasada, lunes, correo inválido y nombre compuesto solamente por espacios. Con datos válidos mostró el resumen esperado; al cambiar el número de personas lo eliminó. El enlace de salto respondió al teclado. No se registraron excepciones de JavaScript durante la ejecución, y la navegación y las cuatro tarjetas permanecieron disponibles al desactivar JavaScript.

La inspección visual complementó estas mediciones para revisar lectura, márgenes y posición de los controles. El resultado no constituye una certificación integral de accesibilidad ni demuestra compatibilidad con todos los navegadores. Quedan como ampliación pruebas físicas en iOS y Android y revisión con lectores de pantalla.


---


Análisis comparativo y mejoras

En computador, la disponibilidad horizontal permite presentar la propuesta y el plato principal simultáneamente. El menú completo reduce los pasos necesarios para acceder a cada sección. En tableta se prioriza una lectura vertical de la introducción y se aprovecha el espacio intermedio con dos tarjetas por fila. En móvil, una sola tarjeta por fila evita comprimir las descripciones, mientras los filtros pasan a varias líneas según el ancho.

El formulario cambia de una columna a dos únicamente cuando existe espacio suficiente. Esta decisión mantiene juntos fecha y hora en tableta y computador sin reducir excesivamente el campo de fecha en móvil. Los botones conservan un área de interacción amplia y los textos mantienen su contenido en todos los tamaños; no se elimina información para conseguir que el diseño encaje.

La prevención de problemas se incorporó durante la implementación: se evitó un ancho fijo de página, se permitió que los grupos de botones envolvieran su contenido y se redujo el tamaño mínimo implícito de las columnas. También se añadió cierre con Escape y limpieza del resumen para mejorar la navegación y evitar mensajes inconsistentes. Las comprobaciones finales no detectaron defectos de desbordamiento en las resoluciones evaluadas; por ello no se atribuyen al proceso fallas que no fueron observadas.

Mejoras propuestas para una siguiente versión

La primera mejora sería conectar el formulario a un servicio que consulte disponibilidad real y emita una confirmación verificable. La segunda sería sustituir o complementar las ilustraciones con fotografías autorizadas y versiones optimizadas para distintas densidades. La tercera sería probar el recorrido con usuarios y tecnologías de asistencia para identificar dificultades que una comprobación automática no descubre.

Estas ampliaciones deben conservar la estructura semántica y el orden de lectura. Su prioridad depende de la finalidad del sitio: para el alcance académico actual, la consulta de la carta, la adaptación a resoluciones y la interacción local cumplen la función prevista. Para una operación comercial, la gestión real de reservas sería indispensable.


---


Evidencia en computador

<b>Figura 1</b>

Vista inicial en computador a 1440 × 900 píxeles

<i>Nota.</i> Captura de la aplicación en Microsoft Edge. Se aprecia la navegación horizontal y la presentación en dos columnas. Elaboración propia.

El ancho del contenido permaneció dentro del viewport. El texto conserva una medida de lectura limitada y la imagen ocupa la segunda columna sin superponerse con las acciones. La captura completa computador.png permite revisar también carta, formulario y pie de página.


---


Evidencia en tableta

<b>Figura 2</b>

Vista inicial en tableta a 768 × 1024 píxeles

<i>Nota.</i> Viewport emulado. La introducción y la imagen se apilan, y la navegación se controla con el botón Menú. Elaboración propia.

En esta resolución, la carta y los campos compatibles del formulario se distribuyen en dos columnas. La evidencia completa se conserva en tableta.png.


---


Evidencia en teléfono móvil

<b>Figura 3</b>

Vista inicial en móvil a 390 × 844 píxeles

<i>Nota.</i> Viewport emulado. El contenido mantiene una sola columna y las acciones se reorganizan verticalmente. Elaboración propia.

El ancho desplazable fue igual al disponible. El menú se abre mediante el botón superior y la carta presenta una tarjeta por fila. La imagen completa se conserva en movil.png.


---


Evidencia de interacción

<b>Figura 4</b>

Resumen de una reserva de prueba en móvil

<i>Nota.</i> Captura posterior al envío válido con datos de ejemplo. El mensaje aclara que no se enviaron ni guardaron datos y que no existe una reserva real. Elaboración propia.

El video validacion-responsiva.webm presenta una secuencia de capturas reales de las pruebas, con rótulos explicativos, incluyendo menú abierto, filtro, formulario y pregunta desplegable. No es una grabación continua ni contiene narración de voz.


---


Conclusiones

El proyecto materializó una interfaz funcional organizada con HTML5, estilizada con CSS3 y complementada con JavaScript. La separación entre contenido, presentación e interacción facilita comprender el código y mantenerlo. La estructura semántica y las etiquetas de formulario aportan una base clara para navegar y reconocer la función de cada región.

La estrategia Mobile First permitió establecer primero una experiencia legible en pantallas pequeñas y ampliar la distribución en dos puntos de cambio. Grid resultó apropiado para regiones con filas y columnas, mientras Flexbox resolvió la navegación y los grupos de acciones. La adaptación se logró sin duplicar el contenido ni ocultar desplazamientos horizontales mediante reglas que pudieran encubrir errores.

Las 36 comprobaciones aprobadas respaldan el funcionamiento del proyecto dentro del entorno evaluado. La revisión de ocho anchos, incluidos los límites de las consultas de medios, ofrece evidencia más precisa que comprobar únicamente tres capturas. Los resultados deben interpretarse dentro de su alcance: una emulación de viewport no sustituye pruebas en dispositivos físicos ni una auditoría completa de accesibilidad.

Las interacciones agregan utilidad al sitio: los filtros facilitan explorar la carta, el menú permite navegar en móvil y el formulario verifica entradas antes de mostrar un resumen. Al identificar expresamente la reserva como demostrativa, la interfaz evita comunicar una operación comercial que no realiza. Una siguiente etapa podría incorporar disponibilidad real y validación del lado del servidor.

En conjunto, el desarrollo demuestra que una interfaz responsiva requiere decisiones coordinadas sobre contenido, semántica, distribución, interacción y verificación. El resultado académico permite recorrer esas decisiones y relacionarlas con archivos concretos, capturas de funcionamiento y un registro de pruebas.


---


Referencias

American Psychological Association. (s. f.). <i>Sample student paper annotated</i> [PDF]. https://apastyle.apa.org/style-grammar-guidelines/paper-format/student-annotated.pdf

MDN Web Docs. (s. f.-a). <i>CSS flexible box layout</i>. https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Flexible_box_layout

MDN Web Docs. (s. f.-b). <i>CSS grid layout</i>. https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout

MDN Web Docs. (s. f.-c). <i>HTML elements reference</i>. https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements

MDN Web Docs. (s. f.-d). <i>Responsive web design</i>. https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design

World Wide Web Consortium. (s. f.). <i>Labeling controls</i>. Web Accessibility Initiative. https://www.w3.org/WAI/tutorials/forms/labels/


---


Apéndice A

Organización y reproducción del proyecto

El directorio raíz contiene index.html y las carpetas css, img, js, docs y evidencias. Estas reúnen, respectivamente, estilos, ilustraciones, interacciones, informe y pruebas. README.md explica la apertura del sitio y su publicación en Git.

Para ejecutar la página, se debe extraer el archivo comprimido y abrir index.html en un navegador moderno. Todos los recursos utilizados por la interfaz son locales. También puede servirse el directorio mediante un servidor estático para reproducir el entorno de pruebas. No se necesitan claves, cuentas, instalación de paquetes ni conexión a una base de datos.

Para repetir la validación manual, se abre la herramienta de diseño adaptable del navegador y se establecen las resoluciones 1440 × 900, 768 × 1024 y 390 × 844. En cada una se revisan encabezado, carta, formulario y pie de página. Luego se abre el menú móvil, se elige una sección, se alternan los filtros y se envían datos de prueba válidos e inválidos. El archivo de resultados permite contrastar el comportamiento observado con las comprobaciones realizadas.

El repositorio Git local conserva el proyecto y sus entregables. La publicación remota requiere un repositorio del estudiante y autorización de acceso a su cuenta. No se asigna un enlace público ficticio. Antes de entregar en el aula, se debe publicar o transferir este contenido al repositorio solicitado y verificar que el docente pueda acceder tanto al código como al PDF y al video.

El informe aplica márgenes de 2,54 cm, fuente Times New Roman de 12 puntos, interlineado doble, sangría inicial de 1,27 cm y numeración superior. Las referencias usan sangría francesa. Su presentación sigue el modelo de trabajo estudiantil de la American Psychological Association (s. f.). La portada conserva los datos de identificación suministrados.


---


Apéndice B

Guion de validación y socialización

Apertura. Presentar el proyecto como un restaurante ficticio e identificar la necesidad: consultar información y probar una reserva desde diferentes pantallas. Mostrar la organización del directorio y explicar la función de HTML, CSS y JavaScript. Aclarar que la aplicación es estática y que no gestiona reservas reales.

Comparación de resoluciones. Mostrar primero la vista de computador y reconocer sus dos columnas y navegación horizontal. Cambiar a tableta para observar la presentación vertical y la carta de dos columnas. Pasar a móvil para verificar el botón de menú, las tarjetas apiladas y los campos de ancho completo. Explicar los puntos de cambio en 640 y 1024 píxeles.

Interacciones. Abrir el menú, seleccionar La carta y comprobar el cierre. Activar Entradas, Principales y Postres para mostrar cómo cambia la cantidad de tarjetas. Regresar a Toda la carta. Abrir una pregunta frecuente y señalar que details y summary proporcionan ese comportamiento nativo.

Formulario. Ingresar datos de prueba, demostrar el rechazo de una fecha pasada y un lunes, y seleccionar una fecha permitida. Revisar el resumen generado y leer el aviso que aclara el carácter demostrativo. Modificar un dato para mostrar que el resumen previo se elimina. Evitar utilizar información personal real durante la exposición.

Cierre. Resumir los resultados de las 36 comprobaciones, mostrar el PDF y explicar las limitaciones de la emulación. Proponer como mejoras una prueba con dispositivos físicos y la incorporación futura de un servicio de reservas. El video adjunto recorre siete evidencias visuales; este guion permite ampliar la explicación durante la socialización.