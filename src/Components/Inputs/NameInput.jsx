import React from 'react';
import { Controller } from 'react-hook-form';

function NameInput({ control, errors }) {
  return (
    <div className='parent_inputs'>
      <label htmlFor="fullName"></label>
      <Controller
        name="fullName"
        control={control}
        rules={{ required: 'Name is required' }}
        render={({ field }) => <input className='inputs' placeholder='Enter FullName' {...field} />}
      />
      {errors.fullName && alert(errors.fullName.message)}
    </div>
  );
}

export default NameInput;
