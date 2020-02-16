import React from 'react';
import './ContactsPage.css';
import ContactsListItemTS from '../../components/ContactsListItem/ContactsListItemTS';
import projectTeamTS from './projectTeamTS';

const ContactsPage: React.FC = () => (
  <section className="section">
    <div className="container">
      <h2 className="mainTitle">Наша команда</h2>
      <ul className="contactsListItemContainer">
        {projectTeamTS.map(el => (
          <ContactsListItemTS
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
