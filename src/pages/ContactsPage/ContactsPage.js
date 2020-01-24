import React from 'react';
import styles from './ContactsPage.module.css';
import CantactsListItem from '../../components/CantactsListItem/CantactsListItem';

const ContactsPage = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>Наша команда</h2>
        <ul className={styles.contactsListItemContainer}>
          <li className={styles.contactsListItem}>
            <figure>
              <img src="http://via.placeholder.com/280x245" alt="img" />
              <figcaption>
                <p>Имя фамилия</p>
                <p>доолжность</p>
                <p>Lorem dvsdvs dbhdbs </p>
              </figcaption>
            </figure>
          </li>
          <li className={styles.contactsListItem}>
            <figure>
              <img src="http://via.placeholder.com/280x245" alt="img" />
              <figcaption>
                <p>Имя фамилия</p>
                <p>доолжность</p>
                <p>Lorem dvsdvs dbhdbs </p>
              </figcaption>
            </figure>
          </li>
          <li className={styles.contactsListItem}>
            <figure>
              <img src="http://via.placeholder.com/280x245" alt="img" />
              <figcaption>
                <p>Имя фамилия</p>
                <p>доолжность</p>
                <p>Lorem dvsdvs dbhdbs </p>
              </figcaption>
            </figure>
          </li>
          <li className={styles.contactsListItem}>
            <figure>
              <img src="http://via.placeholder.com/280x245" alt="img" />
              <figcaption>
                <p>Имя фамилия</p>
                <p>доолжность</p>
                <p>Lorem dvsdvs dbhdbs </p>
              </figcaption>
            </figure>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ContactsPage;
