import React from 'react'
import { Row, Col, Typography, Timeline, Progress } from 'antd'
import './education.css'

const {Title, Text} = Typography

export default function Education() {
  return (
    <div>
      <Row className="education-container" id="education">
        <i className="fal fa-diploma education-icon"></i>
        <Col span={24} className="education-title">Education and Skills</Col>
        <Col span={10} xl={10} xs={24}>
          <Row>
            <Col span={24} className="education-time-line-container">
              <i className="fal fa-graduation-cap education-icon"></i>
              <Text className="education-title" >Education</Text>
              <Timeline mode="left" className="education-time-line">
                <Timeline.Item label="2012-2015">High school</Timeline.Item>
                <Timeline.Item label="2015-2020">Da Nang University of Science and Technology</Timeline.Item>
                <Timeline.Item></Timeline.Item>
              </Timeline>
            </Col>
          </Row>
        </Col>
        <Col span={14} xl={10} xs={24} className="education-skills-container">
          {/* <i className="fal fa-cogs education-icon"></i>
          <Text className="education-title">Skill Set</Text> */}
          <Row className="education-skill-set">
            <Title level={3}>HTML & CSS</Title>
            <Progress percent={30} strokeColor={{'0%': '#108ee9', '100%': '#87d068'}} status="active" className="education-skill-progress"/>

            <Title level={3}>Javascript</Title>
            <Progress percent={50} strokeColor={{'0%': '#108ee9', '100%': '#87d068'}}/>

            <Title level={3}>ReactJS</Title>
            <Progress percent={60} strokeColor={{'0%': '#108ee9', '100%': '#87d068'}}/>

            <Title level={3}>NodeJS</Title>
            <Progress percent={40} strokeColor={{'0%': '#108ee9', '100%': '#87d068'}}/>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
