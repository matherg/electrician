import AlternatingSection from "./AlternatingSection.tsx";


const PictureSection = () => {
    const text1 = "We started as a one-person company and have since grown to 8 employees. We value providing locals with the opportunity to learn this trade with excellence, ensuring proper mentorship and standards are being maintained across all of our sites. We look forward to the opportunity to partner with you! For all project requests, please fill out the form below, and we will be in touch.";
    const text2 = "With over 20 years of experience, Ascent Electric handles all your electrical needs—commercial or residential. Our expertise and adaptable approach ensure every project is completed efficiently and to your satisfaction. It’s a promise we stand by.";
    const text3 = "At Ascent Electric, we respect your time and investment. We deliver projects efficiently, on schedule, and within budget. Serving Dillon, Silverthorne, Breckenridge, Frisco, and Eagle-Vail, we bring reliable electrical solutions right to your community.";
    return (
        <div className="bg-gradient-to-b from-white from-5%  to-95% to-bloo w-full">
            <AlternatingSection text={text1} bg={"bg-bloo"} textColor={"text-white"}
            direction={"right"} imageSrc={"/meet_the_team.jpg"}   title="Serving CO since 1998"/>
            <AlternatingSection text={text2} bg={"bg-fadedbluegrey"} textColor={"text-white"} title={"Experience and Flexibility"} imageSrc={"/planning.jpg"} direction={"left"}/>
            <AlternatingSection text={text3} bg={"bg-white"} textColor={"text-bloo"} title={"On Time and On Budget"} imageSrc={"/jon_level.jpg"} direction={"right"}/>
        </div>
    );
};

export default PictureSection;
