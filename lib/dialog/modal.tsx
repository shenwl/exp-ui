import React, { Fragment, ReactFragment, ReactElement } from "react";
import ReactDOM from 'react-dom';
import Dialog from './dialog';


interface ModalParam {
  content: ReactElement | ReactFragment;
  title?: string;
  afterClose?: Function;
  [props: string]: any;
}

interface ModalResult {
  close: Function;
}

const modal: (ModalParam: ModalParam) => ModalResult = (props) => {
  const {content, title, afterClose, ...rest} = props;

  const div = document.createElement('div');
  document.body.append(div);

  const closeDialog = (): void => {
    ReactDOM.render(React.cloneElement(dialog, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  }

  const close = (): void => {
    closeDialog();
    afterClose && afterClose();
  }

  const dialog = (
    <Dialog
      visible={true}
      onClose={closeDialog}
      maskClosable={true}
      title={title}
      {...rest}
    >
      <Fragment>
        { content }
      </Fragment>
    </Dialog>
  );
  ReactDOM.render(dialog, div);

  return {
    close,
  }
}

export default modal;
 