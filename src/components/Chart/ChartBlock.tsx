import React from 'react';
import styles from './ChartBlock.module.css';
import ChartBar, {IChartBar} from './ChartBar';

interface IChartBlockProps {
    dataPoints: IChartBar[];
}

const ChartBlock: React.FC<IChartBlockProps> = ({dataPoints}) => {
    const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <div className={styles.chart}>
            {dataPoints.map((dataPoint) => (
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
