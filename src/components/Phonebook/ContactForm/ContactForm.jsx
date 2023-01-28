import { Component } from 'react';
import PropTypes from 'prop-types';

import initialState from './initialState';
import styles from './contactForm.module.css';


class ContactForm extends Component {
  state = {
    ...initialState,
  };
  
    
  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { onSubmit } = this.props;
     const result = onSubmit({ ...this.state });
    if (result) {
      this.reset();
    }
  };
  reset() {
    this.setState({
      ...initialState,
    });
    }
    

  render() {
    const { handleInputChange, handleSubmit } = this;
    const { name, number } = this.state;
    return (
      <div className={styles.wrapper}>
        <div className={styles.contactFormBlock}>
          <form className="" onSubmit={handleSubmit}>
            <div className={styles.conactFormGroup}>
              <label className={styles.label} htmlFor={this.nameInputId}>
                Name
              </label>
              <input
                className={styles.input}
                value={name}
                onChange={handleInputChange}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                id={this.nameInputId}
              />
            </div>
            <div className={styles.conactFormGroup}>
              <label className={styles.label} htmlFor={this.numberInputId}>
                Number
              </label>
              <input
                className={styles.input}
                value={number}
                onChange={handleInputChange}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                id={this.numberInputId}
              />
            </div>
            <button className={styles.btnAddContact} type="submit">
              Add contact
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};