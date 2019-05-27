import React, { ReactElement, ReactFragment } from "react";
import modal from './modal';
import Button from '../button';

interface AlertParam {
  content: ReactElement | ReactFragment;
  title?: string;
}

const alert: (AlertParam: AlertParam) => void = (props) => {
  const onClose = () => {
    alertDialog.close();
  }
  const alertDialog = modal({
    ...props,
    footer: <Button onClick={onClose} desc="primary">确认</Button>,
  })
}

export default alert;
