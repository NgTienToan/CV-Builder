import React from 'react';
import styles from './Homepage.scss';


import HomePage1 from './../HomePage1/HomePage1'

class Homepage extends React.Component {

    render(){
        return(
            <React.Fragment>
                <HomePage1 />
                <div className={styles.header}>

                </div>

                </React.Fragment>
        )
    }
}

export default Homepage;