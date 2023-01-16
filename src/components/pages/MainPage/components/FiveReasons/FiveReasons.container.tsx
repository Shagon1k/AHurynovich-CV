import FiveReasons, { type IFiveReasons } from './FiveReasons.component';

const TO_API_fiveReasonsData = [
    {
        name: 'Teamplayer',
        iconName: 'teamplayer',
        description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum debitis rerum sit expedita quidem, blanditiis maxime consequatur illo fugit nostrum numquam enim cupiditate at sint excepturi repellat, assumenda molestias! Quos explicabo maiores fuga, suscipit non perspiciatis ab quia, tempore, ex sed tempora? Sapiente perferendis quae consectetur laboriosam.',
    },
    {
        name: 'Experienced',
        iconName: 'experienced',
        description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum debitis rerum sit expedita quidem, blanditiis maxime consequatur illo fugit nostrum numquam enim cupiditate at sint excepturi repellat, assumenda molestias! Quos explicabo maiores fuga, suscipit non perspiciatis ab quia, tempore, ex sed tempora? Sapiente perferendis quae consectetur laboriosam.',
    },
    {
        name: 'Thirst for knowledge',
        iconName: 'knowledgethirst',
        description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum debitis rerum sit expedita quidem, blanditiis maxime consequatur illo fugit nostrum numquam enim cupiditate at sint excepturi repellat, assumenda molestias! Quos explicabo maiores fuga, suscipit non perspiciatis ab quia, tempore, ex sed tempora? Sapiente perferendis quae consectetur laboriosam.',
    },
    {
        name: 'Responsible',
        iconName: 'responsible',
        description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum debitis rerum sit expedita quidem, blanditiis maxime consequatur illo fugit nostrum numquam enim cupiditate at sint excepturi repellat, assumenda molestias! Quos explicabo maiores fuga, suscipit non perspiciatis ab quia, tempore, ex sed tempora? Sapiente perferendis quae consectetur laboriosam.',
    },
    {
        name: 'Mentor and Interviewer',
        iconName: 'mentor',
        description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum debitis rerum sit expedita quidem, blanditiis maxime consequatur illo fugit nostrum numquam enim cupiditate at sint excepturi repellat, assumenda molestias! Quos explicabo maiores fuga, suscipit non perspiciatis ab quia, tempore, ex sed tempora? Sapiente perferendis quae consectetur laboriosam.',
    },
];

const FiveReasonsContainer = () => {
    const fiveReasonsData = TO_API_fiveReasonsData as IFiveReasons;

    return <FiveReasons fiveReasonsData={fiveReasonsData} />;
};

export default FiveReasonsContainer;
