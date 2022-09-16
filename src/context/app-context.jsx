import { createContext, useState } from 'react';

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState('');
  const [foodChoice, setFoodChoice] = useState('');
  const [flag, setFlag] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const values = {
    userInfo,
    setUserInfo,
    foodChoice,
    setFoodChoice,
    flag,
    setFlag,
    isOpen,
    setIsOpen,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
export default AppContext;
