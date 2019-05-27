import React, { ButtonHTMLAttributes } from "react";
import './style.scss';
import classNames from "../helpers/classnames";


interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: React.MouseEventHandler;
  desc?: 'primary' | 'warning' | 'info' | 'danger' | 'normal' | 'disabled';
  size?: 'mini' | 'large' | 'small';
  className?: string;
  plain?: boolean;
  loading?: boolean;
}

const Button: React.FunctionComponent<Props> = (props) => {
  const { className, children, desc, loading, ...rest } = props;

  return (
    <button 
      className={classNames('exp__button', `exp__button_${desc}`, className)}
      {...rest}
    >
      {children}
    </button>
  )
};

Button.defaultProps = {
  desc: 'normal',
  onClick: () => {},
  size: 'small',
};

export default Button;