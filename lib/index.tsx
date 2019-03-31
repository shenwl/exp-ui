import React from 'react';
import ReactDOM from 'react-dom';
import Icon from "./icon";

const handleClick: React.MouseEventHandler = (e) => {
  console.log(e.currentTarget);
}

ReactDOM.render((
  <div>
    <Icon 
      name="wechat" 
      className="qq"
      onClick={handleClick} 
      onMouseEnter={() => {console.log('enter')}} 
      onMouseLeave={() => {console.log('leave')}} 
    />
  </div>
), document.getElementById('root'));

 