import React from 'react'
import { Row, Col, Typography, Avatar } from 'antd'

import './about.css'

const { Text } = Typography

export default function About() {
  return (
    <div>
      <Row className="about-container" id="about">
        <Col span={24} className="about-title">
          <i className="fal fa-info-circle about-icon"></i>
          <div>About me</div>
        </Col>
        <Col span={12} xl={12} xs={24} className="about-avatar">
          <Avatar shape="circle" className="about-avatar" src="https://i.pinimg.com/originals/2a/40/ec/2a40ec0333897aa3309ffbfd5bff47d5.jpg"></Avatar>
        </Col>
        <Col span={12} xl={12} xs={24} className="about-information">
          <Row className="about-information-item">
            <Col span={7}>
              <Text>Full name</Text>
            </Col>
            <Col span={1}>
              <Text>:</Text>
            </Col>
            <Col span={16}>
              <Text>Tran Quoc Thoai</Text>
            </Col>
          </Row>
          <Row className="about-information-item">
            <Col span={7}>
              <Text>Date of birth</Text>
            </Col>
            <Col span={1}>
              <Text>:</Text>
            </Col>
            <Col span={16}>
              <Text>25 June 1997</Text>
            </Col>
          </Row>
          <Row className="about-information-item">
            <Col span={7}>
              <Text>Languages</Text>
            </Col>
            <Col span={1}>
              <Text>:</Text>
            </Col>
            <Col span={16}>
              <Text>Vietnamese - English</Text>
            </Col>
          </Row>
          <Row className="about-information-item">
            <Col span={7}>
              <Text>Nation</Text>
            </Col>
            <Col span={1}>
              <Text>:</Text>
            </Col>
            <Col span={16}>
              <Text>Vietnamese</Text>
            </Col>
          </Row>
          <Row className="about-information-item">
            <Col span={7}>
              <Text>Hobbies</Text>
            </Col>
            <Col span={1}>
              <Text>:</Text>
            </Col>
            <Col span={16}>
              <Text>Music, game, journey</Text>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
