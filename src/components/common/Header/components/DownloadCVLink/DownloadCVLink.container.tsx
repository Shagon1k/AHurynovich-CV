import DownloadCVLink from './DownloadCVLink.component';

// TODO: Replace with real PDF CV url
const TO_API_pdfCVLinkUrl = 'https://www.w3schools.com/images/myw3schoolsimage.jpg';

interface IDownloadCVLinkContainerProps {
    onEnter: () => void;
    onLeave: () => void;
}

const DownloadCVLinkContainer: React.FC<IDownloadCVLinkContainerProps> = (props) => {
    const pdfCVLinkUrl = TO_API_pdfCVLinkUrl;

    return <DownloadCVLink pdfCVLinkUrl={pdfCVLinkUrl} {...props} />;
};

export default DownloadCVLinkContainer;
