import React from "react";
import { scopedClassMaker } from '../helpers/classes';
import { classNames } from "../helpers/classes";
import "./style.scss";

const sc = scopedClassMaker('exp__layout');

interface Props extends React.HtmlHTMLAttributes<HTMLElement> {}

const Layout: React.FunctionComponent<Props> = (props) => {
  const { className, ...restProps } = props;
  return (
    <div className={classNames(sc(), className)} {...restProps}>
      {props.children}
    </div>
  );
};

export default Layout;
