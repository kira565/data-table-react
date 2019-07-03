import React from 'react'

const NavigationPanel = (props) => {
    return <nav aria-label="navpanel">
        <ul className="pagination">
            <li className="page-item disabled">
                <a className="page-link" href="#">
                    Первая
                </a>
            </li>
            <li className="page-item disabled">
                <a className="page-link" href="#" aria-label="Предыдущая">
                    <span aria-hidden="true">«</span>
                    <span className="sr-only">Предыдущая</span>
                </a>
            </li>
            <li className="page-item active">
                <a className="page-link" href="#">1</a>
            </li>
            <li className="page-item">
                <a className="page-link" href="#">2</a>
            </li>
            <li className="page-item">
                <a className="page-link" href="#">3</a>
            </li>
            <li className="page-item">
                <a className="page-link" href="#" aria-label="Следующая">
                    <span aria-hidden="true">»</span>
                    <span className="sr-only">Следующая</span>
                </a>
            </li>
            <li className="page-item">
                <a className="page-link" href="#">
                    Последняя
                </a>
            </li>
        </ul>
    </nav>
};

export default NavigationPanel