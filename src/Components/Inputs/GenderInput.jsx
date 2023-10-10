import React from 'react';
import { Controller } from 'react-hook-form';

function NameInput({ control, errors }) {
  return (
    <div className='parent_inputs'>
      <label htmlFor="fullName">Select Gender</label>
      <Controller
        name="fullName"
        control={control}
        rules={{ required: 'Name is required' }}
        render={({ field }) => (<select {...field}>
            <option value="">Select</option>
            <option value="John">Male</option>
            <option value="Jane">Female</option>
            {/* Add more options as needed */}
          </select>)}
      />
      {errors.fullName && alert(errors.fullName.message)}
    </div>
  );
}

export default NameInput;