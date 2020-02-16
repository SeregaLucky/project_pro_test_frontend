import React from 'react';
import styles from './ContactsListItem.module.css';

interface IProps {
  image: string;
  name: string;
  nameRu: string;
  position: string;
  eMail: string;
}

const ContactsListItem: React.FC<IProps> = ({
  image,
  name,
  nameRu,
  position,
  eMail,
}) => (
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

export default ContactsListItem;
