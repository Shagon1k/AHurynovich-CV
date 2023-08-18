import clsx from 'clsx';

import GearSimplifiedSVG from '@assets/images/gears/gear-simplified.svg';

import TriangleSVG from './images/triangle.svg';

import styles from './ArrowButton.module.scss';

interface IArrowButtonProps {
    modifiers: {
        direction: 'left' | 'right';
    };
    title: string;
    isDisabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onEnter?: () => void;
    onLeave?: () => void;
    ariaControls?: string;
}

const ArrowButton: React.FC<IArrowButtonProps> = ({
    title,
    modifiers,
    isDisabled = false,
    onClick,
    onEnter,
    onLeave,
    ariaControls,
}) => {
    const cn = clsx(styles['arrow-btn'], styles[`m-${modifiers.direction}`]);

    return (
        <button
            className={cn}
            onClick={onClick}
            title={title}
            aria-label={title}
            aria-controls={ariaControls}
            disabled={isDisabled}
            onFocus={onEnter}
            onBlur={onLeave}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
        >
            <GearSimplifiedSVG className={styles['gear-img']} aria-hidden={true} />
            <TriangleSVG className={styles['triangle-img']} aria-hidden={true} />
        </button>
    );
};

export default ArrowButton;
