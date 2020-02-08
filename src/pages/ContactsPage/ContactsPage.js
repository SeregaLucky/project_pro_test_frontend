import React from 'react';
import styles from './ContactsPage.module.css';
import ContactsListItem from '../../components/ContactsListItem/ContactsListItem';
import projectTeam from './ProjectTeam';

const ContactsPage = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <h2 className={styles.mainTitle}>Наша команда</h2>
      <ul className={styles.contactsListItemContainer}>
        {projectTeam.map(el => (
          <ContactsListItem
            key={el.id}
            name={el.name}
            nameRu={el.nameRu}
            position={el.position}
            eMail={el.eMail}
            image={el.imgSrc}
          />
        ))}
      </ul>
    </div>
  </section>
);

export default ContactsPage;
