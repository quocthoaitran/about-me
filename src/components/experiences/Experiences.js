import React from 'react'
import { Row, Col } from 'antd'
import Project from './Project'
import './experiences.css'

export default function Experiences() {
  return (
    <div className="experience-container" id="experiences">
      <Row gutter={[16, 16]} className="experience-component">
        <i className="fal fa-award experience-icon"></i>
        <Col span={24} className="experience-title">Experiences</Col>
        <Col sm={8} xs={12}>
          <Project
            imgUrl="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
            title="HR tool"
            description = "This is website to help HR management interview and arrangement schedule to interview"
            />
        </Col>
        <Col xs={12} sm={8}>
          <Project
            imgUrl="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
            title="HR tool"
            description = "This is website to help HR management interview and arrangement schedule to interview"
            />
        </Col>
        <Col xs={12} sm={8}>
          <Project
            imgUrl="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
            title="HR tool"
            description = "This is website to help HR management interview and arrangement schedule to interview"
            />
        </Col>
        <Col xs={12} sm={8}>
          <Project
            imgUrl="https://i2.wp.com/blog.logrocket.com/wp-content/uploads/2019/10/nodejs.png?fit=1240%2C700&ssl=1"
            title="HR tool"
            description = "This is website to help HR management interview and arrangement schedule to interview"
            />
        </Col>
      </Row>
    </div>
  )
}
