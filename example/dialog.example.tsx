import React, { useState } from 'react';
import { alert, confirm, modal } from '../lib/dialog/index';

const DialogExample: React.FunctionComponent = () => {
  return (
    <div>
      <button onClick={() => { alert({ content: 'alert', title: 'alert' }) }}>alert</button>
      <button onClick={() => { confirm({ content: 'alert', title: 'confirm' }) }}>confirm</button>
      <button onClick={() => { modal({ content: 'modal', title: 'modal' }) }}>modal</button>
    </div>
  )
};

export default DialogExample;

