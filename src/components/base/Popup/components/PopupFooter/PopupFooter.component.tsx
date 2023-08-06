import styles from './PopupFooter.module.scss';

export type IPopupFooterProps = React.PropsWithChildren;

const PopupFooter: React.FC<IPopupFooterProps> = ({ children }) => {
    return <div className={styles['popup-footer']}>{children}</div>;
};

PopupFooter.displayName = 'PopupFooter';

export default PopupFooter;
