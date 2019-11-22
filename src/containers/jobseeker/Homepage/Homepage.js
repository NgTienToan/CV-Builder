import React from 'react';
import styles from './Homepage.scss';



// import Test from './../Test/Test';
import TopBar from './../CvMaker/TopBar';
import NavBar from './../CvMaker/NavBar';
import HomePage1 from './../HomePage1/HomePage1'

class Homepage extends React.Component {

    render(){
        return(
            <React.Fragment>
                {/* <HomePage1 /> */}
                <div className={styles.header}>
                    <TopBar />
                    <NavBar /> 
                </div>


                </React.Fragment>
        )
    }
}

export default Homepage;