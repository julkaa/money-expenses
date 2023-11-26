import React from 'react';
import ChartBar from './ChartBar';
import styles from './ChartBlock.module.css';

const ChartBlock = (props: any) => {
    const dataPointValues = props.dataPoints.map((dataPoint: any) => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <div className={styles.chart}>
            {props.dataPoints.map((dataPoint: any) => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />
            ))}
        </div>
    );
};

export default ChartBlock;
