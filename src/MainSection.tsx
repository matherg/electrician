import { scrollToSection } from "./Header.tsx";

const MainSection = () => {
    return (
        <div id="main" className="relative w-full mt-10 min-h-[100vh] flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/wiring.jpg')] bg-cover bg-center bg-no-repeat bg-fixed"></div>

            {/* Blue Background with Opacity */}
            <div className="absolute top-0 left-0 w-full h-full bg-bloo bg-opacity-80"></div>

            {/* Content */}
            <div className="relative z-10 text-center">
                <h1 className="text-6xl font-bold mb-4 text-white">Ascent Electric</h1>
                <h2 className="text-5xl font-bold mb-4 text-green">"Miles above the rest"</h2>
                <button onClick={() => scrollToSection('services')} className="bg-white text-bloo px-6 py-3 rounded-lg">
                    Contact Us
                </button>
            </div>
        </div>
    );
};

export default MainSection;
