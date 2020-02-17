import React from 'react';
import styles from './ContactsPage.module.css';
import projectTeamTS from './projectTeamTS';
import ContactsListItem from '../../components/ContactsListItem/ContactsListItem';

const ContactsPage: React.FC = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <h2 className={styles.mainTitle}>Наша команда</h2>
      <ul className={styles.contactsListItemContainer}>
        {projectTeamTS.map(el => (
          <ContactsListItem
            key={el.id}
            name={el.name}
            nameRu={el.nameRu}
            position={el.position}
            eMail={el.eMail}
            image={el.imgSrc}
            linkedin={el.linkedin}
          />
        ))}
      </ul>
    </div>
  </section>
);

export default ContactsPage;
