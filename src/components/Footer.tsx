import { Link } from "react-router-dom";

// components/Footer.js
export const Footer = () => {
    return (
        <footer className="bg-gray-950 text-white py-4 text-center">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} Mentoriah. Me siga para acompanhar o desenvolvimento <Link to='https://github.com/gabizaor'>@gabizaor</Link>.
            </p>
        </footer>
    );
};
