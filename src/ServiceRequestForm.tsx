import { useState } from 'react';

const Form = () => {
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
        'Service Option 1',
        'Service Option 2',
        'Service Option 3',
        'Service Option 4',
        'Service Option 5'
    ];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // Add form submission logic here
    };

    return (
        <div className="flex flex-col items-center justify-center h-3/5  bg-bloo">
            <h1 className="text-lg md:text-4xl font-bold text-center text-green mt-8 mb-2">Request a Service</h1>
            <form onSubmit={handleSubmit} className="space-y-4 items-center max-w-lg bg-white font-semibold text-bloo  mt-10 p-4 rounded-lg shadow-md">
                <div className="flex items-center  gap-2">
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

export default Form;
