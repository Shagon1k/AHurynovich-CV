import clsx from 'clsx';
import { memo, PropsWithChildren as IPropsWithChildren } from 'react';

import styles from './Section.module.scss';

interface ISectionProps extends IPropsWithChildren {
    className?: string;
    contentClassName?: string;
    title: string;
    showTitle?: boolean;
    withSideMargin?: boolean;
}

const Section: React.FC<ISectionProps> = ({
    className = '',
    contentClassName = '',
    title,
    showTitle = true,
    withSideMargin = true,
    children,
}) => {
    const sectionCn = clsx({
        [className]: Boolean(className),
        [styles['section']]: true,
        [styles['m-with-side-margin']]: withSideMargin,
    });

    const titleCn = clsx({
        [styles['title']]: true,
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
