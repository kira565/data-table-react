import React from 'react'
import Table from "./Table";
import {connect} from 'react-redux'
import {addUserToDataBase, dataAddedSuccessful, getBigData, getSmallData, showForm} from "../../redux/table-reducer";


let mapStateToProps = (state) => {
    return {
        isDataLoaded: state.dataBaseTable.isDataLoaded,
        isFormActive: state.dataBaseTable.isFormActive,
        userData: state.dataBaseTable.userData,
        isFetching: state.dataBaseTable.isFetching
    }
};

class TableContainer extends React.Component {
    

    render(){
        return <Table {...this.props}/>
    }
}

export default connect(mapStateToProps, {showForm, getSmallData, getBigData, addUserToDataBase, dataAddedSuccessful})(TableContainer)