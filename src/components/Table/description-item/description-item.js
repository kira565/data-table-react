import React from 'react'

const Description = (props) => {
    return <>
        <h5>Short description:</h5>
        <div className='description'>
            <h6>Choose the type of getting data:</h6>
            <p>Интерфейс таблицы предлагает выбрать набор данных: маленький и большой.
                Для получения большого объема(1000 записей), нажмите на кнопку "BIG data",
                для получения малого объема(32 записи), нажмите на кнопку "SMALL data".</p>
            <p>По окончанию загрузки данных, вы сможете добавить новые строки в таблицу</p>
        </div>
    </>
};

export default Description