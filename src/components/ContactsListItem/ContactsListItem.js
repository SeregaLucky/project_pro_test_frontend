import React from 'react';
import styles from './ContactsListItem.module.css';
import cardImage from '../../assets/images/cardimage.jpg';

const ContactsListItem = ({ image, name, position, description }) => {
  return (
    <li className={styles.card}>
      <figure>
        <img src={image} className={styles.image} alt={name} />
        <figcaption>
          <p className={styles.name}>{name}</p>
          <p className={styles.position}>{position}</p>
          <p className={styles.description}>{description}</p>
        </figcaption>
      </figure>
    </li>
  );
};

ContactsListItem.defaultProps = {
  image: cardImage,
  name: 'Имя Фамилия',
  position: 'Frontend developer',
  description:
    'Lorem Ipsum является стандартной "рыбой" для текстов на латиниц с начала  XVI века',
};

export default ContactsListItem;
