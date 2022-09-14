import React from 'react';

import { Form } from 'formik';

import FormWrapper from '../Layouts/Form/Form';

const PersonalInfoForm = ({ values, handleChange, errors }) => {
  return (
    <FormWrapper>
      <Form>
        {errors && <p>{errors.firstName}</p>}
        <label htmlFor='firstName'>First Name</label>
        <input
          type='text'
          name='firstName'
          id='firstName'
          placeholder='Enter yor first name...'
          value={values.firstName}
          onChange={handleChange}
        />
        <label htmlFor='lastName'>Last Name</label>
        <input
          type='text'
          name='lastName'
          id='lastName'
          placeholder='Enter yor last name...'
          value={values.lastName}
          onChange={handleChange}
        />
        <label htmlFor='birth'>Birth Date</label>
        <input type='date' name='birth' id='birth' />

        <label htmlFor='gender'>Gender</label>

        <select name='gender' id='gender'>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
          <option value='other'>Other</option>
          <option value='not'>Prefer not to specify</option>
        </select>

        <button type='submit'>Next Step</button>
      </Form>
    </FormWrapper>
  );
};

export default PersonalInfoForm;
