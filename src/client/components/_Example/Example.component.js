import { getIsHelloSelector } from '@selectors/_example/hello.selector';
import { makeHello } from '@reducers/_example/hello.actions';
import { useTranslate } from '@reusables/custom-hooks/use-translate.hook';

import styles from './Example.module.scss';

const Example = () => {
    const dispatch = ReactRedux.useDispatch();
    const onMakeHelloClick = () => {
        dispatch(makeHello());
    };
    const isHello = ReactRedux.useSelector(getIsHelloSelector);

    const t = useTranslate();

    return (
        <>
            <button onClick={onMakeHelloClick}> Make Hello </button>
            <div>{t('test.test')}</div>
            <div className={styles.hello}> {isHello ? 'Helloo there!' : 'Bye!!'} </div>
        </>
    );
};

export default Example;
