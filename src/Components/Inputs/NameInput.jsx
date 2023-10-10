import React from 'react';
import { Controller } from 'react-hook-form';

function NameInput({ control, errors }) {
  return (
    <div className='parent_inputs'>
      <label htmlFor="fullName">Full Name</label>
      <Controller
        name="fullName"
        control={control}
        rules={{ required: 'Name is required' }}
        render={({ field }) => <input className='inputs' {...field} />}
      />
      {errors.fullName && alert(errors.fullName.message)}
    </div>
  );
}

export default NameInput;
