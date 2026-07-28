let titulo = document.getElementById('tituloDios');
let imagen = document.getElementById('imagenDios');
let texto = document.getElementById('textoDios');

let imagenes = {};
let datosCargados = false;

fetch("datos.json")
    .then(res => res.json())
    .then (data => 
    {
        data.forEach(item => 
        {
            imagenes[item.nombre] = item.ruta;
        });
        datosCargados = true;
    });


function diosRandom() 
{
    if(!datosCargados)
    {
        alert("Las imagenes aún se estan cargando");
        return;
    }

    const index = Math.floor(Math.random() * dioses.length);
    const dios = dioses[index];
    const rutaImagen = imagenes[dios.nombre];

    mostrarPopup(dios, rutaImagen);
    iluminarRegion(dios.region);
}


function iluminarRegion(regiones) 
{
    const contenedorMapa = document.getElementById("contenedorMapa");
    if (contenedorMapa) 
    {
        contenedorMapa.classList.remove("oculto");
    }

    document.querySelectorAll('#world-map .iluminado')
        .forEach(el => el.classList.remove('iluminado'));

    regiones.forEach(codigo => 
    {
        const region = document.getElementById(codigo);
        if (region) 
        {
            region.classList.add('iluminado');
        }
    });
}


function mostrarPopup(dios, rutaImagen) 
{
    titulo.textContent = dios.nombre;
    imagen.src = rutaImagen;
    texto.textContent = dios.historia;

    const popup = document.getElementById("popup");
    popup.classList.remove("oculto");

    requestAnimationFrame(() => popup.classList.add("mostrar"));
}

function ocultarPopup() 
{
    const popup = document.getElementById("popup");
    const contenedorMapa = document.getElementById("contenedorMapa");

    popup.classList.remove("mostrar");

    setTimeout(() => 
    {
        popup.classList.add("oculto");
        contenedorMapa.classList.add("oculto");

        document.querySelector('#world-map .iluminado')
            .forEach(el => el.classList.remove('iluminado'));
    }, 400);
}


document.getElementById("cerrarPopup").addEventListener("click", ocultarPopup);