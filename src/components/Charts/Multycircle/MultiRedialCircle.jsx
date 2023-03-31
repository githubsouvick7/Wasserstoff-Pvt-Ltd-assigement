import React from 'react';
import './Multi.css'

const MultiRedialCircle = () => {
  return (
    <div className="progress">
      <div
        style={{
          width: "130px",
          height: "130px",
          border: "4.89873px solid #FF708B",
          borderRadius: "50%"
        }}
      >
        <div
          style={{
            width: "100px",
            height: "100px",
            border: "4.89873px solid #FFBA69",
            borderRadius: "50%"
          }}
        >
          <div
            style={{
              width: "50px",
              height: "50px",
              border: "4.89873px solid #DBDFF1",
              borderRadius: "50%",
              background: "#F4F6FF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <div
              style={{
                width: "15px",
                height: "15px",
                border: "4.89873px solid #8676FF",
                borderRadius: "50%"
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default MultiRedialCircle