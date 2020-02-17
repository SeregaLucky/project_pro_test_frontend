import React from 'react';
import styles from './ContactsListItem.module.css';

interface IProps {
  image: string;
  name: string;
  nameRu: string;
  position: string;
  eMail: string;
  linkedin: string | null;
}

const ContactsListItem: React.FC<IProps> = ({
  image,
  name,
  nameRu,
  position,
  eMail,
  linkedin,
}) => (
  <li className={styles.card}>
    <figure>
      <img src={image} className={styles.image} alt={name} height="246" />
      <figcaption className={styles.figcaption}>
        <p className={styles.name}>{name}</p>
        <p className={styles.nameRu}>{nameRu}</p>
        <p className={styles.position}>{position}</p>
        <p className={styles.eMail}>{eMail}</p>
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkedin}
          >
            Linkedin: {linkedin}
          </a>
        )}
      </figcaption>
    </figure>
  </li>
);

export default ContactsListItem;
