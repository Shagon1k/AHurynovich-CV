import PastProjects, { type IPastProjects } from './PastProjects.component';

const TO_API_pastProjectsData = [
    {
        title: 'Burberry',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vitae ad dignissimos consectetur expedita nihil saepe aperiam illo vero quisquam dolorum ipsa eius officia commodi nemo dolore iste earum, error totam laborum voluptates temporibus! Porro voluptas facere dignissimos explicabo blanditiis cumque numquam eveniet accusantium alias commodi quia, asperiores vitae aperiam.',
        imgUrl: 'https://upcdn.io/W142hJk/raw/demo/4mLwbXrVFB.svg', // TODO: Move to AWS S3
    },
    {
        title: 'Burberry. Redesign',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vitae ad dignissimos consectetur expedita nihil saepe aperiam illo vero quisquam dolorum ipsa eius officia commodi nemo dolore iste earum, error totam laborum voluptates temporibus! Porro voluptas facere dignissimos explicabo blanditiis cumque numquam eveniet accusantium alias commodi quia, asperiores vitae aperiam.',
        imgUrl: 'https://upcdn.io/W142hJk/raw/demo/4mLwbfJwFV.svg.svg', // TODO: Move to AWS S3
    },
    {
        title: 'UKG',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vitae ad dignissimos consectetur expedita nihil saepe aperiam illo vero quisquam dolorum ipsa eius officia commodi nemo dolore iste earum, error totam laborum voluptates temporibus! Porro voluptas facere dignissimos explicabo blanditiis cumque numquam eveniet accusantium alias commodi quia, asperiores vitae aperiam.',
        imgUrl: 'https://upcdn.io/W142hJk/raw/demo/4mLwancvG3.svg', // TODO: Move to AWS S3
    },
];

const PastProjectsContainer = () => {
    const pastProjectsData = TO_API_pastProjectsData as IPastProjects;

    return <PastProjects pastProjectsData={pastProjectsData} />;
};

export default PastProjectsContainer;
