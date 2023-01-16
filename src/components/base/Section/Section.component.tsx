import clsx from 'clsx';
import { memo, PropsWithChildren as IPropsWithChildren } from 'react';

import styles from './Section.module.scss';

interface ISectionProps extends IPropsWithChildren {
    className?: string;
    contentClassName?: string;
    title: string;
    showTitle?: boolean;
    withMargin?: boolean;
}

const Section: React.FC<ISectionProps> = ({
    className = '',
    contentClassName = '',
    title,
    showTitle = true,
    withMargin = true,
    children,
}) => {
    const sectionCn = clsx({
        [styles.section]: true,
        [styles['m-with-margin']]: withMargin,
        [className]: Boolean(className),
    });

    const titleCn = clsx({
        [styles.title]: true,
        visuallyhidden: !showTitle, // Note: Even title not displayed visually, it is still vital for A11y
    });

    const contentCn = clsx({
        [contentClassName]: Boolean(contentClassName),
    });

    return (
        <section aria-label={title} className={sectionCn}>
            <h1 className={titleCn}>{title}</h1>
            <div className={contentCn}>{children}</div>
        </section>
    );
};

export default memo(Section);
