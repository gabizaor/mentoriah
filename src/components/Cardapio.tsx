import gabizona from '../assets/mentores/gabizona.png'

export const Cardapio = () => {
    return (
        <div className="min-h-screen font-mono overflow-y-auto flex flex-col items-center justify-center">
            <h1 className="font-bold text-2xl text-center mb-8">
                Conheça os nossos mentores:
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-4xl min-h-full">
                {/* Gabi */}
                <div className="flex items-center bg-gray-300 px-8 py-10 space-x-8 border-transparent rounded-lg">
                    <img
                        src={gabizona}
                        alt="Imagem de Gabrielly Reis"
                        className="w-32 h-32 border-4 border-rounded items-start"
                    />
                    <div className="space-y-4">
                        <p><span className="font-bold">nome e idade:</span> Gabrielly Reis, 23 anos</p>
                        <p><span className="font-bold">bandeira:</span> lésbica</p>
                        <p><span className="font-bold">área de atuação:</span> desenvolvedora frontend</p>
                        <p>Oi, eu sou a Gabi! :) Sou a idealizadora e desenvolvedora do <span className="font-bold">mentoriah.</span> Me interessei por programação em 2022 e comecei a estudar com os conteúdos que encontrava na internet. Atualmente, trabalho há 8 meses com programação.</p>
                    </div>
                </div>
                <div className="">
                    {/* Espaço para conteúdo adicional */}
                </div>
            </div>
        </div>
    );
};
