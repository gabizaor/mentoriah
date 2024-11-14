import { FaLinkedin } from 'react-icons/fa';
import gabizona from '../assets/mentores/gabizona.png';
import maria from '../assets/mentores/maria.jpeg';
import igor from '../assets/mentores/igor.jpg';

export const Cardapio = () => {
    return (
        <div className="min-h-screen font-mono flex flex-col items-center justify-center bg-gray-100">
            {/* Mentorado Section */}
            <div className="py-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-gray-800">
                    Passos para o Mentorado
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
                    {/* Step 1 */}
                    <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl">
                        <h3 className="text-xl font-semibold text-amber-600 mb-3">Passo 1</h3>
                        <p className="text-gray-700">
                            Veja a nossa lista de mentores e selecione o mentor com quem você mais se identificar.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl">
                        <h3 className="text-xl font-semibold text-amber-600 mb-3">Passo 2</h3>
                        <p className="text-gray-700">
                            Verifique o <span className="font-bold">canal de comunicação</span> que o mentor disponibilizou para contato.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl">
                        <h3 className="text-xl font-semibold text-amber-600 mb-3">Passo 3</h3>
                        <p className="text-gray-700">
                            Entre em contato e informe que conheceu o mentor pelo <span className="font-bold">mentoriah</span> para agendar um horário.
                        </p>
                    </div>
                </div>
            </div>

            <h1 className="font-extrabold text-3xl text-center mb-12 mt-12 text-gray-800">
                Conheça os nossos mentores:
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl gap-10 px-4">
                {/* Gabi */}
                <div className="flex flex-col items-center bg-white px-8 py-10 shadow-lg rounded-xl transition-transform transform hover:scale-105 h-auto">
                    <img
                        src={gabizona}
                        alt="Imagem de Gabrielly Reis"
                        className="w-32 h-32 rounded-full border-4 border-gray-200 object-cover shadow-md"
                    />
                    <div className="space-y-4 mt-4 text-center">
                        <p><span className="font-semibold text-gray-700">Nome e idade:</span> Gabrielly Reis, 23 anos</p>
                        <p><span className="font-semibold text-gray-700">Bandeira:</span> Lésbica</p>
                        <p><span className="font-semibold text-gray-700">Área de atuação:</span> Desenvolvedora Frontend</p>
                        <p className="text-gray-600">Oi, eu sou a Gabi! :) Sou a idealizadora e desenvolvedora do <span className="font-bold text-gray-800">mentoriah.</span> Me interessei por programação em 2022 e comecei a estudar com os conteúdos que encontrava na internet. Atualmente, trabalho há 8 meses com programação em uma empresa de dashboards baseada em BI.</p>
                        <a
                            href="https://www.linkedin.com/in/gabrielly-reis"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 flex items-center justify-center mt-4"
                        >
                            <FaLinkedin size={24} className="mr-2" /> LinkedIn
                        </a>
                    </div>
                </div>

                {/* Maria Eduarda */}
                <div className="flex flex-col items-center bg-white px-8 py-10 shadow-lg rounded-xl transition-transform transform hover:scale-105 h-auto">
                    <img
                        src={maria}
                        alt="Imagem de Maria Eduarda Bosquerolli"
                        className="w-32 h-32 rounded-full border-4 border-gray-200 object-cover shadow-md"
                    />
                    <div className="space-y-4 mt-4 text-center">
                        <p><span className="font-semibold text-gray-700">Nome e idade:</span> Maria Eduarda Bosquerolli, 25 anos</p>
                        <p><span className="font-semibold text-gray-700">Bandeira:</span> Lésbica</p>
                        <p><span className="font-semibold text-gray-700">Área de atuação:</span> Análise de dados e Operações</p>
                        <p className="text-gray-600">Oi, eu sou a Maria Eduarda! Trabalho com análise de dados e operações e tenho uma paixão por entender e melhorar processos. Espero contribuir e compartilhar conhecimentos com todos que fizerem parte do <span className="font-bold text-gray-800">mentoriah.</span></p>
                        <a
                            href="https://www.linkedin.com/in/mariaeduardabosquerolli/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 flex items-center justify-center mt-4"
                        >
                            <FaLinkedin size={24} className="mr-2" /> LinkedIn
                        </a>
                    </div>
                </div>

                {/* Igor */}
                <div className="flex flex-col items-center bg-white px-8 py-10 shadow-lg rounded-xl transition-transform transform hover:scale-105 h-auto">
                    <img
                        src={igor}
                        alt="Imagem de Igor"
                        className="w-32 h-32 rounded-full border-4 border-gray-200 object-cover shadow-md"
                    />
                    <div className="space-y-4 mt-4 text-center">
                        <p><span className="font-semibold text-gray-700">Nome e idade:</span> Igor Soares, 31 anos</p>
                        <p><span className="font-semibold text-gray-700">Bandeira:</span> Bissexual e Assexual </p>
                        <p><span className="font-semibold text-gray-700">Área de atuação:</span> Arquitetura e Análise de dados</p>
                        <p className="text-gray-600">
                            Oi, eu sou o Igor! Sou consultor de BI com especialização em Qlik e adoro entender bastante os negócios em que atuo, e sempre tento contribuir com melhorias. Tenho alguns anos de experiência na área de dados e adoro compartilhar conhecimento.</p>
                        <a
                            href="https://www.linkedin.com/in/igor-soares/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 flex items-center justify-center mt-4"
                        >
                            <FaLinkedin size={24} className="mr-2" /> LinkedIn
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
};
