import React from 'react'
import './Home.css'
import Homeimage from '../../assets/home.svg';
import Flutter from '../../assets/flutter.svg';
import Dart from '../../assets/dart.svg';
import ReactLogo from '../../assets/react.svg';
import Api from '../../assets/api-96.png';
import Docker from '../../assets/docker.svg';
import jacascript from '../../assets/javascript.svg';
import kubernetes from '../../assets/kubernetes.svg';
import mongodb from '../../assets/mongodb.svg';
import mysql from '../../assets/mysql-logo.svg';
import nodejs from '../../assets/node-js.svg';

const HomeImage = () => {
    return (
        <div className='home-image'>
            <img className='persion-image' src={Homeimage} alt='' />
            <img className='skil-image flutter' src={Flutter} alt='' />
            <img className='skil-image dart' src={Dart} alt='' />
            <img className='skil-image api' src={Api} alt='' />
            <img className='skil-image docker' src={Docker} alt='' />
            <img className='skil-image react' src={ReactLogo} alt='' />
            <img className='skil-image javascript' src={jacascript} alt='' />
            <img className='skil-image kubernetes' src={kubernetes} alt='' />
            <img className='skil-image mongodb' src={mongodb} alt='' />
            <img className='skil-image mysql' src={mysql} alt='' />
            <img className='skil-image nodejs' src={nodejs} alt='' />
        </div>
    )
}

export default HomeImage