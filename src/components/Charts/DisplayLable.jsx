import { CirclePacking } from '@ant-design/plots';

const data = {
  "name": "root",
  "children": [
    {
      "Name": "AFG",
      "value": 379989
    },
    {
      "Name": "AGO",
      "value": 458769
    },
    {
      "Name": "ALB",
      "value": 109921
    },
    {
      "Name": "ARE",
      "value": 876966
    },
    {
      "Name": "ARG",
      "value": 765495
    },
    {
      "Name": "ARM",
      "value": 136592
    },
    {
      "Name": "ATA",
      "value": 914286
    },
    {
      "Name": "ATF",
      "value": 654338
    },
    {
      "Name": "AUT",
      "value": 278453
    },
    {
      "Name": "IND",
      "value": 110978
    },
    {
      "Name": "USA",
      "value": 561555
    },
    {
      "Name": "UK",
      "value": 634568
    },
  ]
}

const DisplayLable = () => {
  const config = {
    autoFit: true,
    height: 600,
    padding: 50,
    data,
    sizeField: 'r',
    color: 'gray-black',
    label: {
      formatter: ({ Name }) => {
        return Name !== 'root' ? Name : '';
      },
      offsetY: 8,
      style: {
        fontSize: 12,
        textAlign: 'center',
        fill: 'blue',
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