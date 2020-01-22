import React from 'react';
import styles from './CantactsListItem.module.css';
import cardImage from '../../assets/images/cardimage.jpg';

const CantactsListItem = ({ image, name, position, description }) => {
  return (
    <li className={styles.card}>
      <img src={image} className={styles.image} alt={name} />
      <p className={styles.name}>{name}</p>
      <p className={styles.position}>{position}</p>
      <p className={styles.description}>{description}</p>
    </li>
  );
};

CantactsListItem.defaultProps = {
  image: cardImage,
  name: 'Имя Фамилия',
  position: 'Frontend developer',
  description:
    'Lorem Ipsum является стандартной "рыбой" для текстов на латиниц с начала  XVI века',
};

export default CantactsListItem;
