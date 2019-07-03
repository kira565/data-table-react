import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import '../../../../node_modules/react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import paginationFactory from 'react-bootstrap-table2-paginator'
import styles from '../data-table.module.css'
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit'
import TableSearch from "./TableSearch";



const {SearchBar, ClearSearchButton} = Search;
class CustomTable extends React.Component {
    state = {
        isRowClicked: false,
        firstName: null,
        lastName: null,
        description: null,
        address: {
            streetAddress: null,
            city: null,
            state: null,
            zip: null,
        }
    };


    render() {
        let selectUser = (row) => {
            this.setState({
                isRowClicked: true,
                firstName: row.firstName,
                lastName: row.lastName,
                description: row.description,
                address: {
                    streetAddress: row.address.streetAddress,
                    city: row.address.city,
                    state: row.address.state,
                    zip: row.address.zip,
                }
            })
        };
        const columns = [
            {
                dataField: 'id',
                text: 'ID',
                sort: true,

            }, {
                dataField: 'firstName',
                text: 'First name',
                sort: true,
            }, {
                dataField: 'lastName',
                text: 'Last name',
                sort: true,
            }, {
                dataField: 'email',
                text: 'Email',
                sort: true,

            }, {
                dataField: 'phone',
                text: 'Phone',
                sort: true,

            }];
        const pagOptions = {
            sizePerPage: 50,
            hideSizePerPage: true,
            firstPageText: 'First',
            prePageText: 'Back',
            nextPageText: 'Next',
            lastPageText: 'Last',
            nextPageTitle: 'First page',
            prePageTitle: 'Pre page',
            firstPageTitle: 'Next page',
            lastPageTitle: 'Last page',
        };
        const rowEvents = {
            onClick: (e, row) => {
                selectUser(row)
            }
        };
        const rowStyle = {
            cursor: 'pointer'
        };
        const defaultSorted = [{
            dataField: 'id',
            order: 'desc'
        }];


        return <>
            <ToolkitProvider
                search
                data={ this.props.userData }
                columns={ columns }
                hover
                keyField={'phone'}
                pagination={ paginationFactory(pagOptions) }
                rowEvents={ rowEvents }
                rowStyle={ rowStyle }
                bootstrap4
                defaultSorted={defaultSorted}
            >{
                props => (
                    <div>
                        <TableSearch {...props.searchProps}/>
                        <BootstrapTable
                            {...props.baseProps}
                        />
                    </div>
                )
            }

            </ToolkitProvider>


            {this.state.isRowClicked
                ? <div className={styles.table_interface__block}>
                    <div>Выбран пользователь <b>{this.state.firstName}</b></div>
                    <div>*Описание: <br/>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"
                                  value={this.state.description}/>
                    </div>
                    <div>Адрес проживания: <b>{this.state.address.streetAddress}</b></div>
                    <div>Город: <b>{this.state.address.city}</b></div>
                    <div>Провинция/штат: <b>{this.state.address.state}</b></div>
                    <div>Индекс: <b>{this.state.address.zip}</b></div>
                </div>
                : null
            }
        </>
    }
}

export default CustomTable