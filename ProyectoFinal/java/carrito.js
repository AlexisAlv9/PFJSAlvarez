
//verCarrito.addEventListener ("click", () => {
    
const pintarCarrito = ()=>  {
    paginaCarrito.innerHTML= "";
    paginaCarrito.style.display = "flex";


    const paginaBoton = document.createElement ("h1");
    paginaBoton.innerText ="cerrar";
    paginaBoton.className = "pagina-boton";

    paginaCarrito.append(paginaBoton);

    paginaBoton.addEventListener("click", ()=> {
        paginaCarrito.style.display = "none";
    });

    const paginaHeader = document.createElement ("div");
    paginaHeader.className = "pagina-header";
    paginaHeader.innerHTML = `
    <h1 class= "pagina-header-titulo">Su seleccion</h1>`;

    paginaCarrito.append(paginaHeader);

    
    carrito.forEach((contenido) => {
        let carritoContent = document.createElement ("div")
        carritoContent.className = "carrito-content"
        carritoContent.innerHTML = `
        <img src= "${contenido.img}">
        <h3> ${contenido.nombre}</h3>
        <p> ${contenido.precio} $</p>
        <p> Cantidad: ${contenido.cantidad}</p>
        <p> Total: ${contenido.cantidad * contenido.precio}</p>
        <span class="eliminar-producto">Eliminar<span>
        `;

        paginaCarrito.append(carritoContent);


        let eliminar = carritoContent.querySelector(".eliminar-producto");
        eliminar.addEventListener("click", ()=>{
            eliminarProducto(contenido.id);
        });
   /*  
    let eliminar = document.createElement ("span");
    eliminar.innerText = "Eliminar";
    eliminar.className = "eliminar-producto";
    carritoContent.append(eliminar);
   

    eliminar.addEventListener("click", eliminarProducto);
     */
} );
    

    const total = carrito.reduce((acc, el)=> acc + el.precio * el.cantidad,0) ;
    const totalCompra = document.createElement ("div");
    totalCompra.className = "total-compra";
    totalCompra.innerHTML = `total a pagar: ${total} $`;
    paginaCarrito.append(totalCompra);

 
    };
//});

verCarrito.addEventListener("click", pintarCarrito);


const eliminarProducto = (id) => {
   const foundId = carrito.find ((element) => element.id === id);
   carrito = carrito.filter((carritoId) => {
    return carritoId !== foundId;
   });
   carritoDisplay();
   guardarLocal();
   pintarCarrito();
}

const carritoDisplay = () => {
    cantidadCarrito.style.display =  "block";

    const carritoLength = carrito.length;
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength))
    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
}

carritoDisplay();