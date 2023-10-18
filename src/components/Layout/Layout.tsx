import { Outlet } from 'react-router-dom';

import styles from './Layout.module.scss';
import Header from '../Header/Header.tsx';
import Footer from '../Footer/Footer.tsx';

const Layout = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
