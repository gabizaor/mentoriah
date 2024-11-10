import { Cardapio } from "../components/Cardapio";

export const Mentores = () => {
    return (
        <div className="min-h-screen font-sans overflow-y-auto bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-full">
                {/* Coluna da esquerda: Conteúdo de texto */}
                <div className="flex flex-col items-start justify-center bg-white px-10 py-12 md:py-24 space-y-6 md:space-y-8 shadow-lg rounded-md md:rounded-none mx-4 md:mx-0 mt-4 md:mt-0 md:shadow-none">
                    <h1 className="text-2xl md:text-4xl font-extrabold text-gray-800 leading-snug">
                        Oi, tudo bem? Que bom que você chegou até aqui! 😊
                    </h1>
                    <p className="text-md md:text-lg text-gray-700">
                        Somos um projeto em desenvolvimento, então o nosso cardápio de mentores ainda está sendo montado.
                    </p>
                    <p className="text-md md:text-lg text-gray-700">
                        Nossos mentores são de diferentes nichos do TI e estão em momentos de carreira distintos. Temos certeza de que algum deles conseguirá te auxiliar.
                    </p>
                    <p className="text-md md:text-lg text-gray-700">
                        À medida que o nosso projeto fica mais conhecido, mais mentores temos a oferecer. Compartilhe e ajude o <span className="font-semibold text-amber-600">mentoriah</span> a alcançar novos patamares.
                    </p>
                    <p className="text-sm text-gray-500 font-semibold">
                        *O mentoriah é um projeto de voluntariado. Não temos fins lucrativos, nosso objetivo é apenas o de fornecer suporte para a comunidade.
                    </p>
                </div>

                {/* Coluna da direita: Imagem de fundo */}
                <div className="bg-bg-mentores bg-cover bg-center bg-no-repeat min-h-full relative">
                    <div className="bg-black opacity-25 w-full h-full absolute inset-0 rounded-md md:rounded-none"></div>
                </div>
            </div>

            {/* Cardápio de Mentores */}
            <div className="bg-white py-16 px-6 md:px-12 lg:px-24 mt-10 shadow-lg rounded-t-lg">
                {/* <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    Conheça nossos Mentores
                </h2> */}
                <Cardapio />
            </div>
        </div>
    );
};
