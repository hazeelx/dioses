let titulo = document.getElementById('tituloDios');
let imagen = document.getElementById('imagenDios');
let texto = document.getElementById('textoDios');

let imagenes = {};

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
    const index = Math.floor(Math.random() * dioses.length);
    const dios = dioses[index];
    const rutaImagen = imagenes[dios.nombre];

    mostrarPopup(dios, rutaImagen);

    if(!datosCargados)
    {
        alert("Las imagenes aún se estan cargando");
        return;
    }
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

    popup.classList.remove("mostrar");

    setTimeout(() => 
    {
        popup.classList.add("oculto");
    }, 400);
}


document.getElementById("cerrarPopup").addEventListener("click", ocultarPopup);