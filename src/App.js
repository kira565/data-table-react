import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import TableContainer from "./components/Table/TableContainer";
import {Route} from "react-router-dom";

const App = () => {
    return <div className='container'>
        <Route render={() => <TableContainer/>}/>
    </div>
};
export default App;
