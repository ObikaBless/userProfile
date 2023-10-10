// for study purpose 

import React, { useState } from 'react';
import './MyForm.css'

const MyForm = () => {

    // creating state variables for the form fields 

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [location, setLocation] = useState('');
    const [gender, setGender] = useState('');
    const [bio, setBio] = useState('');
    const [image, setImage] = useState('');

    // form submission handler 

    const handleSubmit = (e) => {
        e.preventDefault();

        // printing form data on the console 
        console.log('Form data submitted:', {name, email, phone, location, gender, bio, image})
    };
  return (
    <>
     <section>
     <form onSubmit={handleSubmit} className='MyForm'>
        <div>
            <label htmlFor="name">FullName:</label>
            <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>

        <div>
            <label htmlFor="email">Enter Email:</label>
            <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div>
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" name="phone" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
        </div>

        <div>
            <label htmlFor="email">Enter Location:</label>
            <input type="text" name="location" id="location" value={location} onChange={(e) => setLocation(e.target.value)}/>
        </div>

        <div>
            <label htmlFor="gender">Enter Gender:</label>
            <select name="gender" id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="gender">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
        </div>

        <div>
            <label htmlFor="bio">Enter Bio:</label>
            <textarea name="bio" id="bio" value={bio} onChange={(e) => setBio(e.target.value)}>

            </textarea>
        </div>

        <div>
            <label htmlFor="image">Choose File:</label>
            <input type="file" name="image" id="image" value={image} onChange={(e) => setImage(e.target.value)}/>
        </div>

        <button type='submit'>Submit</button>

      </form>
     </section>
    </>
  )
}

export default MyForm
