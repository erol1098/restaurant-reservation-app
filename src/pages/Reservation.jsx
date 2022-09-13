import React from 'react';

import PersonalInfoForm from '../components/PersonalInfo/PersonalInfoForm';
import Container from '../Layouts/Container/Container';

const Reservation = () => {
  return (
    <Container>
      <h1>Personal Info</h1>
      <PersonalInfoForm />
    </Container>
  );
};

export default Reservation;
