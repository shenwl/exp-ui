import React, { useState } from 'react';
import Dialog from './index';

const DialogExample: React.FunctionComponent = () => {
  const [show, setShow] = useState(false);

  const handleClose = (): void => {
    setShow(false);
  }

  return (
    <div>
      <Dialog
        visible={show}
        onCancel={handleClose}
      >
        <div>content</div>
      </Dialog>
      <button onClick={() => { setShow(!show) }}>click</button>
    </div>
  )
};

export default DialogExample;

