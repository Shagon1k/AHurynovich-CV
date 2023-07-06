import MySkills, { type ISkillsList } from './MySkills.component';

export const TO_API_skillsListData = [
    {
        name: 'JavaScript',
        level: 4,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat incidunt doloremque dicta ad voluptate in quam illo, non recusandae ullam voluptatum itaque qui molestiae? Cupiditate iusto corrupti corporis rem suscipit consequuntur exercitationem labore magni. Tempora in eligendi rerum mollitia, magni atque, natus ipsa quas consequuntur officia perspiciatis architecto voluptatibus placeat.',
        iconName: 'js',
    },
    {
        name: 'TypeScript',
        level: 3,
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, sunt! Architecto natus consequatur id ut? Sunt omnis quos soluta architecto quia. Quam, quas excepturi vitae quibusdam consequatur a? Quam, amet!',
        iconName: 'ts',
    },
    {
        name: 'HTML',
        level: 3,
        description: null,
        iconName: 'html',
    },
    {
        name: 'CSS',
        level: 3,
        description: null,
        iconName: 'css',
    },
    {
        name: 'SASS',
        level: 3,
        description: null,
        iconName: 'sass',
    },
    {
        name: 'A11y',
        level: 3,
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis placeat veritatis voluptatem totam voluptate dolore officia mollitia nobis consequuntur iure, quia praesentium obcaecati? Quos excepturi recusandae alias hic est eveniet.',
        iconName: 'a11y',
    },
    {
        name: 'React',
        level: 4,
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur laboriosam et nisi repellendus! At modi accusantium eius, et magni quod officia mollitia quia soluta, sit fugit expedita id, incidunt cumque provident? Natus dolores ipsa quos totam nulla quis saepe ratione!',
        iconName: 'react',
    },
    {
        name: 'Redux',
        level: 3,
        description: null,
        iconName: 'redux',
    },
    {
        name: 'Webpack',
        level: 3,
        description: null,
        iconName: 'webpack',
    },
    {
        name: 'Jest',
        level: 3,
        description: null,
        iconName: 'jest',
    },
    {
        name: 'React Testing Library',
        level: 3,
        description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae dolores quae rem est eum quod odit sit maxime esse cumque id facilis quo in, nemo tenetur. Repellendus, ut temporibus reprehenderit accusantium atque minima dolore, consectetur quasi accusamus magni quibusdam. Reprehenderit porro deserunt minima sit nihil corrupti magnam, voluptates consequatur quaerat.',
        iconName: 'rtl',
    },
    {
        name: 'AWS',
        level: 2,
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque optio quos eligendi voluptate temporibus earum eum aperiam molestias, nostrum, modi laboriosam sit. Quasi libero nesciunt ut optio totam? Excepturi asperiores commodi natus ratione labore distinctio.',
        iconName: 'aws',
    },
    {
        name: 'Git',
        level: 3,
        description: null,
        iconName: 'git',
    },
];

const MySkillsContainer = () => {
    const skillsListData = TO_API_skillsListData as ISkillsList;

    return <MySkills skillsListData={skillsListData} />;
};

export default MySkillsContainer;
