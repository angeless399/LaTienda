document.addEventListener("DOMContentLoaded", () => {


    const productosContainer = document.querySelector('#articulos');

    // obtener Productos desde la API publica
    function fetchProductos() {
        fetch("https://dummyjson.com/products?limit=20")
            .then((response) => response.json())
            .then((data) => {
                const productos = data.products;

                //limpia el contenedor de productos
                productosContainer.innerHTML = "";

                //genera las cards de productos
                productos.forEach((product) => {
                    const cardDiv = document.createElement("div");
                    cardDiv.className = "card";
                    cardDiv.innerHTML = `
                    <div class="top">
                        <img src="${product.thumbnail}" alt="${product.title}">
                        <p class="titProd">${product.title}</p>
                        <p class="descrpcion">${product.description} </p>
                        <a href="opiniones.html" class="resenias">ver reseñas</a>
                    </div>
                    <div class="bottom">
                        <p class="precio">$${product.price}<button class="favorito"><i class="fa-solid fa-heart"></i></button></p>
                        <div class="agregar">
                            <form action="">
                              <button class="restar"><i class="fa-solid fa-square-minus"></i></button>
                                <input type="number" name="cant" id="cant" min="0" value="1">
                                <button class="sumar"><i class="fa-solid fa-square-plus"></i></button>
                            </form>
                            <div class="add">
                            <button class="addcarrito" id="agregar"><i class="fa-solid fa-cart-plus"></i></button>
                            </div>
                        </div>
                    </div>
                
                `;

                    //Agregar evento al boton "Agregar"
                    const botonAgregar = cardDiv.querySelector("#agregar");
                    // console.log(botonAgregar);
                    botonAgregar.addEventListener("click", () => {
                        agregarAlCarrito(product)
                    });

                    //Añadir la card al contenedor
                    productosContainer.appendChild(cardDiv);


                });

            })
            .catch((error) => console.error("error", error));
    }

    //funcion para agregar al carrito usando localStorage

    function agregarAlCarrito(product) {
        let carrito= JSON.parse(localStorage.getItem("carrito")) || [];
        carrito.push(product);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        alert(`${product.title} ha sido agregado al carrito!`)
    }

    //Carga inicial de productos
    fetchProductos();

})






