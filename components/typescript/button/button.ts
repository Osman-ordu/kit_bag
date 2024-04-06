import React from 'react';
import styles from './styles.module.scss';

interface ButtonProps {
  text?: any;
  type?: string;
  position?: string;
  htmlType?: 'submit' | undefined;
  height?: string;
  handleClick?: any;
}

const Button: React.FC<ButtonProps> = ({ text, type, position, htmlType, handleClick, height }) => {
  return (
    <button onClick={handleClick} className={`${styles['c-button']} ${styles[type ?? 'primary']} ${styles[height ?? 'default']} ${styles[position ?? 'default']}`} type={htmlType ?? 'button'}>
      {text}
    </button>
  );
};

export default Button;