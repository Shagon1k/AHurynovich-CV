import ColleaguesFeedbacks, { type IColleaguesFeedbacksList } from './ColleaguesFeedbacks.component';

const TO_API_colleaguesFeedbacksData = [
    {
        authorRole: 'Name Surname1',
        sourceName: 'Some project 1',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum debitis rerum sit expedita quidem, blanditiis maxime consequatur illo fugit nostrum numquam enim cupiditate at sint excepturi repellat, assumenda molestias! Quos explicabo maiores fuga, suscipit non perspiciatis ab quia, tempore, ex sed tempora? Sapiente perferendis quae consectetur laboriosam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum debitis rerum sit expedita quidem, blanditiis maxime consequatur illo fugit nostrum numquam enim cupiditate at sint excepturi repellat, assumenda molestias! Quos explicabo maiores fuga, suscipit non perspiciatis ab quia, tempore, ex sed tempora? Sapiente perferendis quae consectetur laboriosam.',
    },
    {
        authorRole: 'Name Surname2',
        sourceName: 'Some project 2',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum debitis rerum sit expedita quidem, blanditiis maxime consequatur illo fugit nostrum numquam enim cupiditate at sint excepturi repellat, assumenda molestias! Quos explicabo maiores fuga, suscipit non perspiciatis ab quia, tempore, ex sed tempora? Sapiente perferendis quae consectetur laboriosam.',
    },
    {
        authorRole: 'Name Surname3',
        sourceName: 'Some project 3',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum debitis rerum sit expedita quidem, blanditiis maxime consequatur illo fugit nostrum numquam enim cupiditate at sint excepturi repellat, assumenda molestias! Quos explicabo maiores fuga, suscipit non perspiciatis ab quia, tempore, ex sed tempora? Sapiente perferendis quae consectetur laboriosam.',
    },
    {
        authorRole: 'Name Surname4',
        sourceName: 'Some project 4',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum debitis rerum sit expedita quidem, blanditiis maxime consequatur illo fugit nostrum numquam enim cupiditate at sint excepturi repellat, assumenda molestias! Quos explicabo maiores fuga, suscipit non perspiciatis ab quia, tempore, ex sed tempora? Sapiente perferendis quae consectetur laboriosam.',
    },
    {
        authorRole: 'Name Surname5',
        sourceName: 'Some project 5',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum debitis rerum sit expedita quidem, blanditiis maxime consequatur illo fugit nostrum numquam enim cupiditate at sint excepturi repellat, assumenda molestias! Quos explicabo maiores fuga, suscipit non perspiciatis ab quia, tempore, ex sed tempora? Sapiente perferendis quae consectetur laboriosam.',
    },
];

const ColleaguesFeedbacksContainer = () => {
    const colleaguesFeedbacksData = TO_API_colleaguesFeedbacksData as IColleaguesFeedbacksList;

    return <ColleaguesFeedbacks colleaguesFeedbacksData={colleaguesFeedbacksData} />;
};

export default ColleaguesFeedbacksContainer;
