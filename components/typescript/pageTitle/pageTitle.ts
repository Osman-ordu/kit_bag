import React, { ReactNode } from 'react';
import styles from './styles.module.scss';

interface PageTitleProps {
  title: string;
  type?: string;
  svg?: ReactNode;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, type, svg }) => (
  <div className={`${styles['c-pagetitle']} ${styles[type ?? 'normal']}`}>
    {svg}
    <span>{title}</span>
  </div>
);

export default PageTitle;
