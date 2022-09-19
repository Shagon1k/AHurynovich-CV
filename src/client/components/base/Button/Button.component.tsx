import React, { memo } from 'react';
import styles from './Button.module.scss';

interface IButtonProps {
    disabled: boolean;
    title: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ButtonComponent: React.FC<IButtonProps> = ({ disabled, title, onClick }: IButtonProps) => {
    return (
        <button className={styles.button} name={title} onClick={onClick} disabled={disabled}>
            {title}
        </button>
    );
};

export default memo(ButtonComponent);
