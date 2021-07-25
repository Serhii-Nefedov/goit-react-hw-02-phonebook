import PropTypes from 'prop-types';
import styles from './Filter.module.css';


function Filter({ value, onChangeFilter }) {
  return (
    <div className={styles.filter}>
      
      <label className={styles.filter_label}>
        Find contacts by name
      <input
        className={styles.filter__input}
        type="text"
        value={value}
        onChange={(e) => onChangeFilter(e.target.value)}
      />
      </label>
    </div>
  );
}


Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;