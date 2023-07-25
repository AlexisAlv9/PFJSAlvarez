const shopContent = document.getElementById ("contenedorProductos");
const verCarrito = document.getElementById ("verCarrito");
const paginaCarrito = document.getElementById ("paginaCarrito");
const cantidadCarrito = document.getElementById ("cantidadCarrito");
    
let carrito = JSON.parse(localStorage.getItem("carrito")) ||  [];
    
    productos.forEach((contenido) => {
        let content = document.createElement ("div");
         content.innerHTML = `
         <img src= "${contenido.imagen}">
         <div class="informacion">
         <h3> ${contenido.nombre}</h3>
         <p> ${contenido.precio} $</p>
         </div>
         `
         contenedorProductos.append(content);

         let comprar = document.createElement ("button");
         comprar.innerText = "Agregar al carrito"
         content.append(comprar);
         comprar.className ="comprar";

         comprar.addEventListener ("click", () => {

          const repeat = carrito.some ((repeatProductos) => repeatProductos.id === contenido.id);
           
          if (repeat){
              carrito.map ((prod) => {
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
         });
    });

    //set item
    const guardarLocal = () =>{
    localStorage.setItem("carrito", JSON.stringify(carrito));
}
    // get item

    