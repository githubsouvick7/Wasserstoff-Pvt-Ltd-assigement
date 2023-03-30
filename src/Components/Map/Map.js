import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const Map = () => {
    return (
        <ComposableMap projection="geoMercator" width={800} height={400}>
            <Geographies geography={"https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"}>
                {({ geographies }) =>
                    geographies.map(geo => (
                        <Geography key={geo.rsmKey} geography={geo} />
                    ))
                }
            </Geographies>
        </ComposableMap>
    );
};

export default Map;
