import { useState } from 'react';
interface ServiceRequestFormProps {
    openModal: (message: string) => void;
}
const ServiceRequestForm = ({ openModal } : ServiceRequestFormProps) => {
    const [formData, setFormData] = useState({
        urgent: false,
        description: '',
        email: '',
        phoneNumber: '',
        firstName: '',
        lastName: '',
        service: ''
    });
    const services = [
        'Other',
        'Heat Tape',
        'Hot Tubs',
        'Floor Heat',
        'Remodels / Additions',
        'Troubleshooting',
        'Battery Backup Systems',
        'EV-Chargers',
        'Panel Changes',
        'Service Changes'
    ];

    const handleChange = (e : any) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };
    // trigger net
    const handleSubmit = async (e : any) => {
        e.preventDefault();

        try {
            const response = await fetch('https://0faqyt69zf.execute-api.us-east-2.amazonaws.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                openModal('Thanks for reaching out! A team member will be in touch shortly.');
            } else {
                const errorData = await response.json();
                const errorMessage = errorData.message || 'An unexpected error occurred'; // Default message if none provided
                openModal(`Error: ${errorMessage}`);
            }
        } catch (error) {
            // Handle unexpected error
            console.error('Error submitting form:', error);
            openModal(`An unexpected error occurred`);
        }
    };


    return (
        <div id="services" className="flex flex-col items-center justify-center h-3/5 bg-bloo">
            <h1 className="md:text-4xl text-2xl font-semibold text-center text-green mt-20 ">Request a Service</h1>
            <form onSubmit={handleSubmit}
                  className="space-y-4 items-center max-w-lg bg-white font-semibold text-bloo  mt-10 p-4 rounded-lg shadow-md">
                <div className="flex items-center  gap-2">
                    <input
                        type="checkbox"
                        name="urgent"
                        checked={formData.urgent}
                        onChange={handleChange}
                        className="accent-blue-500"
                    />
                    <label>Urgent (within the week)</label>
                </div>
                <div>
                    <label className="block mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label className="block mb-1">Phone Number</label>
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="flex gap-4">
                    <div className="w-1/2">
                        <label className="block mb-1 ">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="w-1/2">
                        <label className="block mb-1">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                </div>
                <div>
                    <label className="block mb-1 ">Services</label>
                    <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md bg-white"
                    >
                        {services.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block mb-1 ">Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <button type="submit" className="w-full p-2 bg-green  rounded-md">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ServiceRequestForm;
