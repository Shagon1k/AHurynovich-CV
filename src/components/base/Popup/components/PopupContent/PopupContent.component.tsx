import styles from './PopupContent.module.scss';

export type IPopupContentProps = React.PropsWithChildren;

const PopupContent: React.FC<IPopupContentProps> = ({ children }) => {
    return <div className={styles['popup-content']}>{children}</div>;
};

PopupContent.displayName = 'PopupContent';

export default PopupContent;
