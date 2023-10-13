import React from 'react';

import GearSimplifiedSVG from '@assets/images/gears/gear-simplified_no-center.svg';

import styles from './Button.module.scss';

export type IButtonType = 'button' | 'submit';

interface IButtonProps {
    id?: string;
    title: string;
    type?: IButtonType;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    isDisabled?: boolean;
}

const Button: React.FC<IButtonProps> = ({
    id,
    title,
    type = 'button',
    isDisabled = false,
    onClick,
}: IButtonProps) => {
    return (
        <button
            id={id}
            className={styles['button']}
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
