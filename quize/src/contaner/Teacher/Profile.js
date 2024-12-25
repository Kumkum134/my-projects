import React, { useState } from "react";
import "./TProfile.css";
import logo2 from './image/Profile Pic.jpeg';
import logo from './image/logo.png';
import SProfile from "./image/Profile Pic.jpeg";
import { Link,useNavigate,useLocation } from "react-router-dom";
const Profile =()=>{
    return(
        <div className="TProfile">
        <img src={SProfile} alt="profile" className="img2" />
        <p>My Profile</p>
        <p>Email</p>
        <Link to={"/TEdit"}><input type="button" className="Tbtn1" value="Edit Profile" /></Link>
        <Link to={"/TCreate"}><input type="button" className="Tbtn1" value="List of Quiz" /></Link>
        <Link to={"/login"}><input type="button" className="Tbtn2" value="Logout" /></Link>
    </div>
    );
}
export const TeacherEdit = () => {
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

        navigate('profile-summary', { state: teacherData });
    };

    return (<>
        <img src={logo} alt="logo" className="logo5" />
        <div className="Tedit-container">
            <h1>Teacher Profile</h1> <span>Edit Profile</span>
            <div className="Tedit-content">
                <div className="Tedit-image-section">
                    <img src={profileImage} alt="profile" />
                    <input type="file" id="file-input" className="Tedit-file-input-hidden" onChange={handleImageChange}/>
                    <label htmlFor="file-input" className="Tedit-file-input-label">+</label>
                </div>
                <div className="Tedit-form">
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" className="Tedit-input" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" className="Tedit-input" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    <label htmlFor="email">Email</label>
                    <input type="email" className="Tedit-input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" className="Tedit-input" placeholder="+91" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <label htmlFor="gender">Gender</label>
                    <select className="Tedit-input" value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    <button className="Tedit-save-button" onClick={handleSave}>Save</button>
                </div>
            </div>
        </div>
    </>
    );
};
export const ProfileSummary = () => {
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

export default Profile;