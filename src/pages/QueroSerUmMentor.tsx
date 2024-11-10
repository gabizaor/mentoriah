import { FaLinkedin } from 'react-icons/fa';

export const QueroSerUmMentor = () => {
    return (
        <div className="min-h-screen font-mono overflow-y-auto flex flex-col items-center justify-center bg-gray-100 px-4">
            <h1 className="font-extrabold text-3xl text-center mb-12 mt-12 text-gray-800">
                Quero ser um mentor
            </h1>
            <div className="bg-white shadow-lg rounded-xl max-w-2xl p-8 md:p-12 text-center space-y-6">
                <p className="text-gray-600 leading-relaxed">
                    O <span className="font-bold text-gray-800">mentoriah</span> nasceu de uma vivência particular baseada nas dificuldades que LGBTQIA+ encontram na sociedade para conseguir se inserirem nos mais diversos locais, incluindo o mercado de trabalho. A ideia principal do projeto é fornecer apoio à comunidade e auxiliar. Se você acredita no projeto e está interessado em contribuir como mentor, basta me contatar pelo LinkedIn.
                </p>

                <a
                    href="https://www.linkedin.com/in/gabrielly-reis" // Insira seu link do LinkedIn
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center justify-center mt-6"
                >
                    <FaLinkedin size={32} className="mr-2" /> LinkedIn
                </a>
            </div>
        </div>
    );
};
