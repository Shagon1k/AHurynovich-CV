import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { selectPdfCVUrl } from '@slices/content-config/content-config.selector';

import DownloadCVLink from './DownloadCVLink.component';

interface IDownloadCVLinkContainerProps {
    onEnter: () => void;
    onLeave: () => void;
}

const DownloadCVLinkContainer: React.FC<IDownloadCVLinkContainerProps> = (props) => {
    const pdfCVExternalUrl = useSelector(selectPdfCVUrl);
    const [pdfCVInternalUrl, setPdfCVInternalUrl] = useState('');

    useEffect(() => {
        let shouldIgnore = false;
        const getCVInternalUrl = async () => {
            const pdfCVData = await fetch(pdfCVExternalUrl);
            const pdfCVBlobData = await pdfCVData.blob();
            if (!shouldIgnore) {
                setPdfCVInternalUrl(URL.createObjectURL(pdfCVBlobData));
            }
        };
        getCVInternalUrl();

        return () => {
            shouldIgnore = true;
        };
    }, [pdfCVExternalUrl]);

    return <DownloadCVLink pdfCVUrl={pdfCVInternalUrl} {...props} />;
};

export default DownloadCVLinkContainer;
