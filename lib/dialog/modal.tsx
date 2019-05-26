import React, { Fragment, ReactFragment, ReactElement } from "react";
import ReactDOM from 'react-dom';
import Dialog from './dialog';


interface ModalParam {
  content: ReactElement | ReactFragment;
  title?: string;
}

const modal: (ModalParam: ModalParam) => object = ({content, title}) => {
  const div = document.createElement('div');
  document.body.append(div);

  const closeDialog = (): void => {
    ReactDOM.render(React.cloneElement(dialog, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  }

  const dialog = (
    <Dialog
      visible={true}
      onClose={closeDialog}
      maskClosable={true}
      title={title}
    >
      <Fragment>
        { content }
      </Fragment>
    </Dialog>
  );
  ReactDOM.render(dialog, div);

  return {
    close: closeDialog,
  }
}

export default modal;
 