import React, { useContext, useEffect, useState } from 'react';

import { Navigate, useNavigate } from 'react-router-dom';
import { SpinnerCircularFixed } from 'spinners-react';

import AppContext from '../context/app-context';
import useFirebase from '../hooks/useFirebase';
import ConfirmationWrapper from '../Layouts/Confirm/ConfirmWrapper';

const Confirmation = () => {
  console.log('object');
  const navigate = useNavigate();
  const [isDone, setIsDone] = useState(false);
  const [resId, setResId] = useState('');

  useEffect(() => {
    return () => {
      setIsDone(false);
      setResId('');
      handleCancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { userInfo, foodChoice, setUserInfo, setFoodChoice, setFlag } =
    useContext(AppContext);

  const { addNewEntry } = useFirebase();

  const handleCancel = () => {
    setUserInfo('');
    setFoodChoice('');
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
  if (!userInfo && !foodChoice) return <Navigate to={'/reservation'} />;
  else
    return (
      <ConfirmationWrapper>
        <section>
          {!isDone && (
            <>
              <h3>Do you confirm the reservation?</h3>
              <div>
                <p>
                  <b>First Name:</b> {userInfo?.firstName}
                </p>
                <p>
                  <b>Last Name:</b> {userInfo?.lastName}
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
              <div>
                <p>
                  <b>Ingredients:</b> {foodChoice?.ingredients.join(', ')}
                </p>
                <p>
                  <b>Drink:</b> {foodChoice?.drink}
                </p>
                <p>
                  <b>Additional Requests :</b> {foodChoice?.additional}
                </p>
              </div>
              <form onSubmit={handleSaveReservation}>
                <button type='button' onClick={handleCancel}>
                  Cancel
                </button>
                <button type='submit'>Confirm</button>
              </form>
            </>
          )}
          {isDone && (
            <article>
              {resId && (
                <>
                  <h4>Your reservation was saved with this reservation id:</h4>
                  <b>
                    <i>{resId}</i>
                  </b>

                  <button type='button' onClick={handleDone}>
                    Done
                  </button>
                </>
              )}
              {!resId && <SpinnerCircularFixed size={100} />}
            </article>
          )}
        </section>
      </ConfirmationWrapper>
    );
};

export default Confirmation;
