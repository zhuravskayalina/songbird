import styles from './Modal.module.scss';
import { ReactElement, useRef, useState, MouseEvent } from 'react';
import { clsx } from 'clsx';

interface ModalProps {
  children: ReactElement;
}

const Modal = ({ children }: ModalProps) => {
  const [close, setClose] = useState(false);
  const backgroundRef = useRef<HTMLDivElement>(null);

  const handleCloseOnBackground = (e: MouseEvent) => {
    if (e.target === backgroundRef.current) {
      setClose(true);
    }
  };

  const handleCloseOnIcon = () => {
    setClose(true);
  };

  return (
    <div
      role="presentation"
      ref={backgroundRef}
      className={clsx(styles.background, close && styles.closed)}
      onClick={(e) => handleCloseOnBackground(e)}>
      <div className={styles.window}>
        <div className={styles.content}>{children}</div>
        <button className={styles.close} onClick={handleCloseOnIcon}>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M0.5 0.5L13.5 13.5M13.5 0.5L0.5 13.5" stroke="white" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Modal;
