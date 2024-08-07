import {scrollToSection} from "./Header.tsx";


const MainSection = () => {
    return (
        <div id="main" className="relative bg-bloo text-white w-full mt-10 min-h-[100vh] flex items-center justify-center">
            {/* Background Image with Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-bloo opacity-80">
                <img src="/mountain.jpg" alt="Background" className="w-full h-full object-cover" style={{ opacity: 0.2 }} />
            </div>
            {/* Content */}
            <div className="text-center z-10">
                <h1 className="text-6xl font-bold mb-4 text-white">Ascent Electric</h1>
                <h2 className="text-5xl font-bold mb-4 text-green">"Miles above the rest"</h2>
                <button onClick={() => scrollToSection('services')} className="bg-white text-bloo px-6 py-3 rounded-lg">Contact Us</button>
            </div>
        </div>
    );
};

export default MainSection;