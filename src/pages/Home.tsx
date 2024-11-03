import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div className="overflow-x-hidden">
            <div
                className="container bg-hero-pattern bg-top bg-cover w-full bg-bg-home mx-auto flex flex-col justify-center items-center h-screen relative px-4"
            >
                <div className="absolute top-4 left-4 w-full">
                    <h1 className="text-lg md:text-2xl font-serif font-bold bg-slate-300 p-2 shadow-md">
                        queremos ver cada vez mais pessoas LGBTQIA+ na tecnologia ;)
                    </h1>
                </div>
                <div className="absolute top-20 left-4 right-4 w-full">
                    <h2 className="text-base md:text-lg font-serif font-bold bg-slate-200 p-2 shadow-md">
                        pensando nisso, a mentoriah conecta pessoas LGBTQIA+ que querem iniciar no ramo do TI com pessoas LGBTQIA+ que já estão inseridas no mercado de trabalho tec.
                    </h2>
                </div>
                <div className="flex flex-col justify-center items-center h-full gap-4 mt-20 md:mt-0">
                    <h1 className="text-lg md:text-2xl font-mono font-bold bg-slate-100 p-2 shadow-md text-center">
                        converse com quem pode te ajudar com os primeiros passos rumo a sua carreira tec. e o melhor: tudo isso gratuitamente.
                    </h1>
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 font-serif font-bold">
                        {/* Botão que rola para a seção oculta */}
                        <button
                            className="bg-slate-300 border rounded-lg p-2 hover:bg-slate-950 hover:text-white transition-colors w-full md:w-auto"
                            onClick={() => {
                                const element = document.getElementById('mentorado-section');
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                        >
                            quero ser mentorado
                        </button>
                        {/* Botão com link para outra página */}
                        <Link to="/quero-ser-um-mentor" className="w-full md:w-auto">
                            <button className="bg-slate-300 border rounded-lg p-2 hover:bg-slate-950 hover:text-white transition-colors w-full">
                                quero ser mentor
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Último parágrafo fixado ao final da primeira tela */}
                {/* <p className="font-mono font-bold text-center absolute bottom-4 w-full px-4 text-sm md:text-base">
                    *A mentoriah é um projeto de voluntariado que ainda está em desenvolvimento. Não temos fim lucrativo, nosso objetivo é apenas o de fornecer um suporte para a comunidade.
                </p> */}
            </div>

            {/* Seção Mentorado com as mesmas dimensões da Home */}
            <div id="mentorado-section" className="h-screen w-full flex flex-col justify-center items-center bg-white font-mono px-4">
                <h2 className="text-xl md:text-2xl font-bold mb-8 text-center">Passos para o Mentorado</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl">
                    {/* Passo 1 */}
                    <div className="p-4 bg-slate-100 shadow-md rounded-lg">
                        <h3 className="text-lg md:text-xl font-bold mb-2 font-mono">Passo 1</h3>
                        <p className="text-gray-700 text-sm md:text-base">
                            entre na nossa aba <span className='font-bold'>'mentores'</span> e selecione o mentor que você mais se identificar e tiver interesse em conversar.
                        </p>
                    </div>

                    {/* Passo 2 */}
                    <div className="p-4 bg-slate-100 shadow-md rounded-lg">
                        <h3 className="text-lg md:text-xl font-bold mb-2">Passo 2</h3>
                        <p className="text-gray-700 text-sm md:text-base">
                            cada mentor possui um <span className='font-bold'>canal de comunicação</span>, verifique qual canal o seu mentor disponibilizou.
                        </p>
                    </div>

                    {/* Passo 3 */}
                    <div className="p-4 bg-slate-100 shadow-md rounded-lg">
                        <h3 className="text-lg md:text-xl font-bold mb-2">Passo 3</h3>
                        <p className="text-gray-700 text-sm md:text-base">
                            entre em contato informando que o encontrou pelo <span className='font-bold'>mentoriah</span> e que gostaria de marcar um horário.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
