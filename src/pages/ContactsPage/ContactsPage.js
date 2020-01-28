import React from 'react';
import styles from './ContactsPage.module.css';
import ContactsListItem from '../../components/ContactsListItem/ContactsListItem';
import projectTeam from './ProjectTeam';
const ContactsPage = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>Наша команда</h2>
        <ul className={styles.contactsListItemContainer}>
          {projectTeam.map(el => (
            <li>
              <ContactsListItem
                name={el.name}
                position={el.position}
                description={el.description}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ContactsPage;
