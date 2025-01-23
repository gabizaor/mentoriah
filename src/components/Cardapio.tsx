import { MentorList } from './MentorList';

export const Cardapio = () => {
    return (
        <><div className="min-h-screen font-mono flex flex-col items-center justify-center bg-gray-100">
            <div className="py-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-gray-800">
                    Passos para o Mentorado
                </h2>
                <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl px-4">
                    {/* Step 1 */}
                    <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl flex-1 min-w-[300px] max-w-[400px]">
                        <h3 className="text-xl font-semibold text-amber-600 mb-3">Passo 1</h3>
                        <p className="text-gray-700">
                            Veja a nossa lista de mentores e selecione o mentor com quem você mais se identificar.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl flex-1 min-w-[300px] max-w-[400px]">
                        <h3 className="text-xl font-semibold text-amber-600 mb-3">Passo 2</h3>
                        <p className="text-gray-700">
                            Preencha o formulário no link abaixo para que possamos saber mais sobre você e suas necessidades:
                        </p>
                        <a
                            href="https://forms.gle/HHGNACSbjS4G8r6B9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-amber-600 font-bold underline mt-3 block"
                        >
                            Preencher Formulário
                        </a>
                    </div>

                    {/* Step 3 */}
                    <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl flex-1 min-w-[300px] max-w-[400px]">
                        <h3 className="text-xl font-semibold text-amber-600 mb-3">Passo 3</h3>
                        <p className="text-gray-700">
                            Aguarde! Entraremos em contato em breve para dar continuidade ao processo.
                        </p>
                    </div>
                </div>
            </div>
        </div>
            <h1 className="font-extrabold text-3xl text-center mb-12 mt-12 text-gray-800">
                Conheça os nossos mentores:
            </h1>
            <MentorList />
        </>
    );
};
