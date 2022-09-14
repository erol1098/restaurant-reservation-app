import React, { useContext } from 'react';

import AppContext from '../context/app-context';
import useFirebase from '../hooks/useFirebase';

const ResultModal = () => {
  const { userInfo, foodChoice } = useContext(AppContext);
  const { addNewEntry } = useFirebase();

  const handleSaveReservation = (e) => {
    e.preventDefault();
    addNewEntry('reservations', {
      'personal-info': userInfo,
      'food-choice': foodChoice,
    });
  };

  return (
    <div>
      <p>Do you confirm these info?</p>
      <div>
        <p>First Name: {userInfo?.firstName} </p>
        <p>Last Name: {userInfo?.lastName} </p>
        <p>Birth Date : {userInfo?.birth} </p>
        <p>Gender: {userInfo?.gender} </p>
      </div>
      <div>
        <p>Ingredients : {foodChoice?.ingredients} </p>
        <p>Drink: {foodChoice?.drink} </p>
        <p>Additional Requests : {foodChoice?.additional} </p>
      </div>
      <form action='' onSubmit={handleSaveReservation}>
        <button type='reset'>Cancel</button>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default ResultModal;
