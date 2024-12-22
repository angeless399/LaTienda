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
                        <img src="${item.thumbnail}" alt="">
                        <div class="detalle">
                            <button><i class="fa-solid fa-trash-can"></i></button>
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
})

