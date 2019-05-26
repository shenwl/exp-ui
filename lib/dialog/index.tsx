import React, { Fragment, ReactElement } from "react";
import ReactDOM from 'react-dom';
import Icon from '../icon';
import alert from './alert';
import confirm from './confirm';
import './style.scss';
import { scopedClassMaker } from '../helpers/classes';

const sc = scopedClassMaker('exp__dialog')

interface Props {
  visible: boolean;
  title?: string;
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
          <span>{props.title}</span>
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
  title: '提示',
  onClose: () => {},
};

export default Dialog;

export {
  alert,
  confirm,
};
