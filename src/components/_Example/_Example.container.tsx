import { useDispatch, useSelector } from 'react-redux';

import { selectIsHello } from '@slices/_example/hello.selector';
import { makeHello } from '@slices/_example/hello.slice';
import { changeLanguage } from '@slices/i18n/i18n.slice';
import ExampleComponent from './_Example.component';

const ExampleContainer: React.FC = () => {
    const dispatch = useDispatch();
    const handleMakeHelloClick = (): void => {
        dispatch(makeHello());
        dispatch(changeLanguage('ru'));
    };
    const isHello = useSelector(selectIsHello);

    return <ExampleComponent onMakeHelloClick={handleMakeHelloClick} isHello={isHello} />;
};

export default ExampleContainer;
