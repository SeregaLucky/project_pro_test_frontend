import React from 'react';
// import T from 'prop-types';
import  './ContactsListItem.css';

interface ContactsListItemProps{image:string, name:string, nameRu:string, position:string, eMail:string }
const ContactsListItem:React.FC<ContactsListItemProps> = (props) => (
  <li className='card'>
    <figure>
      <img src={props.image} className='image' alt={props.name} height="246" />
      <figcaption className='figcaption'>
        <p className='name'>{props.name}</p>
        <p className='nameRu'>{props.nameRu}</p>
        <p className='position'>{props.position}</p>
        <p className='eMail'>{props.eMail}</p>
      </figcaption>
    </figure>
  </li>
);


export default ContactsListItem;
