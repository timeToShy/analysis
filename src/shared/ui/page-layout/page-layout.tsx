import { Outlet } from 'react-router';

import { Header } from '../header';
import { Navbar } from '../navbar';
import { Space } from '../space';
import styles from './page-layout.module.scss';

export const PageLayout = () => {

  return <Space size={0}>
    <Navbar />
    <div style={{ width: '100%' }}>
      <Header />
      <div className={styles.page}>
        <Outlet />
      </div>
    </div>
  </Space>;
};