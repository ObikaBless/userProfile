import React from 'react';
import { useForm } from 'react-hook-form';
import NameInput from '../Inputs/NameInput';
import EmailInput from '../Inputs/EmailInput';
import LocationInput from '../Inputs/LocationInput';
import PhoneNumberInput from '../Inputs/PhoneNumberInput';
import ImageInput from '../Inputs/ImageInput';
import BioInput from '../Inputs/BioInput';
import GenderInput from '../Inputs/GenderInput';
import './MyForm.css';

function MyForm() {
  const { handleSubmit, control, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className='content-wrapper'>
      <form onSubmit={handleSubmit(onSubmit)} className='MyForm'>
        <NameInput control={control} errors={errors} />
        <EmailInput control={control} errors={errors} />
        <LocationInput control={control} errors={errors} />
        <PhoneNumberInput control={control} errors={errors} />
        <ImageInput control={control} errors={errors} />
        <BioInput control={control} errors={errors} />
        <GenderInput control={control} errors={errors} />

        <div className='flex justify-center gap-[3rem] text-xl text-white mt-6 mb-6'>
        <button className='formBtn' type="submit">Submit</button>
        <button className='formBtn' type="button" onClick={() => reset()}>Reset</button>
        </div>
      </form>
    </section>
  );
}

export default MyForm;
