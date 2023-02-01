import Socials, { type ISocialsInfo } from './Socials.component';

const TO_API_socialsData = [
    { name: 'YouTube', iconName: 'youtube', link: 'https://www.youtube.com/@ourlifeishere5060' },
    { name: 'Instagram', iconName: 'instagram', link: 'https://www.instagram.com/shagon1k' },
    { name: 'Telegram', iconName: 'telegram', link: 'https://t.me/jamevuu' },
    { name: 'Facebook', iconName: 'facebook', link: 'https://www.facebook.com/aliaksei.hur' },
    {
        name: 'LinkedIn',
        iconName: 'linkedin',
        link: 'https://www.linkedin.com/in/aliaksei-hurynovich-395023189',
    },
    { name: 'Github', iconName: 'github', link: 'https://github.com/Shagon1k' },
];

interface ISocialsContainerProps {
    className?: string;
}

const SocialsContainer: React.FC<ISocialsContainerProps> = ({ className }) => {
    const socialsData = TO_API_socialsData as ISocialsInfo;

    return <Socials className={className} socialsData={socialsData} />;
};

export default SocialsContainer;
