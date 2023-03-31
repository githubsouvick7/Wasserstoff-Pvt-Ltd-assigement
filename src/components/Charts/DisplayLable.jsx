import React, { useState, useEffect } from 'react';
import { CirclePacking } from '@ant-design/plots';

const DisplayLable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/%24m0nDoQYqH/basic-packing.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    autoFit: true,
    height: 600,
    padding: 50,
    data,
    sizeField: 'r',
    color: '#EEF1FA-#030092-#C500F6',
    label: {
      formatter: ({ name }) => {
        return name !== 'root' ? name : '';
      },
      offsetY: 8,
      style: {
        fontSize: 12,
        textAlign: 'center',
        fill: 'white',
        border: {
          color: "black",
          width: "2px"
        }
      },

    },
    legend: false,
  };

  return <CirclePacking {...config} />;
};

export default DisplayLable;