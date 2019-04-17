import React, {useState} from 'react';
import Dialog from './index';

const DialogExample: React.FunctionComponent = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Dialog
        visible={show}
      >

      </Dialog>
      <button onClick={() => { setShow(!show) }}>click</button>
    </div>
  )
};

export default DialogExample;

