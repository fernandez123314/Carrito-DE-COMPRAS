let productos = [
        {
          nombre: "harina",
          precio: 35
        },
        {
          nombre: "pan",
          precio: 25
        },
        {
          nombre: "papa",
          precio: 52
        },
        {
          nombre: "palta",
          precio: 55
        },
        {
          nombre: "fideos",
          precio: 85
        },
        {
          nombre: "aceite",
          precio: 350
        },
        {
          nombre: "sopa",
          precio: 86
        },
        {
          nombre: "harina",
          precio: 35
        },
        {
          nombre: "pan",
          precio: 25
        },
        {
          nombre: "papa",
          precio: 52
        },
        {
          nombre: "palta",
          precio: 55
        },
        {
          nombre: "fideos",
          precio: 85
        },
        {
          nombre: "aceite",
          precio: 350
        },
        {
          nombre: "sopa",
          precio: 86
        },
        {
          nombre: "mermelada",
          precio: 108
        },
        {
          nombre: "porotos",
          precio: 69
        },
        {
          nombre: "lentejas",
          precio: 85
        },
        {
          nombre: "mandarina",
          precio: 43
        },
        {
          nombre: "banana",
          precio: 79
        },
        {
          nombre: "leche de almendras",
          precio: 145
        },
        {
          nombre: "papel higiénico",
          precio: 147
        },
        {
          nombre: "lavandina",
          precio: 55
        },
        {
          nombre: "alcohol en gel",
          precio: 123
        },
        {
          nombre: "shampoo",
          precio: 400
        },
        {
          nombre: "arroz",
          precio: 66
        },
        {
          nombre: "harina",
          precio: 35
        },
        {
          nombre: "salsa de tomate",
          precio: 35
        }
      ];
      var carrito = [];

      function agregarAlCarrito(index) {
        if (isNaN(index) || index < 0 || index >= productos.length) {
          console.log("Índice inválido");
          return;
        }
      
        if (carrito.includes(index)) {
          console.log("El producto ya está en el carrito");
        } else {
          carrito.push(index);
          console.log("Producto agregado al carrito");
        }
      }
      
      function agregarProducto(nombre, precio) {
        carrito.push({ nombre: nombre, precio: precio });
        actualizarCarrito();
      }
      
      function actualizarCarrito() {
        let carritoElemento = document.getElementById("carrito").getElementsByTagName("ul")[0];
        carritoElemento.innerHTML = "";
        let total = 0;
        for (let i = 0; i < carrito.length; i++) {
          let producto = carrito[i];
          let elemento = document.createElement("li");
          elemento.innerHTML = producto.nombre + " - $" + producto.precio;
          carritoElemento.appendChild(elemento);
          total += producto.precio;
        }
        let montoElemento = document.getElementById("monto");
        montoElemento.innerHTML = total;
      }
      
      function borrar() {
        carrito = [];
        actualizarCarrito();
      }
      
      function comprar() {
        /*NO puse un link de pago ya que no cree uno en mi mercado pago no obstante puse una url*/
        var urlPago = "https://www.mercadopago.com.ar/";
        /*Url de ahi: var urlPago = "https://www.mercadopago.com.ar/";*/
        window.location.href = urlPago;
      }
      
      function mostrarCarrito() {
        console.log("Carrito de compras:");
        if (carrito.length === 0) {
          console.log("El carrito está vacío");
        } else {
          var total = 0;
          for (var i = 0; i < carrito.length; i++) {
            var producto = productos[carrito[i]];
            console.log(producto.nombre + " - $" + producto.precio);
            total += producto.precio;
          }
          console.log("Total a pagar: $" + total);
        }
      }
      
