import React, {Fragment, ReactChildren, ReactElement} from "react";
import Icon from '../icon';
import './style.scss';
import {scopedClassMaker} from '../helpers/classes';

const sc = scopedClassMaker('exp__dialog')

interface Props {
  visible: Boolean;
  onClose: React.MouseEventHandler;
  maskClosable?: Boolean;
  onOk?: Function;
  onCancel?: Function;
  onConfirm?: Function;
  closable?: Boolean;
  mask?: Boolean;
  children?: ReactElement | Element | String;
  footer?: ReactElement | Element | String;
}

const Dialog: React.FunctionComponent<Props> = (props) => {

  const handleClose: React.MouseEventHandler = (e) => {
    props.onClose(e);
  }
  const handleClickMask: React.MouseEventHandler = (e) => {
    props.maskClosable && props.onClose(e);
  }
  return (
    props.visible ? (
      <Fragment>
        <div className={sc('mask')} onClick={handleClickMask}></div>

        <div className={sc()}>
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
    ): null
  );
};

Dialog.defaultProps = {
  closable: true,
  mask: true,
  maskClosable: false,
  children: '',
  onClose: () => {},
};

export default Dialog;
