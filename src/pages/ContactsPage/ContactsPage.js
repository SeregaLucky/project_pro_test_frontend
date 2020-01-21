import React from 'react';
import styles from './ContactsPage.module.css';

const ContactsPage = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.mainTitle}>Наша команда</h2>

      <ul className={styles.contactsListItemContainer}>
        <li className={styles.contactsListItem}>
          <img src="http://via.placeholder.com/280x245" alt="img" />
          <p>Имя фамилия</p>
          <p>доолжность</p>
          <p>Lorem dvsdvs dbhdbs </p>
        </li>
        <li className={styles.contactsListItem}>
          <img src="http://via.placeholder.com/280x245" alt="img" />
          <p>Имя фамилия</p>
          <p>доолжность</p>
          <p>Lorem dvsdvs dbhdbs </p>
        </li>
        <li className={styles.contactsListItem}>
          <img src="http://via.placeholder.com/280x245" alt="img" />
          <p>Имя фамилия</p>
          <p>доолжность</p>
          <p>Lorem dvsdvs dbhdbs </p>
        </li>
        <li className={styles.contactsListItem}>
          <img src="http://via.placeholder.com/280x245" alt="img" />
          <p>Имя фамилия</p>
          <p>доолжность</p>
          <p>Lorem dvsdvs dbhdbs </p>
        </li>
      </ul>
    </section>
  );
};

export default ContactsPage;
