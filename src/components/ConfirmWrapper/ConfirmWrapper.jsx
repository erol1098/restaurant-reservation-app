import React from 'react';

import styles from './ConfirmWrapper.module.scss';

const ConfirmationWrapper = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export default ConfirmationWrapper;
