document.addEventListener("DOMContentLoaded", () => {
    const carritoItemsStorage = JSON.parse(localStorage.getItem('carrito')) || [];
    const carritoItems = document.querySelector('#carrito-items');
    const totalgeneral = document.querySelector('#total');
    let total = 0;

    //Cargar productos al carrito
    carritoItemsStorage.forEach(item => {
        const prodCarrito = document.createElement("div");
        prodCarrito.className = "prodCarrito";
        prodCarrito.innerHTML = `                       
                        <img src="${item.image}" alt="">
                        <div class="detalle">
                            <button id="eliminarUnProducto"><i class="fa-solid fa-trash-can"></i></button>
                            <p>${item.title}</p>
                            <div class="agregar">
                                <form action="">
                                    <button class="restar"><i class="fa-solid fa-square-minus"></i></button>
                                    <input type="number" name="cant" id="cant" min="0" value="1">
                                    <button class="sumar"><i class="fa-solid fa-square-plus"></i></button>
                                </form>
                                <div>
                                    <p class="subtotal">total</p>
                                    <p class="precio">$${item.price}</p>
                                </div>
                            </div>
                        </div>
                    
        `;

         //Agregar evento al boton "eliminarUnProducto"
         const botonborrarItem = prodCarrito.querySelector('#eliminarUnProducto')
         botonborrarItem.addEventListener("click", () => {
             eliminarUnProducto(item.id)
         })

        //Añadir la card al contenedor
        carritoItems.appendChild(prodCarrito);

        //acumular total
        total += item.price

    })

    //Mostrar total con 2 decimales
    totalgeneral.innerHTML = '$' + total.toFixed(2);

    //limpiar carrito
    document.querySelector('#vaciarCarrito').addEventListener("click", () => {
        localStorage.removeItem('carrito');
        //codigo de sweet Alert
        Swal.fire({
            title: "Carrito Vacio",
            icon: "success"
        });

        //redirigir al index despues de 2 seg
        setTimeout(() => {
            window.location.href = 'index.html'
        }, 2000);
    })

    //Finalizar compra con sweet Alert
    document.querySelector('#finalizarCompra').addEventListener("click", () => {

        //codigo de sweet Alert
        Swal.fire({
            title: "Compra Finalizada",
            text: "Su compra fue procesada exitosamente",
            icon: "success"
        });

        //vaciar carrito
        localStorage.removeItem('carrito')

        //redirigir al index despues de 2 seg
        setTimeout(() => {
            window.location.href = 'index.html'
        }, 4000);

    })

     //eliminar 1 producto del carrito
     function eliminarUnProducto(id) {
        // console.log(id);
        //localStore guarda texto, JSON.parse convierte el texto en un objeto de Js
        var carrito = JSON.parse(localStorage.getItem("carrito") || []);
        carrito = carrito.filter((p) => p.id !== id)
        localStorage.setItem("carrito", JSON.stringify(carrito));

        //codigo de sweet Alert
        Swal.fire({
            title: "Item eliminado",
            icon: "success"
        });

        setTimeout(() => {
            window.location.href = 'carrito.html'
        }, 2000);

    }
})

