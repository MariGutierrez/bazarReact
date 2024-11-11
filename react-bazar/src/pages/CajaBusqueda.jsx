import { useState } from "react";
import { useNavigate } from "react-router-dom";


const CajaBusqueda = () => {
    const [q, setQ] = useState('');
    const navigate = useNavigate();

    const irResultados = () => {
        navigate(`/items?search=${q}`);
    };

    return (
        <>
            <section className="py-12 md:py-32 bg-black min-height: 100vh;">
                <div className="container mx-auto px-4 ">    
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
            </section>
        </>
    );
};

export default CajaBusqueda;