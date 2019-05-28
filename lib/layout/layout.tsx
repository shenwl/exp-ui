import React, { ReactElement } from "react";
import { classNames, scopedClassMaker } from "../helpers/classes";
import Sider from './sider';
import "./style.scss";

const sc = scopedClassMaker('exp__layout');

interface Props extends React.HtmlHTMLAttributes<HTMLElement> {
  children: ReactElement | Array<ReactElement>;
}

const Layout: React.FunctionComponent<Props> = (props) => {
  const { className, children, ...restProps } = props;

  let hasSider = false;
  
  if((children as Array<ReactElement>).length) {
    (children as Array<ReactElement>).forEach(node => {
      if(node.type === Sider) {
        hasSider = true;
      }
    })
  } 

  return (
    <div className={classNames(sc(), className, hasSider ? 'sider-layout' : '')} {...restProps}>
      {children}
    </div>
  );
};

export default Layout;
