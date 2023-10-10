import React from 'react';
import './SignUp.css';
import MyForm from '../MyForm/MyForm';
import { Link } from "react-router-dom";



const SignUp = () => {
  return (

    <section>
      <MyForm />

      <li className='text-center list-none'>
        <Link className='link' to='/Login'>Already have an Account? Login Here</Link>
      </li>
    </section>

  )
}

export default SignUp
