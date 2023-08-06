import styles from './PopupHeader.module.scss';

export type IPopupHeaderProps = React.PropsWithChildren;

const PopupHeader: React.FC<IPopupHeaderProps> = ({ children }) => {
    return (
        <div id='popup-header' className={styles['popup-header']}>
            {children}
        </div>
    );
};

PopupHeader.displayName = 'PopupHeader';

export default PopupHeader;
