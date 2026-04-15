import React, { useState, useEffect } from 'react';
import { useMapsLibrary } from '@vis.gl/react-google-maps';
import { Polyline } from '@vis.gl/react-google-maps';

const SPEED_COLORS = {
  SLOW: '#F57C00', 
  NORMAL: '#00B248', 
  TRAFFIC_JAM: '#C62828', 
};

const TrafficPolyline = ({ encodedPolylineStr, route }) => {
  const [polylines, setPolylines] = useState([]);
  const geometryLibrary = useMapsLibrary('geometry');

  useEffect(() => {
    if (!encodedPolylineStr || !geometryLibrary) return;

    const decodePath = (encodedPath) => {
      return geometryLibrary.encoding.decodePath(encodedPath).map((point) => ({
        lat: point.lat(),
        lng: point.lng(),
      }));
    };

    const polylinePoints = decodePath(encodedPolylineStr);

    const newPolylines = route.travelAdvisory.speedReadingIntervals.map((interval) => {
      const newPoints = polylinePoints.slice(interval.startPolylinePointIndex, interval.endPolylinePointIndex + 1);

      return {
        path: geometryLibrary.encoding.encodePath(newPoints),
        options: {
          strokeColor: SPEED_COLORS[interval.speed] || SPEED_COLORS.NORMAL,
          strokeWeight: 6,
        },
      };
    });

    setPolylines(newPolylines);

    return () => {
      setPolylines([]);
    };
  },[route, geometryLibrary]);

  return (
    <>

      {polylines.map((polyline, index) => (
        <Polyline
          encodedPath={polyline.path}
          strokeColor={polyline.options.strokeColor}
          strokeWeight={5}
          strokeOpacity={0.8}
          key={index}
        />
      ))}
    </>
  );
};

export default React.memo(TrafficPolyline);