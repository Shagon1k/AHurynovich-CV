import clsx from 'clsx';

import GearSimplifiedSVG from '@assets/images/gears/gear-simplified.svg';
import TriangleSVG from '@assets/images/triangle.svg';

import styles from './ArrowButton.module.scss';

type IArrowDirection = 'left' | 'right';

interface IArrowButtonProps {
    className?: string;
    title: string;
    direction?: IArrowDirection;
    isDisabled?: boolean;
    onClick?: () => void;
    onEnter?: () => void;
    onLeave?: () => void;
    ariaControls?: string;
}

const ArrowButton: React.FC<IArrowButtonProps> = ({
    className = '',
    title,
    direction = 'right',
    isDisabled = false,
    onClick,
    onEnter,
    onLeave,
    ariaControls,
}) => {
    const cn = clsx({
        [className]: Boolean(className),
        [styles['arrow-btn']]: true,
        [styles[`m-${direction}`]]: true,
        [styles['m-disabled']]: isDisabled,
    });

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
