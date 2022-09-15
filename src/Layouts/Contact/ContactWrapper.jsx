import React from 'react';

import styles from './ContactWrapper.module.scss';

const ContactWrapper = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export default ContactWrapper;
