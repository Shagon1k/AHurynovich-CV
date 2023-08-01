import styles from './_Example.module.scss';
import { useSkipToContent, useTranslates } from '@reusables/custom-hooks';

interface IExampleProps {
    onMakeHelloClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    isHello: boolean;
}

const Example: React.FC<IExampleProps> = ({ onMakeHelloClick, isHello }: IExampleProps) => {
    const { t } = useTranslates();
    useSkipToContent('test', 'Test');

    return (
        <>
            <div className={styles.test}>Test</div>
            <button name='Make Hello' onClick={onMakeHelloClick}>
                Make Hello
            </button>
            <div>{t('test.test')}</div>
            <div className={styles.hello}> {isHello ? 'Hello there!' : 'Bye!!'} </div>
        </>
    );
};

export default Example;
