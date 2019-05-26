import React, { ButtonHTMLAttributes } from "react";
import './style.scss';
import classNames from "../helpers/classnames";
import { scopedClassMaker } from '../helpers/classes';

const sc = scopedClassMaker('exp__button')

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: React.MouseEventHandler;
  type?: string;
}

const Button: React.FunctionComponent<Props> = (props) => {
  const { className, children, ...rest } = props;
  return (
    <button className={classNames(sc(), className)} {...rest}>
      {children}
    </button>
  )
};

Button.defaultProps = {

};

export default Button;