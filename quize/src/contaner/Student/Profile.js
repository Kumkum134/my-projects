import React, { useState } from "react";
import { useNavigate,useLocation,Link } from 'react-router-dom';
import "./Profile.css"; 
import logo2 from './image/Profile Pic.jpeg';
import logo from './image/logo.png';
import SProfile from "./image/Profile Pic.jpeg";

const SProfiles = () => {
    return (
        <div className="SProfile">
            <img src={SProfile} alt="profile" className="img1" />
            <p>My Profile</p>
            <p>Email</p>
            <Link to={"/SEdit"}><input type="button" className="pbtn1" value="Edit Profile" /></Link>
            <Link to={"/SResult"}><input type="button" className="pbtn1" value="Result" /></Link>
            <Link to={"/SLogin"}><input type="button" className="pbtn2" value="Logout" /></Link>
        </div>
    );
}
export const StudentEdit = () => {
    const [profileImage, setProfileImage] = useState(logo2);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('male');
    const navigate = useNavigate();

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setProfileImage(URL.createObjectURL(file));
        }
    };

    const handleSave = () => {
        const teacherData = {
            profileImage,
            firstName,
            lastName,
            email,
            phone,
            gender,
        };

        navigate('Sprofile-summary', { state: teacherData });
    };

    return (<>
        <img src={logo} alt="logo" className="logo5" />
        <div className="Sedit-container">
            <h1>Student Profile</h1> <span>Edit Profile</span>
            <div className="Sedit-content">
                <div className="Sedit-image-section">
                    <img src={profileImage} alt="profile" />
                    <input type="file" id="file-input" className="Sedit-file-input-hidden" onChange={handleImageChange} />
                    <label htmlFor="file-input" className="Sedit-file-input-label">+</label>
                </div>
                <div className="Sedit-form">
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" className="Sedit-input" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" className="Sedit-input" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    <label htmlFor="email">Email</label>
                    <input type="email" className="Sedit-input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" className="Sedit-input" placeholder="+91" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <label htmlFor="gender">Gender</label>
                    <select className="Sedit-input" value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    <button className="Sedit-save-button" onClick={handleSave}>Save</button>
                </div>
            </div>
        </div>
    </>
    );
};
export const SProfileSummary = () => {
    const { state } = useLocation();
    const { profileImage, firstName, lastName, email, phone, gender } = state || {};

    return (<>
        <img src={logo} alt="logo" className="logo6" />
        <div className="profile-summary-container">
            <h1>Profile Summary</h1>
            {profileImage && <img src={profileImage} alt="profile" />}
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Gender: {gender}</p>
        </div>
    </>
    );
};

export default SProfiles;