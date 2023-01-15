import MySkills, { type ISkillsList } from './MySkills.component';

const TO_API_skillsList = [
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
    const skillsList = TO_API_skillsList as ISkillsList;

    return <MySkills skillsList={skillsList} />;
};

export default MySkillsContainer;
