import './App.css'
import MainSection from "./MainSection.tsx";
import ServicesSection from "./ServicesSection.tsx";
import Footer from "./Footer.tsx";
import Header from "./Header.tsx";
import AlternatingSection from "./AlternatingSection.tsx";
import AlternatingSectionLeft from "./AlternatingSectionLeft.tsx";
import AlternatingSectionBlue from "./AlternatingSectionBlue.tsx";
import ServiceRequestForm from "./ServiceRequestForm.tsx";

function App() {

  return (
    <>
    <Header/>
        <MainSection/>
        <ServicesSection/>
        <AlternatingSection />
        <AlternatingSectionLeft/>
        <AlternatingSectionBlue/>
        <ServiceRequestForm/>
        <Footer/>

    </>
  )
}

export default App
