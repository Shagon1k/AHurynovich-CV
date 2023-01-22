import clsx from 'clsx';
import { forwardRef, type PropsWithChildren as IPropsWithChildren } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import styles from './Link.module.scss';

interface ILinkProps extends IPropsWithChildren {
    className?: string;
    to: string;
    isExternal?: boolean;
    title?: string;
    onEnter?: () => void;
    onLeave?: () => void;
}

const Link = forwardRef<HTMLAnchorElement, ILinkProps>(
    ({ className = '', to, isExternal = false, title, onEnter, onLeave, children }, ref) => {
        const cn = clsx({
            [className]: Boolean(className),
            [styles['link']]: true,
        });

        const commonProps = {
            className: cn,
            title,
            ref,
            ...(onEnter && { onFocus: onEnter, onMouseEnter: onEnter }),
            ...(onLeave && { onBlur: onLeave, onMouseLeave: onLeave }),
        };

        return isExternal ? (
            <a href={to} target='_blank' rel='noreferrer' {...commonProps}>
                {children}
            </a>
        ) : (
            <RouterLink to={to} {...commonProps}>
                {children}
            </RouterLink>
        );
    }
);

Link.displayName = 'Link';

export default Link;
