import React from 'react';
import { Controller } from 'react-hook-form';

function PhoneNumberInput({ control, errors }) {
  return (
    <div className='parent_inputs'>
      <label htmlFor="phoneNumber"></label>
      <Controller
        name="phoneNumber"
        control={control}
        rules={{ required: 'Phone Number is required' }}
        render={({ field }) => <input type='tel' className='inputs' placeholder='Phone Number' {...field} />}
      />
      {errors.phoneNumber && alert(errors.phoneNumber.message)}
    </div>
  );
}

export default PhoneNumberInput;
