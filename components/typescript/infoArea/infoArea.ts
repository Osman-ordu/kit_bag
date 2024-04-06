import React from 'react';
import { useTranslation } from 'react-i18next';
import { Error } from '../../assets/svg/Error';
import { Info } from '../../assets/svg/Info';
import styles from './styles.module.scss';

interface InfoAreaProps {
  text: string;
  type: string;
}

const InfoArea: React.FC<InfoAreaProps> = ({ text, type }) => {
  const { t } = useTranslation();
  let svg;
  if (type === 'error') {
    svg = <Error />;
  } else {
    svg = <Info />;
  }

  return (
    <div className={`${styles['c-infoarea']} ${styles[type]}`}>
      <div className={styles[`c-infoarea__container`]}>
        {svg}
        <p>{t(text)}</p>
      </div>
    </div>
  );
};

export default InfoArea;