import {scrollToSection} from "./Header.tsx";

const MainSection = () => {
    return (
        <div id="main" className="bg-bloo text-white w-full mt-10 h-[80vh] flex items-center justify-center ">
            <div className="text-center">
                <h1 className="text-6xl text-white font-bold mb-4 ">Ascent Electric</h1>
                <h2 className="text-5xl text-green font-bold mb-4 ">"Miles above the rest"</h2>
                <button onClick={() => scrollToSection('services')} className="bg-white text-bloo px-6 py-3 rounded-lg">Contact Us</button>
            </div>
        </div>
    );
};

export default MainSection;