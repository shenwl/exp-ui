import React, { Fragment, ReactElement } from "react";
import ReactDOM from 'react-dom';
import Icon from '../icon';
import Button from '../button';
import './style.scss';
import { scopedClassMaker } from '../helpers/classes';

const sc = scopedClassMaker('exp__dialog')

interface Props {
  visible: boolean;
  onClose: React.MouseEventHandler;
  zIndex?: number;
  maskClosable?: boolean;
  mask?: boolean;
  children?: ReactElement | Element | string;
  footer?: ReactElement | Element | string;
}

const Dialog: React.FunctionComponent<Props> = (props) => {

  const zIndexStyle = {zIndex: props.zIndex || 1};

  const handleClose: React.MouseEventHandler = (e) => {
    props.onClose(e);
  }
  const handleClickMask: React.MouseEventHandler = (e) => {
    props.maskClosable && props.onClose(e);
  }
  const dialog = props.visible ? (
    <Fragment>
      <div className={sc('mask')} onClick={handleClickMask} style={zIndexStyle}></div>

      <div className={sc()} style={zIndexStyle}>
        <header className={sc('header')}>
          <span>提示</span>
          <div className={sc('close')} onClick={handleClose}>
            <Icon name="close" />
          </div>
        </header>

        <main className={sc('content')}>
          { props.children }
        </main>

        <footer className={sc('footer')}>
          { props.footer }
        </footer>
      </div>
    </Fragment>
  ): null;

  return ReactDOM.createPortal(dialog, document.body)
};

Dialog.defaultProps = {
  mask: true,
  children: '',
  onClose: () => {},
};

export default Dialog;

interface AlertParam {
  content: string;
  title?: string;
}

export const alert: (AlertParam: AlertParam) => void = ({content, title}) => {
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
        footer={(
          <React.Fragment>
            <Button onClick={handleClose}>关闭</Button>
            <Button onClick={handleConfirm} type="primary">提交</Button>
          </React.Fragment> 
        )}
      >
        { content }
      </Dialog>
    );
    ReactDOM.render(dialog, div);
  })
}
