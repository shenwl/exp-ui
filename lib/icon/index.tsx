import React from "react";
import "../../icons/importAll";
import './style.scss';

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = props => {
  return (
    <svg className="exp__icon" {...props}>
      <use xlinkHref={`#${props.name}`} />
    </svg>
  );
};

export default Icon;
