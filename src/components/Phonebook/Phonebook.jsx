import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

import styles from './ContactForm/contactForm.module.css';

 class Phonebook extends Component {
  state = {
    contacts: [],
    filter: '',
   };
   

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('my-contacts'));
    if (contacts?.length) {
      this.setState({ contacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem('my-contacts', JSON.stringify(contacts));
    }
   }
   
  handleFilter = ({ target }) => {
    this.setState({ filter: target.value });
  };

  handleSubmit = ({ name, number }) => {
    if (this.isDublicate({ name, number })) {
        alert(`${name}: ${number} is already in contacts`);
        return false;
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
      return true;
     };
     
  removeContact = id => {
    this.setState(({ contacts }) => {
      const newContact = contacts.filter(contact => contact.id !== id);
      return { contacts: newContact };
    });
     };

  handleFilter = ({ target }) => {
    this.setState({ filter: target.value });
  };
     

  isDublicate({ name }) {
    const normalizedName = name.toLowerCase();
    const { contacts } = this.state;
    const result = contacts.find(({ name }) => {
        return (
            name.toLowerCase() === normalizedName
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