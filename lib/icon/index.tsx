import React from "react";
import "../../icons/importAll";
import './style.scss';

interface IconProps {
  name: string;
  onClick: React.MouseEventHandler<SVGElement>;
}

const Icon: React.FunctionComponent<IconProps> = props => {
  return (
    <svg className="exp__icon" onClick={props.onClick}>
      <use xlinkHref={`#${props.name}`} />
    </svg>
  );
};

export default Icon;
