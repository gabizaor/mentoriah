import { Cardapio } from "../components/Cardapio";

export const Mentores = () => {
    return (
        <div className="min-h-screen font-mono overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-full">
                {/* Coluna da esquerda: Conteúdo de texto */}
                <div className="flex flex-col items-start justify-center bg-white px-8 space-y-4 py-10">
                    <h1 className="text-3xl font-bold">Oi, tudo bem? Que bom que você chegou até aqui =P</h1>
                    <h1 className="text-lg">Somos um projeto em desenvolvimento, então o nosso cardápio de mentores ainda está sendo montado.</h1>
                    <h1 className="text-lg">Nossos mentores são de diferentes nichos do TI e estão em momentos de carreira distintos. Temos certeza de que algum deles conseguirá te auxiliar.</h1>
                    <h1 className="text-lg">À medida que o nosso projeto fica mais conhecido, mais mentores temos a oferecer. Compartilhe e ajude o <span className="font-bold">mentoriah</span> a alcançar novos patamares.</h1>
                    <p className="text-xs font-bold">
                        *o mentoriah é um projeto de voluntariado. não temos fim lucrativo, nosso objetivo é apenas o de fornecer suporte para a comunidade.
                    </p>
                </div>

                {/* Coluna da direita: Imagem de fundo */}
                <div className="bg-bg-mentores bg-cover bg-center bg-no-repeat min-h-full"></div>
            </div>
            <Cardapio />
        </div>
    );
};
