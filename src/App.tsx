import './App.css'
import MainSection from "./MainSection.tsx";
import ServicesSection from "./ServicesSection.tsx";
import Footer from "./Footer.tsx";
import Header from "./Header.tsx";
import ServiceRequestForm from "./ServiceRequestForm.tsx";
import PictureSection from "./PictureSection.tsx";
import {useState} from "react";

function App() {
    const [isModalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const openModal = (message: string) => {
        setModalContent(message);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };
  return (
    <>
    <Header/>
        <MainSection/>
        <ServicesSection/>
        <PictureSection/>
        <ServiceRequestForm openModal={openModal}/>
        <Footer/>
        {isModalVisible && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                    <p className="text-lg text-bloo">{modalContent}</p>
                    <button onClick={closeModal} className="mt-4 bg-bloo w-full text-white text-lg px-4 py-2 rounded hover:bg-grey transition-colors">
                        Close
                    </button>
                </div>
            </div>
        )}
    </>
  )
}

export default App
