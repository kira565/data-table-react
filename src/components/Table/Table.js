import React from 'react'
import styles from './data-table.module.css'
import AddData from "./data_add-item/addData-item";
import Description from "./description-item/description-item";
import AddDataForm from "./data_add__form-item/data_add_form-item";
import Preloader from "../common/preloader/Preloader";
import CustomTable from "./custom-table/CustomTable";
import close from '../../../src/etc/img/stop.png'


const Table = (props) => {
    return <>
        {props.isFetching
            ? <Preloader />
            : null}
        <div className="table-interface">
            <h1 className='text-center'>Frontend test "DataTable"</h1>
            <div className={styles.table_interface__block}>
                <Description/>
            </div>
            <div className={styles.table_interface__block}>
                <AddData isDataLoaded={props.isDataLoaded} showForm={props.showForm}/>
            </div>
            <div>{
                    props.isFormActive  && <div className={styles.table_interface__block}>
                        <div className={styles.close}><img onClick={()=>{props.showForm(false)}} alt={close} src={close}/></div>
                        <AddDataForm addUserToDataBase = {props.addUserToDataBase}/>
                    </div>}
            </div>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button onClick={props.getBigData} type="button" className="btn btn-secondary">BIG data</button>
                <button onClick={props.getSmallData} type="button" className="btn btn-secondary">SMALL data</button>
            </div>
        </div>

        <div className='table'>
            <CustomTable userData = {props.userData}/>
        </div>
    </>
};

export default Table