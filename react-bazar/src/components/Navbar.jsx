import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg py-4 px-6 flex justify-between items-center"
        style={{
            backgroundImage: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(54,5,63,1) 35%, rgba(92,9,121,1) 66%, rgba(0,0,0,1) 100%)",
        }}>
        <div className="flex items-center space-x-4">
        <img src="/bolsa-de-reciclaje.png" className="w-8 h-8" />
            <Link to="/" className="text-lg font-semibold text-white">
                Beauty Bazar
            </Link>
        </div>
        <div className="flex space-x-4">
            <Link to="/" className="flex items-center text-white hover:text-blue-500">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path fill="#ffffff" d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
                                        &nbsp;&nbsp;Inicio
            </Link>
            <Link to="/sales" className="flex items-center text-white hover:text-blue-500">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="#ffffff" d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48C336 50.1 285.9 0 224 0S112 50.1 112 112l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg>
                                        &nbsp;&nbsp;Compras
            </Link>
        </div>
    </nav>
)
}

export default Navbar


