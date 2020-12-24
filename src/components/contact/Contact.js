import React from 'react'
import {Row, Col} from 'antd'
import './contact.css'

export default function Contact() {
  return (
    <div className="contact-container" id="contact" >
      <i className="fal fa-headphones contact-icon"></i>
      <span className="contact-title">Contact me</span>
      <Row className="contact-component">
        <Col span={8} md={8} sm={12} xs={24}>
          <i className="fal fa-map-marker-alt contact-item-icon"></i>
          <span className="contact-item-description">K82/54 Nguyen Luong Bang, Hoa Khanh, Da Nang</span>
        </Col>
        <Col span={8} md={8} sm={12} xs={24}>
          <i className="fal fa-mobile-android contact-item-icon"></i>
          <span className="contact-item-description">0327005115</span>
        </Col>
        <Col span={8} md={8} sm={12} xs={24}>
          <i className="fal fa-inbox contact-item-icon"></i>
          <span className="contact-item-description">quocthoaitran@gmail.com</span>
        </Col>
      </Row>
    </div>
  )
}
