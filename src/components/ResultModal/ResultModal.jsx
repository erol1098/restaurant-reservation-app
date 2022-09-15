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
              <h3>Do you confirm the reservation?</h3>
              <div className={styles.content}>
                <p>
                  <b>First Name:</b> {userInfo?.firstName}{' '}
                </p>
                <p>
                  <b>Last Name:</b> {userInfo?.lastName}{' '}
                </p>
                <p>
                  <b>Birth Date:</b>{' '}
                  {new Intl.DateTimeFormat('tr-TR', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                  }).format(new Date(userInfo?.birth))}
                </p>
                <p>
                  <b>Gender:</b> {userInfo?.gender}
                </p>
              </div>
              <div className={styles.content}>
                <p>
                  <b>Ingredients:</b> {foodChoice?.ingredients}{' '}
                </p>
                <p>
                  <b>Drink:</b> {foodChoice?.drink}{' '}
                </p>
                <p>
                  <b>Additional Requests :</b> {foodChoice?.additional}{' '}
                </p>
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
                  <h4>Your reservation was saved with this reservation id:</h4>
                  <b>
                    <i>{resId}</i>
                  </b>

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
