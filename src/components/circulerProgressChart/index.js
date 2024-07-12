import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Circle, G, Svg, Text as SvgText } from 'react-native-svg';

const CircularProgressChart = ({ total, footprint, cost, reduction, size }) => {
  const strokeWidth = 20;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const percentage = (footprint / total) * 100;
  const dashOffset = circumference - (percentage / 100) * circumference;
  
  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <G rotation="-90" origin={`${size / 2}, ${size / 2}`}>
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#B7323B"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#7BA986"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={dashOffset}
            strokeLinecap="round"
          />
        </G>
        <SvgText
          x={size / 2 - 26}
          y={size / 2 - 10}
          textAnchor="middle"
          fill="black"
          fontSize="24"
          fontWeight="bold"
        >
          
          ${cost}.00
        </SvgText>
        <SvgText
          x={size / 2 -15}
          y={size / 2 + 20}
          textAnchor="middle"
          fill="green"
          fontSize="18"
          fontWeight="bold"
        >
          {/* {reduction} Tons */}
          {total} Tons
        </SvgText>
        <SvgText
          x={size / 2}
          y={size / 2 - radius - 10}
          textAnchor="middle"
          fill="gray"
          fontSize="14"
        >
          My Co2 Footprint: {total} Tons
        </SvgText>
        <SvgText
          x={size / 2}
          y={size / 2 + radius + 20}
          textAnchor="middle"
          fill="gray"
          fontSize="14"
        >
          My Co2 Reduction Cost: ${cost}
        </SvgText>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default CircularProgressChart;
