import AlternatingSection from "./AlternatingSection.tsx";


const PictureSection = () => {
    const text1 = "Our twenty years of experience have taught us how to do the job at a fair price and on time. We are confident that you will have a satisfying experience when you choose to use our services. It’s a promise we’ll keep!";
    const text2 = "Having been in business for more than 20 years, we are the best in this field. So we know how to fix all of your electrical issues. If it’s to do with electricity we cover it. Commercial and residential!";
    const text3 = "Ascent electric is a professional electrical contracting service that has been operating in summit county colorado since 2001. Our service area covers Dillon, Silverthorne, Breckenridge, Frisco, and Eagle-vail.";
    return (
        <div className="bg-gradient-to-b from-white from-5%  to-95% to-bloo w-full">
            <AlternatingSection text={text1} bg={"bg-bloo"} textColor={"text-white"}
            direction={"right"} imageSrc={"/meet_the_team.jpg"}   title="Serving CO since 2001"/>
            <AlternatingSection text={text2} bg={"bg-fadedbluegrey"} textColor={"text-white"} title={"Experience and Flexibility"} imageSrc={"/planning.jpg"} direction={"left"}/>
            <AlternatingSection text={text3} bg={"bg-white"} textColor={"text-bloo"} title={"On Time and On Budget"} imageSrc={"/jon_level.jpg"} direction={"right"}/>
        </div>
    );
};

export default PictureSection;
