import CareerFlow, { type ICareerFlow } from './CareerFlow.component';

const TO_API_careerFlowData = [
    {
        title: 'Some title',
        date: 'February 2018',
        description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum debitis rerum sit expedita quidem, blanditiis maxime consequatur illo fugit nostrum numquam enim cupiditate at sint excepturi repellat, assumenda molestias! Quos explicabo maiores fuga, suscipit non perspiciatis ab quia, tempore, ex sed tempora? Sapiente perferendis quae consectetur laboriosam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum debitis rerum sit expedita quidem, blanditiis maxime consequatur illo fugit nostrum numquam enim cupiditate at sint excepturi repellat, assumenda molestias! Quos explicabo maiores fuga, suscipit non perspiciatis ab quia, tempore, ex sed tempora? Sapiente perferendis quae consectetur laboriosam.',
    },
    {
        title: 'Some title',
        date: 'December 2020',
        description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum debitis rerum sit expedita quidem, blanditiis maxime consequatur illo fugit nostrum numquam enim cupiditate at sint excepturi repellat, assumenda molestias! Quos explicabo maiores fuga, suscipit non perspiciatis ab quia, tempore, ex sed tempora? Sapiente perferendis quae consectetur laboriosam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum debitis rerum sit expedita quidem, blanditiis maxime consequatur illo fugit nostrum numquam enim cupiditate at sint excepturi repellat, assumenda molestias! Quos explicabo maiores fuga, suscipit non perspiciatis ab quia, tempore, ex sed tempora? Sapiente perferendis quae consectetur laboriosam.',
    },
    {
        title: 'Some title',
        date: 'October 2022',
        description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum debitis rerum sit expedita quidem, blanditiis maxime consequatur illo fugit nostrum numquam enim cupiditate at sint excepturi repellat, assumenda molestias! Quos explicabo maiores fuga, suscipit non perspiciatis ab quia, tempore, ex sed tempora? Sapiente perferendis quae consectetur laboriosam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum debitis rerum sit expedita quidem, blanditiis maxime consequatur illo fugit nostrum numquam enim cupiditate at sint excepturi repellat, assumenda molestias! Quos explicabo maiores fuga, suscipit non perspiciatis ab quia, tempore, ex sed tempora? Sapiente perferendis quae consectetur laboriosam.',
    },
];

const CareerFlowContainer = () => {
    const careerFlowData = TO_API_careerFlowData as ICareerFlow;

    return <CareerFlow careerFlowData={careerFlowData} />;
};

export default CareerFlowContainer;
