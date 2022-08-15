import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const ButtonComponent = ({ disabled, title, onClick }) => {
    return (
        <button className={styles.button} name={title} onClick={onClick} disabled={disabled}>
            {title}
        </button>
    );
};

ButtonComponent.propTypes = {
    disabled: PropTypes.bool,
    title: PropTypes.string,
    onClick: PropTypes.func,
};

export default React.memo(ButtonComponent);
