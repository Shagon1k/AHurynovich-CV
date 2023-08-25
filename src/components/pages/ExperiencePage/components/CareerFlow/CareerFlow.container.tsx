import { useSelector } from 'react-redux';

import { selectCareerFlow } from '@slices/content-config/content-config.selector';

import CareerFlow from './CareerFlow.component';

const CareerFlowContainer = () => {
    const careerFlowData = useSelector(selectCareerFlow);

    return <CareerFlow careerFlowData={careerFlowData} />;
};

export default CareerFlowContainer;
