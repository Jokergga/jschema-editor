import { createFromIconfontCN } from '@ant-design/icons';
import { Tooltip } from 'antd';
import React, { FC } from 'react';

import styles from './index.less';

const Icon = createFromIconfontCN({
  scriptUrl: ['//at.alicdn.com/t/c/font_3557464_g01tbexykru.js'],
});

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  type: string;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
  className?: string;
  toolTit?: string;
}

const IconFont: FC<Props> = props => {
  const { toolTit, width, height, style, className, ...rest } = props;

  const iconStyle = {
    width,
    height,
    fontSize: width,
    lineHeight: `${height}px`,
    ...style,
  };

  return toolTit ? (
    <Tooltip title={toolTit}>
      <Icon
        {...rest}
        style={iconStyle}
        className={`${styles['icon']} ${className ? className : ''}`}
      />
    </Tooltip>
  ) : (
    <Icon
      {...rest}
      style={iconStyle}
      className={`${styles['icon']} ${className ? className : ''}`}
    />
  );
};

export default IconFont;
