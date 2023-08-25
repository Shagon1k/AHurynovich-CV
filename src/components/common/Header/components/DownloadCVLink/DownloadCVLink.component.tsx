import { memo } from 'react';
import { useSelector } from 'react-redux';

import Icon from '@components/base/Icon';
import { BP } from '@config/application';
import { useTranslates } from '@reusables/custom-hooks';
import { selectAppBreakpoint } from '@slices/app-info/app-info.selector';

import styles from './DownloadCVLink.module.scss';

interface IDownloadCVLinkProps {
    pdfCVUrl: string;
    onEnter: () => void;
    onLeave: () => void;
}

const DOWNLOAD_FILENAME = "Aliaksei Hurynovich's CV";

const DownloadCVLink: React.FC<IDownloadCVLinkProps> = ({ pdfCVUrl, onEnter, onLeave }) => {
    const { t } = useTranslates();
    const breakpointName = useSelector(selectAppBreakpoint);
    const iconSize = [BP.XS, BP.S].includes(breakpointName) ? 'xs' : 's';
    const title = t('header.downloadCVLink.title');

    return (
        <a
            className={styles['download-cv-link']}
            title={title}
            href={pdfCVUrl}
            download={DOWNLOAD_FILENAME}
            onFocus={onEnter}
            onBlur={onLeave}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
        >
            <Icon name='download' size={iconSize} isDecorative={false} title={title} />
        </a>
    );
};

export default memo(DownloadCVLink);
