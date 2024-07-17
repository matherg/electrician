import { useState } from 'react';

const ServiceRequestForm = () => {
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

    const handleSubmit = (e : any) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    return (
        <div id="services" className="flex flex-col items-center justify-center h-3/5 bg-bloo">
            <h1 className="md:text-4xl text-2xl font-bold text-center text-green mt-20 ">Request a Service</h1>
            <form onSubmit={handleSubmit} className="space-y-4 items-center max-w-lg bg-white font-semibold text-bloo  mt-10 p-4 rounded-lg shadow-md">
                <div  className="flex items-center  gap-2">
                    <input
                        type="checkbox"
                        name="urgent"
                        checked={formData.urgent}
                        onChange={handleChange}
                        className="accent-blue-500"
                    />
                    <label >Urgent (within the week)</label>
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
