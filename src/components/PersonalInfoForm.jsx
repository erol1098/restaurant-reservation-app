import React from 'react';

import { Form, Field } from 'formik';

import FormWrapper from '../Layouts/Form/Form';

const PersonalInfoForm = ({ values, handleChange, errors }) => {
  console.log('birth', values.birth);
  return (
    <FormWrapper>
      <Form>
        <label htmlFor='firstName'>First Name</label>
        <input
          type='text'
          name='firstName'
          id='firstName'
          placeholder='Enter yor first name...'
          value={values.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <p>* {errors.firstName}</p>}
        <label htmlFor='lastName'>Last Name</label>
        <input
          type='text'
          name='lastName'
          id='lastName'
          placeholder='Enter yor last name...'
          value={values.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <p>* {errors.lastName}</p>}
        <label htmlFor='birth'>Birth Date</label>

        <input
          type='date'
          name='birth'
          id='birth'
          value={values.birth}
          onChange={handleChange}
        />
        {errors.birth && <p>* {errors.birth}</p>}
        <label htmlFor='gender'>Gender</label>
        <select
          name='gender'
          id='gender'
          value={values.gender}
          onChange={handleChange}
        >
          <option value=''>--Select Gender--</option>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
          <option value='other'>Other</option>
          <option value='not'>Prefer not to specify</option>
        </select>
        {errors.gender && <p>* {errors.gender}</p>}
        <button type='submit'>Next Step</button>
      </Form>
    </FormWrapper>
  );
};

export default PersonalInfoForm;
