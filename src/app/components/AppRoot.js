import React from 'react/addons';
import Header from './Header';
import RightWrapper from './RightWrapper';
import Chevron from './Chevron';
import config from '../../../config/app';
import AboutYou from "./AboutYou";


class AppRoot extends React.Component {
    render() {
        return <div className = "appRoot" >
                <Header / >
                <Chevron / >
                <div className = "containerWrapper" >
                    <AboutYou / >
                    <RightWrapper / >
                </div> 
            </div > ;
    }
}

export default AppRoot;