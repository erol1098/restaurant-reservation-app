import React from 'react';

import { Formik } from 'formik';

import PersonalInfoForm from '../components/PersonalInfoForm';
import Container from '../Layouts/Container/Container';
import { userInfoSchema } from '../validations/userValidation';

const Reservation = () => {
  return (
    <Container>
      <h1>Personal Info</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          birth: '',
          gender: '',
        }}
        validationSchema={userInfoSchema}
        onSubmit={(values) => console.log(values)}
        component={(props) => <PersonalInfoForm {...props} />}
        validateOnChange={false}
        validateOnBlur={false}
      ></Formik>
    </Container>
  );
};

export default Reservation;
