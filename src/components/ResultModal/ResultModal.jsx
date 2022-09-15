import React, { useContext, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { SpinnerCircularFixed } from 'spinners-react';

import AppContext from '../../context/app-context';
import useFirebase from '../../hooks/useFirebase';

import styles from './ResultsModal.module.scss';

const ResultModal = () => {
  const navigate = useNavigate();
  const [isDone, setIsDone] = useState(false);
  const [resId, setResId] = useState('');

  const {
    userInfo,
    foodChoice,
    setUserInfo,
    setFoodChoice,
    setIsOpen,
    setFlag,
  } = useContext(AppContext);
  const { addNewEntry } = useFirebase();

  const handleCancel = () => {
    setUserInfo('');
    setFoodChoice('');
    setIsOpen(false);
    setFlag(false);
    navigate('/');
  };

  const handleSaveReservation = (e) => {
    e.preventDefault();
    addNewEntry('reservations', {
      'personal-info': userInfo,
      'food-choice': foodChoice,
    }).then((res) => setResId(res));
    setIsDone(true);
  };

  const handleDone = (e) => {
    e.preventDefault();
    setIsDone(false);
    setResId('');
    handleCancel();
  };

  return (
    <>
      <div className={styles.darkBG}></div>
      <div className={styles.centered}>
        <div className={styles.modal}>
          {!isDone && (
            <>
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
                <button
                  className={styles.btn}
                  type='button'
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button className={styles.btn} type='submit'>
                  Make Reservation
                </button>
              </form>
            </>
          )}
          {isDone && (
            <form className={styles.doneForm} onSubmit={handleDone}>
              {resId && (
                <>
                  <h3>
                    Your reservation was saved with Reservation Id of {resId}
                  </h3>
                  <button className={styles.btn} type='submit'>
                    Done
                  </button>
                </>
              )}
              {!resId && <SpinnerCircularFixed size={100} />}
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default ResultModal;
