import { Progress, Space } from 'antd';
import React from 'react'
import './Circular.css'
import { useEffect } from 'react';

const CirculerBar = (props) => {
  useEffect(() => {

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '9fc72827fdmshbfef3dea6f543cbp11cdd7jsncabf165fc080',
        'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
      }
    };

    fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));

  }, [])

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