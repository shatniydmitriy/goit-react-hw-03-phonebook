import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';




const ContactList = ({ contacts, removeContact }) => {

      return (
    <ul>
      {contacts.map(({ id, name, number }) => {
          return (
            <ContactItem
              id={id}
              key={id}
              name={name}
              number={number}
              removeContact={removeContact}
            />
          );
        })
      }
    </ul>
  );
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
  
};