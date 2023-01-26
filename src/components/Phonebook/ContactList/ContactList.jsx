import PropTypes from 'prop-types';
import styles from './contactList.module.css';


const ContactList = ({ contacts, removeContact }) => {
  const itemsContacts = contacts.map(({ id, name, number }) => (
    <li className={styles.listItems} key={id}>
      {name}: {number}
      <button
        className={styles.btnDeleteContact}
        onClick={() => removeContact(id)}
        type="button"
      >
        Delete
      </button>
    </li>
  ));
  return <ul className={styles.listContact}>{itemsContacts}</ul>;
};
export default ContactList;


ContactList.defaultProps = {
  contacts: [],
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  removeContact: PropTypes.func.isRequired,
};