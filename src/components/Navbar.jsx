import { Link } from 'react-router-dom';
import "../components/styles/Navbar.css"
const Navbar = () => {
    return (
        <nav className="bg-amber-100 p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold text-amber-800">Blisse Creations</div>
                <div className="space-x-4">
                    <Link to="/" className="text-amber-700 hover:text-amber-900">Home</Link>
                    <Link to="/about" className="text-amber-700 hover:text-amber-900">About</Link>
                    <Link to="/contact" className="text-amber-700 hover:text-amber-900">Contact</Link>
                    <Link to="/contact" className="text-amber-700 hover:text-amber-900">Studio</Link>
                    <Link to="/contact" className="text-amber-700 hover:text-amber-900">Fragrances</Link>
                    
                </div>
            </div>
        </nav>
    );
};
export default Navbar;