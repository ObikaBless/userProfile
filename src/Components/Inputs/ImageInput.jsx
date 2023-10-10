import React from 'react';
import { Controller } from 'react-hook-form';

function ImageInput({ control, errors }) {
  return (
    <div className='parent_inputs'>
      <label htmlFor="image">Select File</label>
      <Controller
        name="image"
        control={control}
        rules={{ required: 'Image is required' }}
        render={({ field }) => <input type='file' {...field} />}
      />
      {errors.image && alert(errors.image.message)}
    </div>
  );
}

export default ImageInput;
