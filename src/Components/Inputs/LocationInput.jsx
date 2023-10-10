import React from 'react';
import { Controller } from 'react-hook-form';

function LocationInput({ control, errors }) {
  return (
    <div className='parent_inputs'>
      <label htmlFor="location">Location:</label>
      <Controller
        name="location"
        control={control}
        rules={{ required: 'Location is required' }}
        render={({ field }) => <input className='inputs' {...field} />}
      />
      {errors.location && alert(errors.location.message)}
    </div>
  );
}

export default LocationInput;
