
const AlternatingSectionLeft = () => {
    return (
        <div className="flex  justify-start w-full  lg:px-20">
            <div className="relative max-w-5xl mt-10 xl:max-w-6xl">
                {/* Image and Text Wrapper */}
                <div className="flex flex-col lg:flex-row justify-center items-center ">
                    {/* Image Section */}
                    <div className="w-full h-64 lg:w-1/2 lg:h-auto">
                        <img className="h-full w-full object-cover" src="/mountain.jpg" alt="Winding mountain road"/>
                    </div>
                    {/* Text Section */}
                    <div className="bg-green md:max-w-2xl rounded-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-1/2 lg:right-0 lg:mt-20 lg:mr-20 xl:mt-24 xl:mr-12">
                        <div className="flex flex-col p-8 py-10">
                            <h2 className="text-2xl font-medium  text-black lg:text-4xl">Lorem ipsum dolor sit</h2>
                            <p className="mt-4 text-white">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlternatingSectionLeft;
