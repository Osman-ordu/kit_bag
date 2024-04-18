import styles from './styles.module.scss';

const Loader = () => {
  return (
    <div className={styles['c-loader']}>
      <div className={styles['c-loader__spin']}></div>
    </div>
  );
};

export default Loader;
