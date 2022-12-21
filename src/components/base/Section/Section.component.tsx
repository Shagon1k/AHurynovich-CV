import clsx from 'clsx';
import { memo, PropsWithChildren as IPropsWithChildren } from 'react';

import styles from './Section.module.scss';

interface ISectionProps extends IPropsWithChildren {
    contentClassName?: string;
    title: string;
    showTitle?: boolean;
}

const Section: React.FC<ISectionProps> = ({ contentClassName = '', title, showTitle = true, children }) => {
    const contentCn = clsx({
        [contentClassName]: Boolean(contentClassName),
    });

    const titleCn = clsx({
        [styles.title]: true,
        visuallyhidden: !showTitle, // Note: Even title not displayed visually, it is still vital for A11y
    });

    return (
        <section aria-label={title} className={styles.section}>
            <h1 className={titleCn}>{title}</h1>
            <div className={contentCn}>{children}</div>
        </section>
    );
};

export default memo(Section);
