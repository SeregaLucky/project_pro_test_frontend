import React from 'react';
import T from 'prop-types';
import styles from './ContactsListItem.module.css';

const ContactsListItem = ({ image, name, nameRu, position, eMail }) => (
  <li className={styles.card}>
    <figure>
      <img src={image} className={styles.image} alt={name} height="246" />
      <figcaption className={styles.figcaption}>
        <p className={styles.name}>{name}</p>
        <p className={styles.nameRu}>{nameRu}</p>
        <p className={styles.position}>{position}</p>
        <p className={styles.eMail}>{eMail}</p>
      </figcaption>
    </figure>
  </li>
);

ContactsListItem.defaultProps = {
  image: null,
};

ContactsListItem.propTypes = {
  image: T.string,
  name: T.string.isRequired,
  nameRu: T.string.isRequired,
  position: T.string.isRequired,
  eMail: T.string.isRequired,
};

export default ContactsListItem;
