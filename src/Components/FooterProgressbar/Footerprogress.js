import React, { useState, useEffect } from 'react';
import { Histogram } from '@ant-design/plots';

const Footerprogress = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/antfincdn/RoliHq%2453S/histogram.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };
    const config = {
        data,
        binField: 'value',
        binWidth: 0.5,
    };

    return <Histogram {...config} />;
};

export default Footerprogress;
