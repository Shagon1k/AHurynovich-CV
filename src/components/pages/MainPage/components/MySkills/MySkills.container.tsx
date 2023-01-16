import MySkills, { type ISkillsList } from './MySkills.component';

const TO_API_skillsListData = [
    {
        name: 'JavaScript',
        iconName: 'js',
    },
    {
        name: 'TypeScript',
        iconName: 'ts',
    },
    {
        name: 'HTML',
        iconName: 'html',
    },
    {
        name: 'CSS',
        iconName: 'css',
    },
    {
        name: 'SASS',
        iconName: 'sass',
    },
    {
        name: 'React',
        iconName: 'react',
    },
    {
        name: 'Redux',
        iconName: 'redux',
    },
    {
        name: 'Webpack',
        iconName: 'webpack',
    },
    {
        name: 'Jest',
        iconName: 'jest',
    },
    {
        name: 'React Testing Library',
        iconName: 'rtl',
    },
    {
        name: 'AWS',
        iconName: 'aws',
    },
    {
        name: 'Git',
        iconName: 'git',
    },
];

const MySkillsContainer = () => {
    const skillsListData = TO_API_skillsListData as ISkillsList;

    return <MySkills skillsListData={skillsListData} />;
};

export default MySkillsContainer;
