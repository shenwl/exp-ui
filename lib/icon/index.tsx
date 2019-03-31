import React from "react";
import "../../icons/importAll";
import './style.scss';

interface IconProps {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = props => {
  return (
    <svg className="exp__icon">
      <use xlinkHref={`#${props.name}`} />
    </svg>
  );
};

export default Icon;
