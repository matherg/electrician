import './App.css'
import MainSection from "./MainSection.tsx";
import ServicesSection from "./ServicesSection.tsx";
import Footer from "./Footer.tsx";
import Header from "./Header.tsx";
import ServiceRequestForm from "./ServiceRequestForm.tsx";
import PictureSection from "./PictureSection.tsx";

function App() {

  return (
    <>
    <Header/>
        <MainSection/>
        <ServicesSection/>
        <PictureSection/>
        <ServiceRequestForm/>
        <Footer/>
    </>
  )
}

export default App
