import React from 'react'

const AddData = (props) => {
    return <>
        <h5>Short description:</h5>
        <h5>Add new user:</h5>
        <p>Нажмите для добавления новой записи в таблицу</p>
        <button disabled={!props.isDataLoaded} onClick={()=>{props.showForm(true)}} type="button" className="btn btn-primary btn-lg btn-block">ADD</button>
        </>
};

export default AddData