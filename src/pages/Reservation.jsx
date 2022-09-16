import React, { useContext } from 'react';

import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

import PersonalInfoForm from '../components/PersonalInfoForm';
import Container from '../Layouts/Container/Container';
import FoodChoiceForm from '../components/FoodChoiceForm';

import {
  foodChoiceSchema,
  userInfoSchema,
} from '../validations/userValidation';
import AppContext from '../context/app-context';

const Reservation = () => {
  const navigate = useNavigate();
  const { setUserInfo, setFoodChoice, flag, setFlag } = useContext(AppContext);

  const handleCancel = () => {
    setUserInfo('');
    setFoodChoice('');
    setFlag(false);
    navigate('/');
  };

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
            component={(props) => (
              <PersonalInfoForm {...props} onCancel={handleCancel} />
            )}
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
              drink: 'N/A',
              additional: 'N/A',
            }}
            validationSchema={foodChoiceSchema}
            onSubmit={(values) => {
              setFoodChoice(values);
              navigate('/confirm');
            }}
            component={(props) => (
              <FoodChoiceForm {...props} onCancel={handleCancel} />
            )}
            validateOnChange={false}
            validateOnBlur={false}
          />
        </>
      )}
    </Container>
  );
};

export default Reservation;
