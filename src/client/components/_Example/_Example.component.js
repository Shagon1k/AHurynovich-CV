import PropTypes from 'prop-types';
import { useTranslate } from '@reusables/custom-hooks/use-translate.hook';

import styles from './_Example.module.scss';

const ExampleComponent = ({ onMakeHelloClick, isHello }) => {
    const t = useTranslate();

    return (
        <>
            <div className={styles.test}>Test</div>
            <button name='Make Hello' onClick={onMakeHelloClick}>
                Make Hello There
            </button>
            <div>{t('test.test')}</div>
            <div className={styles.hello}> {isHello ? 'Hello there!' : 'Bye!!'} </div>
        </>
    );
};

ExampleComponent.propTypes = {
    onMakeHelloClick: PropTypes.func.isRequired,
    isHello: PropTypes.bool,
};

export default ExampleComponent;
