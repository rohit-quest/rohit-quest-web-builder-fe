import React, { useState } from 'react'
import './styles/HeroSection.css'
import RobotSVG from '../assets/robot.svg'
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [prompt, setPrompt] = useState('');
    const navigate = useNavigate();

    return (
        <div className='hero-section w-[90%] flex justify-center items-center gap-[28px] m-auto mt-[80px]'>
            <div className='flex flex-col gap-[40px]'>
                <div className='hero-section-text-container'>
                    <p>Elevating Possibilities with AI</p>
                    <p>Advanced AI solutions designed to enhance productivity, drive efficiency, and create unparalleled value for businesses and individuals.</p>
                </div>
            </div>

            <div>
                <img src={RobotSVG} alt="" />
            </div>
        </div>
    )
}

export default HeroSection