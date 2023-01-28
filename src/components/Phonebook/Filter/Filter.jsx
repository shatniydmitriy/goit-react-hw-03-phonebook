import PropTypes from 'prop-types';

import styles from './filter.module.css';

const Filter = ({ handleInputChange, value }) => {
  return (
    <div className={styles.conactFormGroup}>
      <label className={styles.label}>Find contacts by name</label>
      <input
        className={styles.input}
        value={value}
        onChange={handleInputChange}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required />
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};