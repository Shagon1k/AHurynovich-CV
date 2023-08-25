import { useSelector } from 'react-redux';

import { selectFiveReasons } from '@slices/content-config/content-config.selector';

import FiveReasons from './FiveReasons.component';

const FiveReasonsContainer = () => {
    const fiveReasonsData = useSelector(selectFiveReasons);

    return <FiveReasons fiveReasonsData={fiveReasonsData} />;
};

export default FiveReasonsContainer;
