import { Button, Modal, ModalProps } from 'antd';
import React, { FC } from 'react';
import './index.less';

interface Props extends ModalProps {}

const AlertModal: FC<Props> = props => {
  const { className, ...restProps } = props;
  return (
    <Modal
      className={`custom-alert-modal ${className}`}
      footer={[
        <Button key="back" size="large" onClick={props.onCancel}>
          {props.cancelText}
        </Button>,
        <Button
          key="submit"
          loading={props.confirmLoading}
          size="large"
          type="primary"
          onClick={props.onOk}
        >
          {props.okText}
        </Button>,
      ]}
      {...restProps}
    />
  );
};

export default AlertModal;
