import React from 'react';
// import styles from './ContactsPage.module.css';
import CantactsListItem from '../../components/CantactsListItem/CantactsListItem';

const ContactsPage = () => {
  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: '#f4f6fb',
        display: 'flex',
        // flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <CantactsListItem />
      <CantactsListItem />
      <CantactsListItem />
      <CantactsListItem />
    </div>
  );
};

export default ContactsPage;
