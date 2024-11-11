import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Detalle = () => {

  const [producto, setProducto] = useState('');
  const { id } = useParams(); 

  useEffect(() => {
    fetch(`https://bazar20241109171716.azurewebsites.net/api/Bazar/${id}`)
      .then(response => response.json())
      .then(data => {
        setProducto(data[0]);
        console.log("producto", data); 
      })
      .catch(error => console.error("Error fetching product:", error));

    console.log("id", id);
  }, [id]);

  const comprar = () => {
    const compra = {
      id: 0,
      product_id: producto.idProducto,
      quantity: 1,
      sale_date: new Date().toISOString(),
      total_price: producto.precio,
      image: producto.img
    };

    fetch('https://bazar20241109171716.azurewebsites.net/api/Bazar/addSale', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(compra)
    }).then(response => {
      console.log("response", response);
      if (response.ok) {
        toast.success("Compra realizada con éxito!", {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.error("Error al realizar la compra. Intenta de nuevo.", {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    });
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
    <>
      <ToastContainer />
        <section className="py-12 md:py-10 bg-black">
          
          <div className="container mx-auto px-4">
            <div className="max-w-lg lg:max-w-4xl mx-auto">
              <div className="flex flex-wrap -mx-4">
              
              {producto ? (
                  <>
                    <div className="w-full lg:w-1/2 mb-16 lg:mb-0 px-4">                    
                      <div>                      
                        <img className="img-fluid block w-full h-full mb-5" src={producto.img} alt=""/>
                        <div className="flex">
                          <a className="inline-block mr-5" href="#">
                            <img className="img-fluid block w-full" src={producto.img} alt=""/>
                          </a>
                          <a className="inline-block mr-5" href="#">
                            <img className="img-fluid block w-full" src={producto.img} alt=""/>
                          </a>
                          <a className="inline-block" href="#">
                            <img className="img-fluid block w-full" src={producto.img} alt=""/>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-4">
                      <div className="xl:pl-12">
                        
                        <div className="flex items-center gap-1 flex-wrap">
                          <div className="flex items-center gap-1">
                            {renderStars(producto.calificacion)}
                          </div>
                          <span className="text-gray-500 text-sm">{producto.calificacion}</span>
                        </div>
                          
                        
                        <h3 className="text-4xl sm:text-5xl font-bold text-white mb-2">{producto.tituloP}</h3>
                        <div className="flex mb-5 items-center">
                          <span className="mr-4 text-white font-bold">Marca</span>
                          <span className="text-gray-500">{producto.marca}</span>
                        </div>
                        <div className="mb-5">
                          <span className="mr-2 text-2xl font-bold text-white">${producto.precio}</span>
                          <span className="text-sm text-gray-500">-{producto.descuento}%</span>
                        </div>
                        <p className="max-w-sm text-gray-400 mb-16">{producto.descripcion}</p>
                        
                        <div className="flex flex-col sm:flex-row flex-wrap sm:items-center">
                          <button className="inline-block px-8 py-3 text-center text-black font-bold bg-yellow-500 hover:bg-yellow-600"
                            onClick={comprar}
                            >
                            Comprar
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <p>Cargando producto...</p>
                )}
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Detalle
