import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import AppContext from '../context/app-context';
import useFirebase from '../hooks/useFirebase';

import styles from './ResultsModal.module.scss';

const ResultModal = () => {
  const navigate = useNavigate();
  const { userInfo, foodChoice } = useContext(AppContext);
  const { addNewEntry } = useFirebase();

  const handleSaveReservation = (e) => {
    e.preventDefault();
    addNewEntry('reservations', {
      'personal-info': userInfo,
      'food-choice': foodChoice,
    });
    navigate('/');
  };

  return (
    <>
      <div className={styles.darkBG}></div>
      <div className={styles.centered}>
        <div className={styles.modal}>
          <h3>Do you confirm these info?</h3>
          <div className={styles.content}>
            <p>First Name: {userInfo?.firstName} </p>
            <p>Last Name: {userInfo?.lastName} </p>
            <p>Birth Date : {userInfo?.birth} </p>
            <p>Gender: {userInfo?.gender} </p>
          </div>
          <div className={styles.content}>
            <p>Ingredients : {foodChoice?.ingredients} </p>
            <p>Drink: {foodChoice?.drink} </p>
            <p>Additional Requests : {foodChoice?.additional} </p>
          </div>
          <form className={styles.form} onSubmit={handleSaveReservation}>
            <button type='button' onClick={() => navigate('/')}>
              Cancel
            </button>
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResultModal;
