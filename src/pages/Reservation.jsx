import React, { useContext } from 'react';

import { Formik } from 'formik';

import PersonalInfoForm from '../components/PersonalInfoForm';
import Container from '../Layouts/Container/Container';
import { userInfoSchema } from '../validations/userValidation';
import AppContext from '../context/app-context';

const Reservation = () => {
  const { setUserInfo, flag, setFlag } = useContext(AppContext);
  return (
    <Container>
      {!flag && (
        <>
          <h1>Personal Info</h1>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              birth: '',
              gender: '',
            }}
            validationSchema={userInfoSchema}
            onSubmit={(values) => {
              setUserInfo(values);
              setFlag(true);
            }}
            component={(props) => <PersonalInfoForm {...props} />}
            validateOnChange={false}
            validateOnBlur={false}
          />
        </>
      )}
      {flag && (
        <>
          <h1>Personal Info</h1>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              birth: '',
              gender: '',
            }}
            validationSchema={userInfoSchema}
            onSubmit={(values) => setUserInfo(values)}
            component={(props) => <PersonalInfoForm {...props} />}
            validateOnChange={false}
            validateOnBlur={false}
          />
        </>
      )}
    </Container>
  );
};

export default Reservation;
