import React, { useContext } from 'react';

import { Formik } from 'formik';

import PersonalInfoForm from '../components/PersonalInfoForm';
import Container from '../Layouts/Container/Container';
import {
  foodChoiceSchema,
  userInfoSchema,
} from '../validations/userValidation';
import AppContext from '../context/app-context';
import FoodChoiceForm from '../components/FoodChoiceForm';

const Reservation = () => {
  const { setUserInfo, setFoodChoice, flag, setFlag } = useContext(AppContext);
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
          <h1>Food Choice</h1>
          <Formik
            initialValues={{
              ingredients: [],
              // drink: '',
              // additional: '',
            }}
            validationSchema={foodChoiceSchema}
            onSubmit={(values) => console.log('fwef', values)}
            component={(props) => <FoodChoiceForm {...props} />}
            validateOnChange={false}
            validateOnBlur={false}
          />
        </>
      )}
    </Container>
  );
};

export default Reservation;
