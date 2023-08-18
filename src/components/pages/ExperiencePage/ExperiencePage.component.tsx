import CareerFlow from './components/CareerFlow';
import MyExpertise from './components/MyExpertise';
import PastProjects from './components/PastProjects';

const ExperiencePage: React.FC = () => {
    return (
        <>
            <CareerFlow />
            <PastProjects />
            <MyExpertise />
        </>
    );
};

export default ExperiencePage;
