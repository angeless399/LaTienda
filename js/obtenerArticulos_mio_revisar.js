document.addEventListener("DOMContentLoaded", () => {

 const contenedor = document.querySelector('#articulos');
    let cardsArticulos = '';
    const fetchProductos = async () => {
        try {
            const peticionArticulos = await fetch('https://fakestoreapi.com/products')
            const articulosRecibidos = await peticionArticulos.json()
            // console.log(articulosRecibidos)
            contenedor.innerHTML = '';
            articulosRecibidos.forEach(articulo => {

          
                cardsArticulos += `
                      <div class="card">
                    <div class="top">
                        <img src="${articulo.image}" alt="">
                        <p class="titProd">${articulo.title}</p>
                        <p class="descrpcion">${articulo.description} </p>
                        <a href="opiniones.html" class="resenias">ver reseñas</a>
                    </div>
                    <div class="bottom">
                        <p class="precio">$${articulo.price}<button class="favorito"><i class="fa-solid fa-heart"></i></button></p>
                        <div class="agregar">
                            <form action="">
                                <button class="restar"><i class="fa-solid fa-square-minus"></i></button>
                                <input type="number" name="cant" id="cant" min="0" value="1">
                                <button class="sumar"><i class="fa-solid fa-square-plus"></i></button>
                            </form>
                            <button class="addcarrito" onclick="agregarAlCarrito(${articulo})"><i class="fa-solid fa-cart-plus"></i></button>
                        </div>
                    </div>
                </div>
                `;
            });


            contenedor.innerHTML = cardsArticulos;

        } catch (error) {
            console.log('Ocurrio un error', error)
        }
    }


    //funcion para agregar al carrito usando localStorage

    function agregarAlCarrito(product) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${product.title} ha sido agregado al carrito!`)
    }


    //Carga inicial de productos
    fetchProductos();

})






