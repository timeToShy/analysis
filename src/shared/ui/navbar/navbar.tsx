import cn from 'classnames';
import { useLocation, useNavigate } from 'react-router';

import { Routes } from '../../router';
import { OrderPageIcon, PredictionPageIcon, SellsPageIcon, StartPageIcon } from '../icons';
import { Space } from '../space';
import styles from './navbar.module.scss';

export const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  console.log(pathname);


  return <nav className={styles.navbar}>
    <ul>
      <li>
        <button  onClick={() => navigate(Routes.start)}>
          <Space className={cn(styles.navbarItem, {
            [styles.navbarItem__active]: pathname === Routes.start,
          })} size={0} direction="vertical">
            <StartPageIcon />
            Старт
          </Space>
        </button>
      </li>
      <li>
        <button  onClick={() => navigate(Routes.sells)}>
        <Space className={cn(styles.navbarItem, {
          [styles.navbarItem__active]: pathname === Routes.sells,
        })} size={0} direction="vertical">
          <SellsPageIcon />
          Продажи
        </Space>
        </button>
      </li>
      <li>
        <button  onClick={() => navigate(Routes.predictions)}>
        <Space className={cn(styles.navbarItem, {
          [styles.navbarItem__active]: pathname === Routes.predictions,
        })} size={0} direction="vertical">
          <PredictionPageIcon />
          Прогноз
        </Space>
      </button>
      </li>
      <li>
        <button  onClick={() => navigate(Routes.orders)}>
        <Space className={cn(styles.navbarItem, {
          [styles.navbarItem__active]: pathname === Routes.orders,
        })} size={0} direction="vertical">
          <OrderPageIcon />
          Заказ
        </Space>
      </button>
      </li>
    </ul>
  </nav>;
};