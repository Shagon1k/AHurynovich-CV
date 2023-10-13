import clsx from 'clsx';
import { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import styles from './Link.module.scss';

interface ILinkProps extends React.PropsWithChildren {
    id?: string;
    className?: string;
    type?: 'router' | 'external' | 'simple';
    to: string;
    title?: string;
    onEnter?: () => void;
    onLeave?: () => void;
}

const Link = forwardRef<HTMLAnchorElement, ILinkProps>(
    ({ id, className = '', type = 'router', to, title, onEnter, onLeave, children }, ref) => {
        const cn = clsx({
            [className]: Boolean(className),
            [styles['link']]: true,
        });

        const commonProps = {
            id,
            className: cn,
            title,
            ref,
            ...(onEnter && { onFocus: onEnter, onMouseEnter: onEnter }),
            ...(onLeave && { onBlur: onLeave, onMouseLeave: onLeave }),
        };

        switch (type) {
            case 'external':
                return (
                    <a href={to} target='_blank' rel='noreferrer' {...commonProps}>
                        {children}
                    </a>
                );
            case 'simple':
                return (
                    <a href={to} {...commonProps}>
                        {children}
                    </a>
                );
            default:
            case 'router':
                return (
                    <RouterLink to={to} {...commonProps}>
                        {children}
                    </RouterLink>
                );
        }
    }
);

Link.displayName = 'Link';

export default Link;
