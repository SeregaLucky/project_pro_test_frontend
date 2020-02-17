import React from 'react';
import './ContactsPage.css';
import projectTeamTS from './projectTeamTS';
import ContactsListItem from '../../components/ContactsListItem/ContactsListItem';

const ContactsPage: React.FC = () => (
  <section className="section">
    <div className="container">
      <h2 className="mainTitle">Наша команда</h2>
      <ul className="contactsListItemContainer">
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
