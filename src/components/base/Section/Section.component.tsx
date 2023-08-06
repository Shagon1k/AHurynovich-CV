import clsx from 'clsx';
import { memo } from 'react';

import { useSkipToContent } from '@reusables/custom-hooks';

import styles from './Section.module.scss';

interface ISectionProps extends React.PropsWithChildren {
    modifiers?: {
        withSideMargin?: boolean;
    };
    id: string;
    className?: string;
    contentClassName?: string;
    title: string;
    showTitle?: boolean;
}

const defaultModifiers = {
    withSideMargin: true,
};
const Section: React.FC<ISectionProps> = ({
    modifiers = {},
    id,
    className = '',
    contentClassName = '',
    title,
    showTitle = true,
    children,
}) => {
    const componentModifiers = { ...defaultModifiers, ...modifiers };
    const sectionCn = clsx({
        [className]: Boolean(className),
        [styles['section']]: true,
        [styles['m-with-side-margin']]: componentModifiers.withSideMargin,
    });
    const titleCn = clsx({
        [styles['title']]: true,
        visuallyhidden: !showTitle, // Note: Even title not displayed visually, it is still vital for A11y
    });
    const contentCn = clsx({
        [contentClassName]: Boolean(contentClassName),
    });

    useSkipToContent(id, title);

    return (
        <section id={id} aria-label={title} className={sectionCn}>
            <h1 className={titleCn}>{title}</h1>
            <div className={contentCn}>{children}</div>
        </section>
    );
};

export default memo(Section);
