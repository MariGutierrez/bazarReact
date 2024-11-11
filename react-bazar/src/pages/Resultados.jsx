import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Resultados = () => {
  const [productos, setProductos] = useState([]);  
  const navigate = useNavigate();
  
  const irDetalle = (id) => {
    navigate(`/item/${id}`);
  };

  const [q, setQ] = useState(new URLSearchParams(useLocation().search).get("search") || "");

  useEffect(() => {
    const getProductos = async () => {
      try {
        const response = await fetch(`https://bazar20241109171716.azurewebsites.net/api/Bazar?q=${q}`);
        const data = await response.json();
        setProductos(Array.isArray(data) ? data : []);
        console.log(data);
        console.log("q", q);
      } catch (error) {
        console.error(error);
        setProductos([]);
      }
    };
    if (q) getProductos();
  }, [q]);

  const irResultados = () => {
    navigate(`/items?search=${q}`);
  };

  // Función para generar las estrellas
  const renderStars = (calificacion) => {
    const fullStars = Math.floor(calificacion); // Estrellas llenas
    const halfStar = calificacion % 1 !== 0; // Media estrella si no es un número entero
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Estrellas vacías

    let stars = [];

    // Crear las estrellas llenas
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={`full-${i}`} width="16" height="15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.6117 5.66765C15.5086 5.3507 15.2275 5.12631 14.8962 5.09633L10.3778 4.68612L8.59206 0.505394C8.46022 0.198241 8.16023 0 7.82632 0C7.49242 0 7.19231 0.198241 7.06131 0.505394L5.27559 4.68612L0.756428 5.09633C0.425151 5.12691 0.144629 5.3513 0.0409712 5.66765C-0.0620899 5.98459 0.0330893 6.33223 0.283637 6.55197L3.69922 9.54695L2.69214 13.9825C2.61845 14.3087 2.74504 14.6459 3.01565 14.8415C3.16111 14.9472 3.332 15 3.50349 15C3.65086 15 3.79834 14.9608 3.93006 14.882L7.82632 12.5523L11.7219 14.882C12.0076 15.0528 12.367 15.0371 12.637 14.8415C12.9076 14.6459 13.0342 14.3087 12.9605 13.9825L11.9534 9.54695L15.369 6.55197C15.6194 6.33223 15.7147 5.98531 15.6117 5.66765V5.66765Z" fill="#FFBB29"></path>
        </svg>
      );
    }

    // Crear la media estrella si es necesario
    if (halfStar) {
      stars.push(
        <svg key="half" width="16" height="15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.6117 5.66765C15.5086 5.3507 15.2275 5.12631 14.8962 5.09633L10.3778 4.68612L8.59206 0.505394C8.46022 0.198241 8.16023 0 7.82632 0C7.49242 0 7.19231 0.198241 7.06131 0.505394L5.27559 4.68612L0.756428 5.09633C0.425151 5.12691 0.144629 5.3513 0.0409712 5.66765C-0.0620899 5.98459 0.0330893 6.33223 0.283637 6.55197L3.69922 9.54695L2.69214 13.9825C2.61845 14.3087 2.74504 14.6459 3.01565 14.8415C3.16111 14.9472 3.332 15 3.50349 15C3.65086 15 3.79834 14.9608 3.93006 14.882L7.82632 12.5523L11.7219 14.882C12.0076 15.0528 12.367 15.0371 12.637 14.8415C12.9076 14.6459 13.0342 14.3087 12.9605 13.9825L11.9534 9.54695L15.369 6.55197C15.6194 6.33223 15.7147 5.98531 15.6117 5.66765V5.66765Z" fill="#FFBB29" opacity="0.5"></path>
        </svg>
      );
    }

    // Crear las estrellas vacías
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} width="16" height="15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.6117 5.66765C15.5086 5.3507 15.2275 5.12631 14.8962 5.09633L10.3778 4.68612L8.59206 0.505394C8.46022 0.198241 8.16023 0 7.82632 0C7.49242 0 7.19231 0.198241 7.06131 0.505394L5.27559 4.68612L0.756428 5.09633C0.425151 5.12691 0.144629 5.3513 0.0409712 5.66765C-0.0620899 5.98459 0.0330893 6.33223 0.283637 6.55197L3.69922 9.54695L2.69214 13.9825C2.61845 14.3087 2.74504 14.6459 3.01565 14.8415C3.16111 14.9472 3.332 15 3.50349 15C3.65086 15 3.79834 14.9608 3.93006 14.882L7.82632 12.5523L11.7219 14.882C12.0076 15.0528 12.367 15.0371 12.637 14.8415C12.9076 14.6459 13.0342 14.3087 12.9605 13.9825L11.9534 9.54695L15.369 6.55197C15.6194 6.33223 15.7147 5.98531 15.6117 5.66765V5.66765Z" fill="#E5E5E5"></path>
        </svg>
      );
    }

    return stars;
  };

  return (
    <section className="py-1 md:py-10 bg-black">
      <div className="container mx-auto px-1">
        <div className="flex items-center gap-2 mb-4">
          <input
            className="flex-grow py-3 px-4 border rounded-full text-white bg-gray-800 outline-none focus:ring-1 ring-indigo-400"
            type="text" placeholder="Buscar producto"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <button
            className="px-4 py-2 text-white bg-purple-500 rounded-full hover:bg-purple-800 focus:outline-none"
            onClick={irResultados}
          >
            Buscar
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl mb-8">Your Wishlist</h2>
        <div className="flex flex-wrap -m-4">
          {productos.map((producto) => (
            <div key={producto.idProducto} className="w-full md:w-1/2 lg:w-1/3 p-4">
              <a href="#" className="group">
                <div className="overflow-hidden mb-2">
                  <img className="object-cover w-full h-full transform group-hover:scale-105 transition duration-200"
                    src={producto.img}
                    alt={producto.tituloP}
                  />
                </div>
                <p className="text-gray-500 font-heading">Category: {producto.categoria}</p>
                <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                  <p className="text-white text-2xl font-semibold">{producto.tituloP}</p>
                  
                </div>
                <div className="flex items-center gap-1 flex-wrap">
                    <div className="flex items-center gap-1">
                      {renderStars(producto.calificacion)}
                    </div>
                    <span className="text-gray-500 text-sm">{producto.calificacion}</span>
                  </div>
                <div className="flex items-center justify-between flex-wrap gap-2 mb-6">
                  <div className="flex items-center flex-wrap gap-1">
                    <h3 className="text-rose-500 text-4xl font-heading">${producto.precio}</h3>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="inline-flex items-center bg-fuchsia-300 rounded-full px-4 h-8 text-sm uppercase font-semibold">
                      -{producto.descuento}%
                    </span>
                  </div>
                  <button 
                    onClick={() => irDetalle(producto.idProducto)}
                    className="w-full bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:ring-gray-200 text-white font-semibold px-7 py-4 h-14 inline-flex items-center justify-center gap-2 transition duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                      <path d="M19 7H16V6C16 4.93913 15.5786 3.92172 14.8284 3.17157C14.0783 2.42143 13.0609 2 12 2C10.9391 2 9.92172 2.42143 9.17157 3.17157C8.42143 3.92172 8 4.93913 8 6V7H5C4.73478 7 4.48043 7.10536 4.29289 7.29289C4.10536 7.48043 4 7.73478 4 8V19C4 19.7956 4.31607 20.5587 4.87868 21.1213C5.44129 21.6839 6.20435 22 7 22H17C17.7956 22 18.5587 21.6839 19.1213 21.1213C19.6839 20.5587 20 19.7956 20 19V8C20 7.73478 19.8946 7.48043 19.7071 7.29289C19.5196 7.10536 19.2652 7 19 7ZM10 6C10 5.46957 10.2107 4.96086 10.5858 4.58579C10.9609 4.21071 11.4696 4 12 4C12.5304 4 13.0391 4.21071 13.4142 4.58579C13.7893 4.96086 14 5.46957 14 6V7H10V6ZM18 19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H7C6.73478 20 6.48043 19.8946 6.29289 19.7071C6.10536 19.5196 6 19.2652 6 19V9H8V10C8 10.2652 8.10536 10.5196 8.29289 10.7071C8.48043 10.8946 8.73478 11 9 11C9.26522 11 9.51957 10.8946 9.70711 10.7071C9.89464 10.5196 10 10.2652 10 10V9H14V10C14 10.2652 14.1054 10.5196 14.2929 10.7071C14.4804 10.8946 14.7348 11 15 11C15.2652 11 15.5196 10.8946 15.7071 10.7071C15.8946 10.5196 16 10.2652 16 10V9H18V19Z" fill="#EFF0F3"></path>
                    </svg>
                    <span>Comprar</span>
                  </button>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resultados;
