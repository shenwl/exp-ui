import React, {Fragment} from "react";
import Icon from '../icon';
import "./style.scss";
import {scopedClassMaker} from '../helpers/classes';

const sc = scopedClassMaker('exp__dialog')

interface Props {
  visible: Boolean;
  onOk: Function;
  onCancel: Function;
  onConfirm: Function;
  closable?: Boolean;
  mask?: Boolean;
}

const Dialog: React.FunctionComponent<Props> = (props) => {
  const { onCancel} = props;
  return (
    props.visible ? (
      <Fragment>
        <div className={sc()}>
          <header className={sc('header')}>
            <span>提示</span>
            <Icon name="close" onClick={onCancel} />
          </header>

          <main className={sc('content')}>
            { props.children }
          </main>

          <footer className={sc('footer')}></footer>
        </div>
        <div className={sc('mask')}></div>
      </Fragment>
    ): null
  );
};

Dialog.defaultProps = {
  closable: true,
  mask: true,
};

export default Dialog;
