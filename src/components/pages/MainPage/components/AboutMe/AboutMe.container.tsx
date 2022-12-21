import AboutMe from './AboutMe.component';

const AboutMeContainer = () => {
    const TO_API_isSearchingForWork = false;
    const TO_API_aboutMeText =
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum debitis rerum sit expedita quidem, blanditiis maxime consequatur illo fugit nostrum numquam enim cupiditate at sint excepturi repellat, assumenda molestias! Quos explicabo maiores fuga, suscipit non perspiciatis ab quia, tempore, ex sed tempora? Sapiente perferendis quae consectetur laboriosam. Dolore, porro? Vitae sint molestiae pariatur dolorem, natus magnam accusamus quisquam voluptatem, provident rerum aperiam suscipit impedit? Vitae laborum, ex sed quo rem vero molestiae iure sunt quis laboriosam, non aliquam! Explicabo officia ratione nam? Fuga ipsam atque voluptatibus aperiam iusto eos numquam odio nisi ea. Similique quis rerum, error enim consectetur voluptatum ipsa tempore dolorum id cum, deleniti qui dolor quisquam harum! Quam ipsum dolorum delectus? Quaerat eum eveniet facere voluptatem, autem quis repellendus eos nihil neque blanditiis quos deleniti repudiandae, odio aliquid molestias ab. Fugiat perspiciatis culpa consequuntur iure, commodi eveniet, sapiente nemo et magni corrupti, ipsum ipsa laborum ex nostrum.';

    return <AboutMe isSearchingForWork={TO_API_isSearchingForWork} aboutMeText={TO_API_aboutMeText} />;
};

export default AboutMeContainer;
