import clsx from 'clsx';

import { useTranslates } from '@reusables/custom-hooks';
import { ICON_NAME_TO_SVG_MAP, ICONS_SIZES_MAP } from './config';

import styles from './Icon.module.scss';

const NOT_SUPPORTED_ICON_NAME = 'Error: Not supported Icon name provided.';

export type IIconName = keyof typeof ICON_NAME_TO_SVG_MAP;

interface IIconProps {
    className?: string;
    name: IIconName;
    size?: keyof typeof ICONS_SIZES_MAP;
    isDecorative?: boolean;
    title?: string;
}

const Icon: React.FC<IIconProps> = ({
    className = '',
    name,
    size = 's',
    isDecorative = true,
    title = '',
}) => {
    const { t } = useTranslates();

    const IconSVG = ICON_NAME_TO_SVG_MAP[name];

    if (!IconSVG) {
        return <div className='visuallyhidden'>{NOT_SUPPORTED_ICON_NAME}</div>;
    }

    const cn = clsx({
        [className]: Boolean(className),
        [styles['icon']]: true,
    });

    const iconSize = ICONS_SIZES_MAP[size];
    const iconTitle = title || `${name} ${t('common.icon')}`;
    const additionalProps = isDecorative
        ? { 'aria-hidden': true }
        : { role: 'img', title: iconTitle, 'aria-label': iconTitle };

    return <IconSVG className={cn} width={iconSize} height={iconSize} {...additionalProps} />;
};

export default Icon;
