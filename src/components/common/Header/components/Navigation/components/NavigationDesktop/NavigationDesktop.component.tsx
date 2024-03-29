import { type INavItem } from '../../Navigation.component';
import splitArrayByTwo from './helpers/splitArrayByTwo';

import styles from './NavigationDesktop.module.scss';

interface INavigationDesktopProps {
    navItemsData: INavItem[];
    renderNavItems: (navItemsArr: INavItem[], navItemClassName: string) => React.ReactNode;
}

const NavigationDesktop: React.FC<INavigationDesktopProps> = ({ navItemsData, renderNavItems }) => {
    const [navItemsDataLeft, navItemsDataRight] = splitArrayByTwo(navItemsData);

    const navItemsLeft = renderNavItems(navItemsDataLeft, styles['nav-item']);
    const navItemsRight = renderNavItems(navItemsDataRight, styles['nav-item']);

    return (
        <ul className={styles['nav-items-list']}>
            <li>
                <ul>{navItemsLeft}</ul>
            </li>
            <li>
                <ul>{navItemsRight}</ul>
            </li>
        </ul>
    );
};

export default NavigationDesktop;
