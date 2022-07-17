import { useDispatch, useSelector } from 'react-redux';

import { getIsHelloSelector } from '@selectors/_example/hello.selector';
import { makeHello } from '@reducers/_example/hello.actions';
import { changeLanguage } from '@reducers/i18n/i18n.actions';
import ExampleComponent from './Example.component';

const ExampleContainer = () => {
    const dispatch = useDispatch();
    const handleMakeHelloClick = () => {
        dispatch(makeHello());
        dispatch(changeLanguage('ru'));
    };
    const isHello = useSelector(getIsHelloSelector);

    return <ExampleComponent onMakeHelloClick={handleMakeHelloClick} isHello={isHello} />;
};

export default ExampleContainer;
