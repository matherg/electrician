import { scrollToSection } from "./Header.tsx";
import { useState, useEffect } from "react";

const MainSection = () => {
    const images = ['/liv_1.jpg', '/liv_2.jpg', '/liv_3.jpg'];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 8000); 

        return () => clearInterval(intervalId); // Cleanup on component unmount
    }, []);

    return (
        <div id="main" className="relative w-full mt-10 min-h-[100vh] flex items-center justify-center">
            {images.map((image, index) => (
                <div
                    key={image}
                    className={`absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed transition-opacity duration-[2000ms]  ${
                        index === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ backgroundImage: `url('${image}')` }}
                ></div>
            ))}

            {/* Blue Background with Opacity */}
            <div className="absolute top-0 left-0 w-full h-full bg-bloo bg-opacity-80"></div>

            {/* Content */}
            <div className="relative z-10 text-center">
                <h1 className="text-6xl font-bold mb-4 text-white">Ascent Electric</h1>
                <h2 className="text-5xl font-bold mb-4 text-green">"The reliable electrician"</h2>
                <button onClick={() => scrollToSection('services')} className="bg-white text-bloo px-6 py-3 rounded-lg">
                    Contact Us
                </button>
            </div>
        </div>
    );
};

export default MainSection;
