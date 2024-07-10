import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import './register.css';

const Register = ({ handleRegister }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [age, setAge] = useState(''); 
    const [address, setAddress] = useState('');
    const [gender, setGender] = useState(''); 
    const [phoneNumber, setPhoneNumber] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [pincode, setPincode] = useState(''); 
    const [dob, setDOB] = useState(''); 
    const [city, setCity] = useState(''); 
    const [state, setState] = useState(''); 
    const [country, setCountry] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            id: uuid(),
            username,password,confirmpassword,age,address,gender,phoneNumber,email,pincode,dob,city,state,country
        };
        navigate('/login');
    };

    return (
        <div className="form-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <input type="password" placeholder=" Confirm Password" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                <input type="text" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} required />
                <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required />
                <input type="text" placeholder="Gender" value={gender} onChange={(e) => setGender(e.target.value)} required />
                <input type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="text" placeholder="pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} required />
                <input type="date" placeholder="DOB" value={dob} onChange={(e) => setDOB(e.target.value)} required />
                <input type="text" placeholder="city" value={city} onChange={(e) => setCity(e.target.value)} required />
                <input type="text" placeholder="state" value={state} onChange={(e) => setState(e.target.value)} required />
                <input type="text" placeholder="country" value={country} onChange={(e) => setCountry(e.target.value)} required />

                <button type="submit">Register</button>
                <p>Already registered?<a href="/login">Login</a></p>

            </form>
        </div>
    );
};

export default Register;