import React from 'react';
import ReactDOM from 'react-dom';
import Icon from "./icon";

const handleClick: React.MouseEventHandler = (e) => {
  console.log(e.currentTarget);
}

ReactDOM.render((
  <div>
    <Icon name="wechat" onClick={handleClick} />
  </div>
), document.getElementById('root'));

 