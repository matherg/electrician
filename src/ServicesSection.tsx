const ServicesSection = () => {
    return (
        <div id="about" className="bg-gradient-to-b from-bloo to-white w-full pt-36  pb-16">
            <div className="container  mx-auto px-4">
                <h2 className="text-4xl text-white font-bold text-center mb-8">What We Do</h2>
                <p className=" text-lg text-white text-center font-semibold mb-6">
                    Ascent Electric handles projects of all sizes, from small installations to large, complex systems. We design and install electrical solutions tailored to your building’s needs. Our experience spans commercial and residential sectors, including multifamily residences, ski shops, and custom homes. With Ascent Electric, you get reliable, high-quality service delivered on time and within budget.
                </p>
                <div className="bg-white p-6 mx-auto rounded-lg md:w-1/3 w-3/4 shadow-lg">
                    <h3 className="text-xl font-bold text-blue mb-4">Services</h3>
                    <ul className="list-disc list-inside space-y-2 text-bloo">
                        <li className="font-medium">EV Chargers</li>
                        <li className="font-medium">Service Changes</li>
                        <li className="font-medium">New Construction</li>
                        <li className="font-medium">Ski Shops</li>
                        <li className="font-medium">Remodels / Additions</li>
                        <li className="font-medium">Panel Changes</li>
                        <li className="font-medium">Battery Backup Systems</li>
                        <li className="font-medium">Retrofitting</li>
                        <li className="font-medium">Hot Tubs</li>
                        <li className="font-medium">Heat Tape</li>
                        <li className="font-medium">Floor Heat</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;
