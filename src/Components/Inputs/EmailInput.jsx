import React from 'react';
import { Controller } from 'react-hook-form';

function EmailInput({ control, errors }) {
  return (
    <div className='parent_inputs'>
      <label htmlFor="email"></label>
      <Controller
        name="email"
        control={control}
        rules={{ required: 'Email is required',
        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    }}
        render={({ field }) => <input className='inputs' placeholder='Enter Email' {...field} />}
      />
      {errors.email && alert(errors.email.message)}
    </div>
  );
}

export default EmailInput;
