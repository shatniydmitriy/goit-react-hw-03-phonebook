import PropTypes from 'prop-types';
import styles from '../ContactItem/contactItem.module.css';


const ContactItem = ({ id, name, number, removeContact }) => {
  return (
    <li className={styles.listItems}>
      {name}: {number}
      <button
        className={styles.btnDeleteContact}
        onClick={() => removeContact(id)}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};
export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  removeContact: PropTypes.func.isRequired,
};