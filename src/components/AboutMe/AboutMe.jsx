import React from 'react'
import CustomButton from '../CustomButton'
import './AboutMe.css'
import HeaddingText from '../HeaddingText';
import AboutMeImage from '../../assets/about-us.svg'
import ResumePdf from '../../assets/resume.pdf';

const AboutMe = () => {
    function onTaped() {
    };
    return (
        <div className='about-me'>
            <div className='left-image-container'>
                <img className='about-image' src={AboutMeImage} alt="" />
            </div>
            <div className='about-details'>
                <HeaddingText className="about-title padding" text="About Me"></HeaddingText>
                <p className='about-description padding'>some description of the user and some breaf note pf the user and some specilazation details of the persion</p>
                <CustomButton className="padding" name="" onClick={onTaped}><a className='download-resume' href={ResumePdf} download>Download Resume</a></CustomButton>
            </div>
        </div>
    )
}

export default AboutMe