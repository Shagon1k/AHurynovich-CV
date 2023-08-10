import { memo } from 'react';
import { useSelector } from 'react-redux';

import { BP } from '@config/application';
import { selectAppBreakpoint } from '@slices/app-info/app-info.selector';
import { useTranslates } from '@reusables/custom-hooks';
import Icon from '@components/base/Icon';

import styles from './DownloadCVLink.module.scss';

interface IDownloadCVLinkProps {
    pdfCVLinkUrl: string;
    onEnter: () => void;
    onLeave: () => void;
}

const DownloadCVLink: React.FC<IDownloadCVLinkProps> = ({ pdfCVLinkUrl, onEnter, onLeave }) => {
    const { t } = useTranslates();
    const breakpointName = useSelector(selectAppBreakpoint);
    const iconSize = [BP.XS, BP.S].includes(breakpointName) ? 'xs' : 's';
    const title = t('header.downloadCVLink.title');

    return (
        <a
            className={styles['download-cv-link']}
            title={title}
            href={pdfCVLinkUrl}
            download
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
