import React from 'react';
import { alert, confirm, modal, Button } from '../lib/index';

const DialogExample: React.FunctionComponent = () => {
  return (
    <div>
      <Button onClick={() => { alert({ content: 'alert', title: 'alert' }) }}>alert</Button>
      <Button onClick={() => { confirm({ content: 'alert', title: 'confirm' }) }}>confirm</Button>
      <Button onClick={() => { modal({ content: 'modal', title: 'modal' }) }}>modal</Button>
    </div>
  )
};

export default DialogExample;

