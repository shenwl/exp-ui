import React, { Fragment, ReactFragment, ReactElement } from "react";
import ReactDOM from 'react-dom';
import Dialog from './dialog';
import Button from '../button';

interface ConfirmParam {
  content: ReactElement | ReactFragment;
  title?: string;
}

const confirm: (ConfirmParam: ConfirmParam) => void = ({content, title}) => {
  return new Promise((resolve, reject) => {
    const div = document.createElement('div');
    document.body.append(div);

    const closeDialog = (): void => {
      ReactDOM.render(React.cloneElement(dialog, { visible: false }), div);
      ReactDOM.unmountComponentAtNode(div);
      div.remove();
    }
  
    const handleClose = (): void => {
      closeDialog();
      reject();
    }

    const handleConfirm = (): void => {
      closeDialog();
      resolve();
    }
  
    const dialog = (
      <Dialog
        visible={true}
        onClose={handleClose}
        maskClosable={true}
        title={title}
        footer={(
          <Fragment>
            <Button onClick={handleClose}>取消</Button>
            <Button onClick={handleConfirm} desc="primary">确认</Button>
          </Fragment> 
        )}
      >
        <Fragment>
          { content }
        </Fragment>
      </Dialog>
    );
    ReactDOM.render(dialog, div);
  })
}

export default confirm;
 