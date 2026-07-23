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

// Hover 3D
const btn = document.querySelector("#btnAleatorio");

btn.addEventListener("mousemove", (e) => {
  const rect = btn.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const rotateY = (x / rect.width - 0.5) * 20;
  const rotateX = (y / rect.height - 0.5) * -20;

  gsap.to(btn, {
    rotationY: rotateY,
    rotationX: rotateX,
    duration: 0.4,
    ease: "power3.out"
  });
});

btn.addEventListener("mouseleave", () => {
  gsap.to(btn, {
    rotationY: 0,
    rotationX: 0,
    duration: 0.6,
    ease: "power3.out"
  });
});

// Partículas al hover
btn.addEventListener("mouseenter", () => {
  for (let i = 0; i < 20; i++) {
    const p = document.createElement("span");
    p.classList.add("particle");
    document.querySelector(".particles").appendChild(p);

    gsap.set(p, {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: 6,
      height: 6,
      background: "white",
      borderRadius: "50%"
    });

    gsap.to(p, {
      x: gsap.utils.random(-100, 100),
      y: gsap.utils.random(-60, 60),
      opacity: 0,
      scale: 0,
      duration: gsap.utils.random(0.6, 1.2),
      ease: "power2.out",
      onComplete: () => p.remove()
    });
  }
});

// Efecto pulse al clic
btn.addEventListener("click", () => {
  gsap.fromTo(
    btn,
    { scale: 1 },
    { scale: 1.15, duration: 0.2, ease: "power2.out", yoyo: true, repeat: 1 }
  );
});


document.getElementById("cerrarPopup").addEventListener("click", ocultarPopup);