import styles from './ListFilter.module.css'

const ListFilter = (props: any) => {
    const dropdownChangeHandler = (event: any) => {
        props.onChangeFilter(event.target.value);
    };
    return (
        <div className={styles['expenses-filter']}>
            <div className={styles['expenses-filter__control']}>
                <label>Filter By Year</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                </select>
            </div>
        </div>
    );
}

export default ListFilter;
