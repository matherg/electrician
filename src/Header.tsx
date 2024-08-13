export const scrollToSection = (sectionId : any) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    else {
        console.log("section not found" + sectionId)
    }
};
const Header = () => {
    return (
        <header className="bg-white z-20 drop-shadow-lg text-bloo w-full py-4 fixed top-0 left-0">
            <div className="flex items-center justify-between px-4 h-full" style={{ height: '6rem' }}>
                <div className="flex-1 flex justify-center items-center">
                    <div className="flex items-center h-full">
                        <img src="/logo.jpg" alt="Company Logo" className="max-h-32 hidden md:flex mr-4 object-contain" />
                    </div>
                </div>
                <div className="flex-1 md:flex hidden justify-center items-center">
                    <span className="text-2xl font-bold">Summit County, CO</span>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <nav className="flex flex-col items-end h-full">
                        <ul className="flex space-x-4 text-xl">
                            <li><button onClick={() => scrollToSection('main')}
                                        className="text-bloo font-bold hover:text-grey">Home
                            </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('about')}
                                        className="text-bloo font-bold hover:text-grey">About</button></li>
                            <li><button onClick={() => scrollToSection('services')} className="text-bloo font-bold hover:text-grey">Contact</button></li>
                        </ul>
                        <p className="text-bloo mt-2 text-sm md:text-base">ascentelectricinc@gmail.com</p>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
