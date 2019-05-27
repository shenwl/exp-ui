import React, { Fragment, ReactFragment, ReactElement } from "react";
import modal from './modal';
import Button from '../button';

interface ConfirmParam {
  content: ReactElement | ReactFragment;
  title?: string;
}

const confirm: (ConfirmParam: ConfirmParam) => void = (props) => {
  return new Promise((resolve, reject) => {
  
    const handleClose = (): void => {
      confirmDialog.close();
      reject();
    }

    const handleConfirm = (): void => {
      confirmDialog.close();
      resolve();
    }
  
    const confirmDialog = modal({
      ...props,
      footer: (
        <Fragment>
          <Button onClick={handleClose}>取消</Button>
          <Button onClick={handleConfirm} desc="primary">确认</Button>
        </Fragment> 
      ),
    })
  })
}

export default confirm;
 