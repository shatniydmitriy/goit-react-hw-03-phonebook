import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

import styles from './ContactForm/contactForm.module.css';

 class Phonebook extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  nameInputId = nanoid();
  numberInput = nanoid();
  filterInput = nanoid();

  handleFilter = ({ target }) => {
    this.setState({ filter: target.value });
  };
  
     
  handleSubmit = ({ name, number }) => {
    if (this.isDublicate({ name, number })) {
      return alert(`${name}: ${number} is already in contacts`);
    }
  
    this.setState(prevState => {
      const { contacts } = prevState;
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      return { contacts: [newContact, ...contacts] };
    });
     };
     

  removeContact = id => {
    this.setState(({ contacts }) => {
      const newContact = contacts.filter(contact => contact.id !== id);
      return { contacts: newContact };
    });
     };
     

  isDublicate({ name, number }) {
    const normalizedName = name.toLowerCase();
    const normalizedNumber = number.toLowerCase();
    const { contacts } = this.state;
    const result = contacts.find(({ name, number }) => {
      return (
        name.toLowerCase() === normalizedName &&
        number.toLowerCase() === normalizedNumber
      );
    });

    return Boolean(result);
     }
     

  getFilteredContacts() {
    const { filter, contacts } = this.state;
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    const result = contacts.filter(({ name, number }) => {
      return (
        
        name.toLowerCase().includes(normalizedFilter) ||
        number.toLowerCase().includes(normalizedFilter)
      );
    });
    return result;
     }
     

  render() {
    const { handleSubmit, handleFilter, removeContact } = this;
    const { filter } = this.state;
    const contacts = this.getFilteredContacts();
    const isContacts = Boolean(contacts.length);
    return (
      <div>
        <h1 className={styles.title}>Phonebook</h1>

        <ContactForm onSubmit={handleSubmit} />
        <h2 className={styles.title}>Contacts</h2>
        <Filter handleInputChange={handleFilter} value={filter} />
        {isContacts && (
          <ContactList contacts={contacts} removeContact={removeContact} />
        )}
        {!isContacts && <p>No contacts in list</p>}
      </div>
    );
  }
}

export default Phonebook;