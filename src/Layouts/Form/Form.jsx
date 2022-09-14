import React from 'react';

import styles from './Form.module.scss';

const FormWrapper = ({ children }) => {
  return <div className={styles.form}>{children}</div>;
};

export default FormWrapper;
