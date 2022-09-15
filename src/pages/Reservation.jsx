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
import ResultModal from '../components/ResultModal/ResultModal';
import { useNavigate } from 'react-router-dom';

const Reservation = () => {
  const navigate = useNavigate();
  const { setUserInfo, setFoodChoice, flag, setFlag, isOpen, setIsOpen } =
    useContext(AppContext);

  const handleCancel = () => {
    setUserInfo('');
    setFoodChoice('');
    setIsOpen(false);
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
              setIsOpen(true);
            }}
            component={(props) => (
              <FoodChoiceForm {...props} onCancel={handleCancel} />
            )}
            validateOnChange={false}
            validateOnBlur={false}
          />
        </>
      )}
      {isOpen && <ResultModal />}
    </Container>
  );
};

export default Reservation;
