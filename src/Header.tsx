

const Header = () => {
    return (
        <header className="bg-white z-20 drop-shadow-lg text-blue w-full py-4 fixed top-0 left-0">
            <div className="container mx-auto flex items-center justify-between px-4 h-full" style={{ height: '6rem' }}>
                <div className="flex items-center h-full">
                    <img src="/jonlogo.png" alt="Company Logo" className="h-full mr-4 object-contain" />
                    <span className="text-2xl font-bold">Ascent Electric</span>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <span className="text-2xl font-bold">Summit County, CO</span>
                </div>
                <nav className="flex flex-col  h-1/4 ">
                    <ul className="flex  space-x-8 ">
                        <li><a href="#" className="text-blue font-bold hover:text-grey">Home</a></li>
                        <li><a href="#" className="text-blue font-bold  hover:text-grey">About</a></li>
                        <li><a href="#" className="text-blue font-bold hover:text-grey">Contact</a></li>
                    </ul>
                    <p className="text-blue mt-2">ascentelectricinc@gmail.com</p>
                </nav>
            </div>
        </header>
    );
};

export default Header;