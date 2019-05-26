import React, { Fragment, ReactElement, ReactFragment } from "react";
import ReactDOM from 'react-dom';
import Dialog from './dialog';
import Button from '../button';

interface AlertParam {
  content: ReactElement | ReactFragment;
  title?: string;
}

const alert: (AlertParam: AlertParam) => void = ({content, title}) => {
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
      footer={(
        <Fragment>
          <Button onClick={closeDialog} type="primary">确认</Button>
        </Fragment> 
      )}
    >
      <Fragment>
        { content }
      </Fragment>
    </Dialog>
  );
  ReactDOM.render(dialog, div);
}

export default alert;
