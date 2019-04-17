import React from "react";
import "./style.scss";

interface Props {
  visible: Boolean;
  onOk: Function;
  onCancel: Function;
  onConfirm: Function;
  closable: Boolean;
  mask: Boolean;
}

const Dialog: React.FunctionComponent<Props> = (props) => {
  return (
    props.visible ? <div>Dialog</div>: null
  );
};

export default Dialog;
