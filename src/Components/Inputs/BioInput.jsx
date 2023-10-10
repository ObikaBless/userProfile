import React from 'react';
import { Controller } from 'react-hook-form';

function BioInput({ control, errors }) {
  return (
    <div className='parent_inputs'>
      <label htmlFor="bio">Enter Description</label>
      <Controller
        name="bio"
        control={control}
        rules={{ required: 'Bio is required' }}
        render={({ field }) => <textarea className='inputs' {...field} />}
      />
      {errors.bio && alert(errors.bio.message)}
    </div>
  );
}

export default BioInput;
