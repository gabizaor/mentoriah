import { FaLinkedin } from 'react-icons/fa';
import gabizona from '../assets/mentores/gabizona.png';
import maria from '../assets/mentores/maria.jpeg';
import igor from '../assets/mentores/igor.jpg';
import amanda from '../assets/mentores/amanda.jpg';

const mentors = [
    {
        name: "Gabrielly Reis",
        age: 23,
        flag: "Lésbica",
        area: "Desenvolvedora Frontend",
        description: "Oi, eu sou a Gabi! :) Sou a idealizadora e desenvolvedora do mentoriah. Me interessei por programação em 2022 e comecei a estudar com os conteúdos que encontrava na internet. Atualmente, trabalho há 8 meses com programação em uma empresa de dashboards baseada em BI.",
        image: gabizona,
        linkedin: "https://www.linkedin.com/in/gabrielly-reis"
    },
    {
        name: "Igor Soares",
        age: 31,
        flag: "Bissexual e Assexual",
        area: "Arquitetura e Análise de dados",
        description: "Oi, eu sou o Igor! Sou consultor de BI com especialização em Qlik e adoro entender bastante os negócios em que atuo, e sempre tento contribuir com melhorias. Tenho alguns anos de experiência na área de dados e adoro compartilhar conhecimento.",
        image: igor,
        linkedin: "https://www.linkedin.com/in/igor-soares/"
    },
    {
        name: "Maria Eduarda Bosquerolli",
        age: 25,
        flag: "Lésbica",
        area: "Análise de dados e Operações",
        description: "Oi, eu sou a Maria Eduarda! Trabalho com análise de dados e operações e tenho uma paixão por entender e melhorar processos. Espero contribuir e compartilhar conhecimentos com todos que fizerem parte do mentoriah.",
        image: maria,
        linkedin: "https://www.linkedin.com/in/mariaeduardabosquerolli/"
    },
    {
        name: "Amanda Ferreira Gorino",
        age: 31,
        flag: "Bissexual",
        area: "Design gráfico e Recrutamento",
        description: "Oi, eu sou a Amanda! Trabalho hoje na área de Talento Humano como Sr. Recruiter e sou estudante de Design Gráfico. Integro o mentoriah atuando na criação da identidade e nas estratégias de marketing digital. Estou muito motivada em contribuir com o crescimento desse projeto e trazer novas perspectivas de comunicação visual.",
        image: amanda,
        linkedin: "https://www.linkedin.com/in/amanda-ferreira-311745183/"
    }
];

export const MentorList = () => {
    return (
        <div className="flex flex-wrap justify-center gap-10 w-full max-w-6xl mx-auto px-4">
            {mentors.map((mentor, index) => (
                <div key={index} className="flex flex-col items-center bg-white px-8 py-10 shadow-lg rounded-xl transition-transform transform hover:scale-105 h-auto flex-1 min-w-[300px] max-w-[400px]">
                    <img
                        src={mentor.image}
                        alt={`Imagem de ${mentor.name}`}
                        className="w-32 h-32 rounded-full border-4 border-gray-200 object-cover shadow-md" />
                    <div className="space-y-4 mt-4 text-center">
                        <p><span className="font-semibold text-gray-700">Nome e idade:</span> {mentor.name}, {mentor.age} anos</p>
                        <p><span className="font-semibold text-gray-700">Bandeira:</span> {mentor.flag}</p>
                        <p><span className="font-semibold text-gray-700">Área de atuação:</span> {mentor.area}</p>
                        <p className="text-gray-600">{mentor.description}</p>
                        <a
                            href={mentor.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 flex items-center justify-center mt-4"
                        >
                            <FaLinkedin size={24} className="mr-2" /> LinkedIn
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};
