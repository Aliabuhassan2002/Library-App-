



import { useState } from 'react';
import axios from "axios";

import database from '../firebase';
// import './App.css';


function SignUp() {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // State to store the form data
    const [formData, setFormData] = useState({
        name: "",
        email: "",
    });

    // Function to handle form input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Function to submit the form data using Axios
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://reactt-53189-default-rtdb.firebaseio.com/users.json", formData);
            alert("account created successfully");
        } catch (error) {
            console.error("Error creating post:", error);
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#f3f4f6' }}>
            <form onSubmit={handleSubmit} style={{ backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', width: '320px' }}>
                <label style={{ display: 'block', marginBottom: '12px' }}>
                    <span style={{ color: '#374151' }}>Name:</span>
                    <input
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        style={{ marginTop: '4px', display: 'block', width: '100%', padding: '8px', border: '1px solid #d1d5db', borderRadius: '4px' }}
                    />
                </label>
                <label style={{ display: 'block', marginBottom: '12px' }}>
                    <span style={{ color: '#374151' }}>Email:</span>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={{ marginTop: '4px', display: 'block', width: '100%', padding: '8px', border: '1px solid #d1d5db', borderRadius: '4px' }}
                    />
                </label>
                <button type="submit" style={{ width: '100%', backgroundColor: '#3b82f6', color: 'white', padding: '8px', borderRadius: '4px', cursor: 'pointer', border: 'none' }}>Submit</button>
            </form>
        </div>
    );
};

export default SignUp;



















////////////////////////////////////////

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert(`Hello, ${name}! Your email is ${email}.`);
//     };

//     return (
//         <div className='form-container'>
//             <h1>{name}</h1>
//             <form onSubmit={handleSubmit} className="form">
//                 <label className="label">
//                     Name:
//                     <input
//                         type="text"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         className="input"
//                     />
//                 </label>
//                 <label className="label">
//                     Email:
//                     <input
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         className="input"
//                     />
//                 </label>
//                 <button type="submit" className="button">Submit</button>
//             </form>
//         </div>
//     );
// }