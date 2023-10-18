import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const navLinks = [
  {
    title: 'Gallery',
    url: 'gallery',
  },
  {
    title: 'Results',
    url: 'results',
  },
  {
    title: 'Start',
    url: 'game',
  },
];
const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <svg
          className={styles.logo}
          xmlns="http://www.w3.org/2000/svg"
          width="79"
          height="83"
          viewBox="0 0 79 83"
          fill="none"
        >
          <path
            d="M24.5462 15.3756C23.7762 16.8156 20.2962 17.2956 19.2362 15.3756C18.1762 13.4556 19.9162 9.15563 22.7762 10.1656C26.1362 11.3456 25.2662 14.0756 24.5462 15.3756ZM78.4062 55.9356C76.5662 69.6756 67.4062 69.7756 55.8562 69.9356H55.6462V79.6656C55.6462 80.3287 55.3828 80.9645 54.9139 81.4334C54.4451 81.9022 53.8092 82.1656 53.1462 82.1656C52.4831 82.1656 51.8472 81.9022 51.3784 81.4334C50.9096 80.9645 50.6462 80.3287 50.6462 79.6656V69.9856H50.3462C49.1262 69.9856 47.9462 70.0456 46.7962 70.0456C43.005 70.0695 39.2174 69.8054 35.4662 69.2556V79.6256C35.4662 80.2887 35.2028 80.9245 34.7339 81.3934C34.2651 81.8622 33.6292 82.1256 32.9662 82.1256C32.3031 82.1256 31.6672 81.8622 31.1984 81.3934C30.7296 80.9245 30.4662 80.2887 30.4662 79.6256V68.2456C28.2382 67.6796 26.066 66.9131 23.9762 65.9556C21.5096 64.7751 19.3718 63.0053 17.7515 60.8026C16.1312 58.5998 15.0785 56.0318 14.6862 53.3256L13.9462 48.5256C11.8762 35.1356 10.3262 25.0756 10.2662 17.6556L3.75618 21.2256C3.1729 21.537 2.49063 21.6066 1.85647 21.4196C1.22231 21.2325 0.687077 20.8037 0.366176 20.2256C0.0490023 19.6419 -0.0238446 18.9563 0.1636 18.319C0.351045 17.6817 0.783493 17.1447 1.36618 16.8256L7.65618 13.3856L1.26618 9.80562C0.98055 9.64344 0.729666 9.42659 0.527848 9.16745C0.326029 8.90831 0.177228 8.61195 0.0899413 8.29531C-0.0863429 7.65581 -0.00136641 6.97247 0.326176 6.39563C0.653718 5.81878 1.197 5.39568 1.83649 5.21939C2.47599 5.04311 3.15933 5.12808 3.73618 5.45563L10.9662 9.56563C11.384 7.70948 12.1807 5.95962 13.3062 4.42563C14.3152 3.16049 15.5774 2.12005 17.0118 1.37098C18.4463 0.6219 20.0213 0.180695 21.6362 0.0756256C23.096 -0.105941 24.5779 0.0404177 25.9739 0.50404C27.37 0.967662 28.645 1.73687 29.7062 2.75563C37.2662 9.82563 37.9762 29.1456 37.9162 37.0756C46.6362 36.1756 64.6662 38.9456 73.2662 45.5656C78.1762 49.2956 78.7662 53.2656 78.4062 55.9356ZM70.2662 49.5356C61.4262 42.7556 40.4262 40.7056 36.3262 42.4156C35.9384 42.5802 35.5151 42.6437 35.0961 42.6002C34.6771 42.5567 34.2759 42.4075 33.9302 42.1667C33.5845 41.9259 33.3056 41.6014 33.1195 41.2234C32.9334 40.8454 32.8462 40.4264 32.8662 40.0056C33.1662 32.6456 32.5862 12.2756 26.3162 6.44563C25.8687 5.99335 25.3361 5.63414 24.7491 5.3887C24.1622 5.14327 23.5324 5.01647 22.8962 5.01562C22.6762 5.01562 22.4462 5.01562 22.2162 5.01562C21.2796 5.0492 20.3606 5.28037 19.5196 5.69398C18.6786 6.10759 17.9345 6.69429 17.3362 7.41563C13.4462 12.5156 15.6162 26.5256 18.8962 47.7256L19.6362 52.5256C19.9066 54.4194 20.6381 56.2177 21.7662 57.7625C22.8943 59.3074 24.3846 60.5515 26.1062 61.3856C28.4521 62.4594 30.9107 63.2678 33.4362 63.7956H33.5562C39.0409 64.8382 44.6306 65.2209 50.2062 64.9356C52.2062 64.8756 54.0462 64.8556 55.8162 64.8356C68.2662 64.7656 72.2662 64.2856 73.4562 55.2756C73.5562 54.5356 73.8562 52.2856 70.2662 49.5356Z"
            fill="white"
          />
        </svg>
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          {navLinks.map(({ url, title }) => (
            <li key={title} className={styles.nav__item}>
              <NavLink to={url} className={styles.nav__link}>
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
