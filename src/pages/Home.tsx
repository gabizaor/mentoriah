import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
    const [isMentoradoVisible, setIsMentoradoVisible] = useState(false);

    const handleButtonClick = () => {
        setIsMentoradoVisible(!isMentoradoVisible);
    };

    return (
        <div className="overflow-x-hidden font-sans">
            {/* Hero Section */}
            <div className="container bg-hero-pattern bg-top bg-cover w-full bg-bg-home mx-auto flex flex-col justify-center items-center h-screen relative px-6">
                {/* Header Message */}
                <div className="absolute top-6 left-6 right-6 text-center text-slate-900">
                    <h1 className="text-2xl md:text-4xl font-bold bg-white p-3 shadow-lg rounded-lg">
                        Queremos ver cada vez mais pessoas LGBTQIA+ na tecnologia 😊
                    </h1>
                    <p className="text-base md:text-lg font-medium mt-4 bg-white p-3 shadow rounded-lg">
                        Pensando nisso, o <span className="font-bold text-amber-500">mentoriah</span> conecta pessoas LGBTQIA+ que querem iniciar na TI com aquelas que já estão no mercado.
                    </p>
                </div>

                {/* Call to Action */}
                <div className="flex flex-col justify-center items-center h-full gap-6 mt-24 md:mt-0 relative">
                    <h2 className="text-lg md:text-2xl font-medium bg-slate-50 p-4 shadow-md rounded-lg text-center max-w-lg">
                        Converse com quem pode te ajudar a dar os primeiros passos rumo à sua carreira na tecnologia. Tudo isso gratuitamente!
                    </h2>
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                        <Link to='/mentores' className='w-full md:w-auto'>
                            <button
                                className="bg-amber-400 text-white font-semibold py-3 px-6 rounded-lg hover:bg-amber-600 transition-colors shadow-md w-full md:w-auto"
                                onClick={handleButtonClick}
                            >
                                Quero ser mentorado
                            </button>
                        </Link>

                        <Link to="/quero-ser-um-mentor" className="w-full md:w-auto">
                            <button className="bg-amber-400 text-white font-semibold py-3 px-6 rounded-lg hover:bg-amber-600 transition-colors shadow-md w-full">
                                Quero ser mentor
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
