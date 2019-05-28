import React from "react";
import { classNames, scopedClassMaker } from "../helpers/classes";
import "./style.scss";

const sc = scopedClassMaker('exp__layout');

interface Props extends React.HtmlHTMLAttributes<HTMLElement> {}

const Sider: React.FunctionComponent<Props> = (props) => {
  const { className, ...restProps } = props;
  return (
    <div className={classNames(sc('sider'), className)} {...restProps}>
      {props.children}
    </div>
  );
};

export default Sider;
