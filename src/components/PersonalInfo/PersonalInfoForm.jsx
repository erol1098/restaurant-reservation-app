import React from 'react';

import FormWrapper from '../../Layouts/Form/Form';

const PersonalInfoForm = () => {
  return (
    <FormWrapper>
      <label htmlFor='firstName'>First Name</label>
      <input
        type='text'
        name='firstName'
        id='firstName'
        placeholder='Enter yor first name...'
      />
      <label htmlFor='lastName'>Last Name</label>
      <input
        type='text'
        name='lastName'
        id='lastName'
        placeholder='Enter yor last name...'
      />
      <label htmlFor='birth'>Birth Date</label>
      <input type='date' name='birth' id='birth' />
      <button type='submit'>Next Step</button>
    </FormWrapper>
  );
};

export default PersonalInfoForm;
