
const AlternatingSection = ({ direction, imageSrc,bg, textColor, title, text }) => {
    const isReversed = direction === 'right';

    return (
        <div className={`flex ${isReversed ? 'flex-row-reverse' : 'flex-row'} justify-between items-center w-full lg:px-20 py-10`}>
            {/* Image Section */}
            <div className="w-full lg:w-1/2">
                <img className="w-full h-auto rounded-2xl object-cover shadow-lg" src={imageSrc} alt="Team"/>
            </div>
            {/* Text Section */}
            <div className={`w-full lg:w-1/2 lg:max-w-lg ${bg} ${textColor} p-8 mx-auto rounded-2xl shadow-lg`}>
                <h2 className="text-2xl font-semibold lg:text-3xl">{title}</h2>
                <p className="mt-4">
                    {text}
                </p>
            </div>
        </div>
    );
};

export default AlternatingSection;