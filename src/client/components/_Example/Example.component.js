import { useTranslate } from '@reusables/custom-hooks/use-translate.hook';

import styles from './Example.module.scss';

const ExampleComponent = ({ onMakeHelloClick, isHello }) => {
    const t = useTranslate();

    return (
        <>
            <div>Test</div>
            <button onClick={onMakeHelloClick}> Make Hello </button>
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
