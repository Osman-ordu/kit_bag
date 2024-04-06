import React from 'react';
import Button from '../button/button'
import styles from './styles.module.scss';

interface ButtonProps {
  cancelClick?: () => void;
  submitClick?: () => void;
  submitTitle?: string;
}

const ButtonArea: React.FC<ButtonProps> = ({ cancelClick, submitClick, submitTitle }) => {
  return (
    <div className={styles['c-buttonarea']}>
      <Button text='cancel' type='danger' handleClick={cancelClick} />
      <Button text={submitTitle ?? 'Create'} htmlType='submit' handleClick={submitClick} />
    </div>
  );
};

export default ButtonArea;
