import AboutMe from './components/AboutMe';
import ColleaguesFeedbacks from './components/ColleaguesFeedbacks';
import FiveReasons from './components/FiveReasons';
import MySkills from './components/MySkills';

const MainPage: React.FC = () => {
    return (
        <>
            <AboutMe />
            <MySkills />
            <FiveReasons />
            <ColleaguesFeedbacks />
        </>
    );
};

export default MainPage;
