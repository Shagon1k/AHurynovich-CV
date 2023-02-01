import clsx from 'clsx';
import React from 'react';

import GearSimplifiedSVG from '@assets/images/gears/gear-simplified_no-center.svg';

import styles from './Button.module.scss';

export type IButtonType = 'button' | 'submit';

interface IButtonProps {
    className?: string;
    title: string;
    type?: IButtonType;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    isDisabled?: boolean;
}

const Button: React.FC<IButtonProps> = ({
    className = '',
    title,
    type = 'button',
    isDisabled = false,
    onClick,
}: IButtonProps) => {
    const cn = clsx({
        [className]: Boolean(className),
        [styles['button']]: true,
    });

    return (
        <button
            className={cn}
            onClick={onClick}
            title={title}
            aria-label={title}
            type={type}
            disabled={isDisabled}
        >
            {title}
            <GearSimplifiedSVG className={styles['gear-img']} aria-hidden={true} />
        </button>
    );
};

export default Button;
