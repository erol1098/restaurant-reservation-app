import { createContext, useState } from 'react';

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState('');
  const [foodChoice, setFoodChoice] = useState('');
  const [flag, setFlag] = useState(false);

  console.log('user', userInfo);
  console.log('food', foodChoice);

  const values = {
    userInfo,
    setUserInfo,
    foodChoice,
    setFoodChoice,
    flag,
    setFlag,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
export default AppContext;
