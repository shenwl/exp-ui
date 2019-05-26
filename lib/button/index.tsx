import React, { ButtonHTMLAttributes } from "react";
import './style.scss';
import classNames from "../helpers/classnames";


interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: React.MouseEventHandler;
  type?: 'primary' | 'warning' | 'info' | 'danger' | 'normal';
  size?: 'mini' | 'large' | 'small';
  className?: string;
  plain?: boolean;
}

const Button: React.FunctionComponent<Props> = (props) => {
  const { className, children, type, ...rest } = props;

  return (
    <button 
      className={classNames('exp__button', `exp__button_${type}`, className)}
       {...rest}
      >
      {children}
    </button>
  )
};

Button.defaultProps = {
  type: 'normal',
  onClick: () => {},
  size: 'small',
};

export default Button;