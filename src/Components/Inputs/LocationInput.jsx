import React from 'react';
import { Controller } from 'react-hook-form';

function LocationInput({ control, errors }) {
  return (
    <div className='parent_inputs'>
      <label htmlFor="location"></label>
      <Controller
        name="location"
        control={control}
        rules={{ required: 'Location is required' }}
        render={({ field }) => <input className='inputs' placeholder='Enter Location' {...field} />}
        
      />
      {errors.location && alert(errors.location.message)}
    </div>
  );
}

export default LocationInput;
