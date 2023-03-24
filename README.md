<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Miguel Ángel Yangüez</title>
    <link rel="stylesheet" type="text/css" href="css\estilo.css">
    <link rel="icon" type="image/png" href="archivos\code-solid.svg">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet">

</head>
<body>
    
    <div class="cuerpo">

        

        <div class="col foto">
            <img class="foto_perfil" 
            src="archivos\perfil.jpg" 
            alt="Foto de Perfil">
        </div>
        <div class="col nombre">
            <h1>Steven Walters</h1>
            <h2>Profesión</h2>
        </div>
        <div class="col contacto">
            <ul>
                <h2 id="contacto">Contacto</h2>
                <div id="lista">
                    <li>steven.walters@example.com</li>
                    <li>(810) 578-2321</li>
                    <li>3823 Stevens Creek Blvd</li>
                </div>
            </ul>
        </div>
        <div id="mas_sobre_mi" class="col otros_datos hidden_data visibilidad">
            <h3>Nacionalidad</h3>
            <p>Argentino</p>
            <h3>Fecha y Lugar de Nacimiento</h3>
            <p>4/3/1995</p>
            <p>La Pampa</p>
        </div>
        <button id="show1" class="boton">Más sobre mí</button>
        <button id="hide1" class="boton ocultar">Más sobre mí</button>
        <div id="experiencia_laboral" class="col experiencia hidden_data visibilidad">
            <h2>Experiencia Laboral</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed ullamcorper enim quis diam dictum tincidunt. 
                Vivamus tincidunt tellus pellentesque dolor dictum facilisis. 
                Aenean iaculis purus lorem, non placerat dui porttitor sed. 
                Sed neque purus, pharetra at mollis ac, dignissim ut felis. 
                Sed tortor elit, ornare malesuada rutrum quis, ornare eget massa. 
                Etiam ut eros eu dolor viverra ultrices eu sed lorem. 
                Nullam euismod vulputate ornare.</p>
        </div>
        <button id="show2" class="boton">Experiencia Laboral</button>
        <button id="hide2" class="boton ocultar">Experiencia Laboral</button>
        <div id="formacion_academica" class="col formacion hidden_data visibilidad">
            <h3>Formación</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed ullamcorper enim quis diam dictum tincidunt. 
                Vivamus tincidunt tellus pellentesque dolor dictum facilisis.</p>
        </div>
        <button id="show3" class="boton">Formación</button>
        <button id="hide3" class="boton ocultar">Formación</button>
    </div>
    <script src="js\acciones.js"></script>
</body>
</html>
