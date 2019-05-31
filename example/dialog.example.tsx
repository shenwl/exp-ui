import React, { useState } from 'react';
import Dialog, { alert, confirm, modal } from '../lib/dialog/index';

const DialogExample: React.FunctionComponent = () => {
  const [show, setShow] = useState(false);

  const [show2, setShow2] = useState(false);

  const handleClose = (): void => {
    setShow(false);
  }
  const handleClose2 = (): void => {
    setShow2(false);
  }

  return (
    <div>
      <Dialog
        visible={show}
        onClose={handleClose}
        footer={(
          <div>关闭</div>
        )}
      >
        <div>content</div>
      </Dialog>
      <Dialog
        visible={show2}
        onClose={handleClose2}
        maskClosable={true}
        footer={(
          <div>关闭</div>
        )}
      >
        <div>content2</div>
      </Dialog>
      <button onClick={() => { setShow(!show) }}>click</button>
      <button onClick={() => { setShow2(!show2) }}>click2</button>
      <button onClick={() => { alert({ content: 'alert', title: 'alert' }) }}>alert</button>
      <button onClick={() => { confirm({ content: 'alert', title: 'confirm' }) }}>confirm</button>
      <button onClick={() => { modal({ content: 'modal', title: 'modal' }) }}>modal</button>
    </div>
  )
};

export default DialogExample;

