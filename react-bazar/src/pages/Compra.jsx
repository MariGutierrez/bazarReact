import { useEffect, useState } from "react";

const Compra = () => {

  const [compras, setCompras] = useState([]);

  useEffect(() => {
    fetch('https://bazar20241109171716.azurewebsites.net/api/Bazar/sales')
      .then(response => response.json())
      .then(data => setCompras(data));
  }, []);

  return (
    <div>
      <div className="max-w-4xl mx-auto bg-black p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Compras registradas</h2><br></br>
        {compras.map((compra) => (
          <div key={compra.idProducto}> 
            <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-8">            
            
              <div className="flex-shrink-0">
                <img src={compra.img} className="w-48 h-48 object-cover rounded-lg shadow-lg"/>
              </div>

              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-white">Producto: {compra.tituloP}</h3>
                <p className="text-gray-400 mt-2"><b>Categoria:</b> {compra.categoria}</p>
                <p className="text-gray-400 mt-1"><b>Descripción:</b> {compra.descripcion}</p>

                <div className="mt-4">
                  <p className="text-mt-1 text-gray-400 font-semibold"><b>Cantidad:</b> 1</p>
                  <p className="text-xl font-bold mt-2 text-yellow-500">Total: {compra.precio}</p>
                </div>

                <div className="mt-2 text-sm text-yellow-200">
                  <p>Descuento: {compra.descuento}% off</p>
                </div>
              </div>
            </div>
          
            <div className="mt-6 border-b pt-4">
              <p className="text-sm text-gray-400">Fecha de compra: {compra.fecha}</p><br/>
            </div><br></br>
          </div>
          ))}
        </div>
      
    </div>
  )
}

export default Compra
