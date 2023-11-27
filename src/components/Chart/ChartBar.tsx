import React from 'react';
import styles from './ChartBar.module.css';

export interface IChartBar {
    value: number;
    maxValue?: number;
    label: string;
}

const ChartBar: React.FC<IChartBar> = ({label, value, maxValue}) => {
    let barFillHeight = '0%';

    if (maxValue > 0) {
        barFillHeight = Math.round((value / maxValue) * 100) + '%';
    }

    return (
        <div className={styles['chart-bar']}>
            <div className={styles['chart-bar__inner']}>
                <div
                    className={styles['chart-bar__fill']}
                    style={{height: barFillHeight}}
                ></div>
            </div>
            <div className={styles['chart-bar__label']}>{label}</div>
        </div>
    );
};

export default ChartBar;
