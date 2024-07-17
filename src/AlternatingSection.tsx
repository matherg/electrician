
const AlternatingSection = () => {
    return (
        <div className="flex justify-end lg:px-20 w-full">
            <div className="relative max-w-5xl mt-10  xl:max-w-6xl">
                {/* Image and Text Wrapper */}
                <div className="flex flex-col lg:flex-row-reverse justify-center  mx-auto">
                    {/* Image Section */}
                    <div className="w-full h-64 lg:w-1/2 lg:h-auto">
                        <img className="h-full w-full object-cover" src="/mountain.jpg" alt="Winding mountain road"/>
                    </div>
                    {/* Text Section */}
                    <div className=" bg-grey md:max-w-2xl rounded-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-1/2 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
                        <div className="flex flex-col p-8 py-10 ">
                            <h2 className="text-2xl font-semibold  text-black lg:text-4xl">Serving CO since 2001</h2>
                            <p className="mt-4 text-white">
                                Ascent electric is a professional electrical contracting service that has been operating in summit county colorado since 2001. Our service area covers Dillon, Silverthorne, Breckenridge, Frisco, and Eagle-vail.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlternatingSection;
