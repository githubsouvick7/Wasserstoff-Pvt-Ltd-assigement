import { Progress, Space } from 'antd';
import React from 'react'
import './Circular.css'

const CirculerBar = (props) => {

  return (
    <div className="progress">
      <Space wrap>
        <Progress type="circle" percent={props.percent} width={80} strokeColor={props.color} />
      </Space>
      <div className="data">
        <span>{props.value}</span>
        <p>{props.name}</p>
      </div>
    </div>
  )
}

export default CirculerBar