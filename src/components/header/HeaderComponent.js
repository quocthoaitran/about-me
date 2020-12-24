import React from 'react'
import { Layout, Menu } from 'antd'

import './header.css'

const { Header } = Layout

export default function HeaderComponent() {
  return (
    <Header className="header">
      <div className="header-logo">ICS</div>
      <div className="header-container">
        <Menu theme="dark" className="header-menu" mode="horizontal" >
          <Menu.Item className="header-menu"><a href="#home">Home</a></Menu.Item>
          <Menu.Item><a href="#about">About</a></Menu.Item>
          <Menu.Item><a href="#education">Education</a></Menu.Item>
          <Menu.Item><a href="#experiences">Experiences</a></Menu.Item>
          <Menu.Item><a href="#contact">Contact</a></Menu.Item>
        </Menu>
      </div>
      {/* <Text className="header-logo" type="danger" strong>ics</Text> */}
    </Header>
  )
}
