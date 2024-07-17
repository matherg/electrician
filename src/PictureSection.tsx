import AlternatingSection from "./AlternatingSection.tsx";
import AlternatingSectionLeft from "./AlternatingSectionLeft.tsx";
import AlternatingSectionBlue from "./AlternatingSectionBlue.tsx";

const PictureSection = () => {
    return (
        <div className="bg-gradient-to-b from-white from-5%  to-95% to-bloo w-full">
            <AlternatingSection/>
            <AlternatingSectionLeft/>
            <AlternatingSectionBlue/>
        </div>
    );
};

export default PictureSection;
