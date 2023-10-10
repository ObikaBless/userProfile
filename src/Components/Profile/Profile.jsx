import React from 'react';
import './Profile.css';
import image from '../../assets/man-wearing-smart-glasses-touching-virtual-screen 1.png';
import {BsFillStarFill} from 'react-icons/bs';
import {ImLocation} from 'react-icons/im';
import {BiEdit, BiSolidCloudDownload} from 'react-icons/bi'

const Profile = () => {
  return (
    <>
      <div className='container'>
        <div className="container-wraper">
      <div className="wraper">
        <div className='text-blue-400 text-2xl flex gap-[20rem]'>
        <BiSolidCloudDownload/>
      <BiEdit className=''/>
        </div>
      <div className='flex justify-center'>
          <img className='image' src={image} alt="" />
          </div>
          <h1 className='text-black font-bold text-2xl'>John Doe</h1>
          <span className='text-primaryColor'>johndoe420@gmail.com</span>
          <p className='text-primaryColor flex items-center justify-center gap-1 mb-4'><ImLocation/>15 Eagle way, New Jersey, Nigeria</p>
          <p className='bio text-primaryColor'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Enim accusamus ad nesciunt vel ab sunt, beatae 
            reiciendis dolorem labore magni autem aspernatur 
          </p>
          <div className="member">
            <p className='mr-[12rem] text-primaryColor'>MEMBERSHIP</p>
            <div className='flex justify-center gap-[6rem] mt-4'>
            <span className='text-orange-500 flex items-center gap-2'><BsFillStarFill/>Gold Member</span>
            <button className='btn'>Renew</button>
            </div>
          </div>
      </div>
        </div>
      </div>
    </>
  )
}

export default Profile
