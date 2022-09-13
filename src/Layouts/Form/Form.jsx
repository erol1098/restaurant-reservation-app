import React from 'react';

import styles from './Form.module.scss';

const FormWrapper = ({ children }) => {
  return <form className={styles.form}>{children}</form>;
};

export default FormWrapper;
