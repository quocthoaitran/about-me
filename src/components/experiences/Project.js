import React from 'react'
import { Card } from 'antd'

export default function Project(props) {
  return (
    <Card hoverable cover={<img src={props.imgUrl} alt="project card" className="project-image"/>} className="project-container">
      <Card.Meta title={<span className="project-title">{props.title}</span>} description={<div className="project-description">{props.description}</div>} />
    </Card>
  )
}
