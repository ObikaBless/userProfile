import React from 'react';
import { Controller } from 'react-hook-form';

function BioInput({ control, errors }) {
  return (
    <div className='parent_inputs'>
      <label htmlFor="bio"></label>
      <Controller
        name="bio"
        control={control}
        rules={{ required: 'Bio is required' }}
        render={({ field }) => <textarea className='inputs' placeholder='Enter Bio' {...field} />}
      />
      {errors.bio && alert(errors.bio.message)}
    </div>
  );
}

export default BioInput;
