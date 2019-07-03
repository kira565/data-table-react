import React from 'react'

const TableSearch = (props) => {
    let input;
    const handleClick = () => {
        props.onSearch(input.value);
    };
    return (
        <div style={{marginBottom: '20px'}} className='row'>
            <div className='col-sm-11'>
                <input
                    className="form-control"
                    ref={ n => input = n }
                    type="text"
                />
            </div>
            <div className='col-sm-1'>
                <button className="btn btn-warning" onClick={ handleClick }>Найти</button>
            </div>
        </div>
    );
};

export default TableSearch