import React from 'react';
import { Button, Tooltip } from 'antd';

const ButtonWithIconWithTooltip = props => {
  const { tooltipTitle, tooltipPlacement, buttonType, buttonShape, buttonSize, buttonIcon, buttonStyle } = props;

  return (
    <Tooltip title={tooltipTitle} placement={tooltipPlacement} >
      <Button type={buttonType} shape={buttonShape} size={buttonSize} icon={buttonIcon} style={buttonStyle} />
    </Tooltip>
  )
}

export default ButtonWithIconWithTooltip;
