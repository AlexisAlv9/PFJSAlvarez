

const shopContent = document.getElementById ("contenedorProductos");
const verCarrito = document.getElementById ("verCarrito");
const paginaCarrito = document.getElementById ("paginaCarrito");
const cantidadCarrito = document.getElementById ("cantidadCarrito");
    
let carrito = JSON.parse(localStorage.getItem("carrito")) ||  [];
    


const cargarProductos = async () => {
    try {
      const response = await fetch('data.json');
      if (!response.ok) {
        throw new Error('No se pudo obtener los datos de los productos.');
      }
  
      const productos = await response.json();
  
      productos.forEach((contenido) => {
        let content = document.createElement("div");
        content.innerHTML = `
          <img src="${contenido.imagen}">
          <div class="informacion">
            <h3>${contenido.nombre}</h3>
            <p>${contenido.precio} $</p>
          </div>
        `;
        contenedorProductos.append(content);
  
        let comprar = document.createElement("button");
        comprar.innerText = "Agregar al carrito";
        content.append(comprar);
        comprar.className = "comprar";
  
        comprar.addEventListener("click", () => {
          const repeat = carrito.some((repeatProductos) => repeatProductos.id === contenido.id);
  
          if (repeat) {
            carrito.map((prod) => {
              if (prod.id === contenido.id) {
                prod.cantidad++;
              }
            });
          } else {
            carrito.push({
              id: contenido.id,
              img: contenido.imagen,
              nombre: contenido.nombre,
              precio: contenido.precio,
              cantidad: contenido.cantidad,
            });
          }
          carritoDisplay();
          guardarLocal();
  
          // Mostrar el mensaje "Producto agregado al carrito"
          mostrarMensajeProductoAgregado();
        });
      });
  
    } catch (error) {
      console.error('Error al cargar los productos:', error.message);
    }
  };
  
  // Llamar a la función para cargar los productos
  cargarProductos();






    //set item
    const guardarLocal = () =>{
    localStorage.setItem("carrito", JSON.stringify(carrito));
}


//mobile 
const btnMenu = document.querySelector('.btn-menu');
const sidebar = document.querySelector('.sidebar');

btnMenu.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});
    