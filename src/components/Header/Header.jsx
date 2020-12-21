import React from 'react';
import ButtonWithIconWithTooltip from './../Buttons/ButtonWithIconWithTooltip';
import SearchBar from './../SearchBar/SearchBar';
import { WindowsOutlined } from '@ant-design/icons';

const headerStyles = {
  background: '#346fef',
  gridArea: '1 / 1 / span 1 / span 12',
  zIndex: 100,
  userSelect: 'none',
  display: 'flex',
  alignItems: 'center',
  padding: '0 3px'
};
const h2ContainerStyle = {
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  margin: '0 15px'
};
const h2Style = {
  fontSize: '16px',
  color: 'white'
}

const Header = () => {
  return (
    <header style={headerStyles}>
      <ButtonWithIconWithTooltip
        tooltipTitle="designed with MS ToDo"
        tooltipPlacement="bottomLeft"
        buttonType="primary"
        buttonShape="square"
        buttonSize="large"
        buttonIcon={<WindowsOutlined />}
      />
      <div style={h2ContainerStyle}><h2 style={h2Style}>To Do</h2></div>
      <SearchBar />
      <ButtonWithIconWithTooltip />
      <ButtonWithIconWithTooltip />
    </header>
  )
}

export default Header;

