import React from 'react'
import { Typography } from 'antd'
import './footerComponent.css'

export default function FooterComponent() {
  return (
    <div>
      <Typography.Title>ICS</Typography.Title>
      <i className="fab fa-facebook footer-icon"></i>
      <i className="fab fa-github footer-icon"></i>
      <i className="fab fa-instagram footer-icon"></i>
      <i className="fab fa-linkedin-in footer-icon"></i>
      <i className="fab fa-twitter footer-icon"></i>
      <Typography.Title level={4}>© 12-2020 ICS. Design with <i className="fal fa-heart"></i> Ant Design </Typography.Title>
    </div>
  )
}
