import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed top-0 left-0 w-full bg-white shadow-md flex items-center py-4 z-50 px-4 md:px-8">
            <div className="flex-1">
                <h1 className="font-mono font-bold text-amber-500 text-2xl">
                    mentoriah.
                </h1>
            </div>

            {/* Botão de menu para telas pequenas */}
            <button
                onClick={toggleMenu}
                className="md:hidden block text-2xl text-gray-700"
            >
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Menu principal */}
            <ul
                className={`${isOpen ? 'block' : 'hidden'
                    } absolute top-full left-0 w-full bg-white shadow-md md:shadow-none md:bg-transparent md:static md:flex md:flex-row gap-6 font-mono font-bold justify-center flex-1 transition-transform duration-300 ease-in-out transform md:transform-none ${isOpen ? 'translate-y-0' : '-translate-y-full'
                    } md:translate-y-0`}
            >
                <li className="border-b md:border-none md:border-l-0 border-l-4 border-amber-500 pl-4">
                    <Link
                        to="/"
                        className="block py-4 md:py-0 text-gray-700 hover:text-amber-500 transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        home
                    </Link>
                </li>
                <li className="border-b md:border-none md:border-l-0 border-l-4 border-amber-500 pl-4">
                    <Link
                        to="/mentores"
                        className="block py-4 md:py-0 text-gray-700 hover:text-amber-500 transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        mentores
                    </Link>
                </li>
                <li className="border-b md:border-none md:border-l-0 border-l-4 border-amber-500 pl-4">
                    <Link
                        to="/quero-ser-um-mentor"
                        className="block py-4 md:py-0 text-gray-700 hover:text-amber-500 transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        quero ser um mentor
                    </Link>
                </li>
            </ul>
        </div>
    );
};
