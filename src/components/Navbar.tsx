import { Link } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed top-0 left-0 w-full bg-white shadow-md flex items-center py-4 z-50 px-4 md:px-8">
            <div className="flex-1">
                <h1 className="font-mono font-bold">mentoriah.</h1>
            </div>

            {/* Botão de menu para telas pequenas */}
            <button
                onClick={toggleMenu}
                className="md:hidden block text-xl font-bold"
            >
                ☰
            </button>

            {/* Menu principal */}
            <ul
                className={`${isOpen ? 'block' : 'hidden'
                    } md:flex md:flex-row gap-6 font-mono font-bold justify-center flex-1`}
            >
                <li>
                    <Link to="/" onClick={() => setIsOpen(false)}>home</Link>
                </li>
                <li>
                    <Link to="/mentores" onClick={() => setIsOpen(false)}>mentores</Link>
                </li>
                <li>
                    <Link to="/quero-ser-um-mentor" onClick={() => setIsOpen(false)}>quero ser um mentor</Link>
                </li>
            </ul>

            <div className="flex-1 hidden md:block"></div>
        </div>
    );
};
