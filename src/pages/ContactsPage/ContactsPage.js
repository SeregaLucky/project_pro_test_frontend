import React from 'react';
import styles from './ContactsPage.module.css';
import ContactsListItem from '../../components/ContactsListItem/ContactsListItem';
import projectTeam from './ProjectTeam';
import shortid from 'shortid';
const ContactsPage = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>Наша команда</h2>
        <ul className={styles.contactsListItemContainer}>
          {projectTeam.map(el => (
            <ContactsListItem
              key={shortid.generate()}
              name={el.name}
              nameRu={el.nameRu}
              position={el.position}
              description={el.description}
              image={el.imgSrc}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ContactsPage;
