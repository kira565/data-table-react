import React from 'react';
import preloader from '../../../etc/img/preloader.gif'
import styles from './Preloader.module.css'

const Preloader = () => {
    return <div>
        <img alt={'preloader'} src={preloader} className={styles.preloader}/>
    </div>
};
export default Preloader