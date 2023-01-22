import AboutMe from './components/AboutMe';
import MySkills from './components/MySkills';
import FiveReasons from './components/FiveReasons';
import ColleaguesFeedbacks from './components/ColleaguesFeedbacks';

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
