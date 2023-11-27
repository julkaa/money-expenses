import React from 'react';
import styles from './ListFilter.module.css';

interface IListFilterProps {
    selected: string;
    onChangeFilter: (value: string) => void;
}

const ListFilter: React.FC<IListFilterProps> = ({selected, onChangeFilter}) => {
    const dropdownChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChangeFilter(event.target.value);
    };

    return (
        <div className={styles['expenses-filter']}>
            <div className={styles['expenses-filter__control']}>
                <label>Filter By Year</label>
                <select value={selected} onChange={dropdownChangeHandler}>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                </select>
            </div>
        </div>
    );
};

export default ListFilter;
