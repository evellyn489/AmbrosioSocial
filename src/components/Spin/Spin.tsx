import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import styles from './Spin.module.scss';

const Spin: React.FC = () => {
 return <FaSpinner className={styles.spin} />;
};

export default Spin;