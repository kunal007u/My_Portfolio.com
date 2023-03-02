import React from 'react'
import styled from 'styled-components'
import hero from '../assets/hero.svg'
import '../App.css'
import { Link } from 'react-router-dom'
import { useGloablContext } from '../Context'
const Hero = () => {

    const {DarkMode} = useGloablContext()
    return (
        <>
            <Wrapper>
                <div className="hero ">
                    <div className="two-column-grid grid hero-box">
                        <div className="hero-content">
                            <h1>Hi, I'm</h1>
                            <h2>krunal Kathiriya</h2>
                            <p> I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
                            <div className={`icons `}>
                                <a href=""><i className={`fa-brands fa-linkedin ${DarkMode ? "dark-icons": ""}`}></i></a>
                                <a href=""><i className={`fa-brands fa-facebook  ${DarkMode ? "dark-icons": ""}`}></i></a>
                                <a href="https://www.instagram.com/kunal____007u/"><i className={`fa-brands fa-instagram  ${DarkMode ? "dark-icons": ""}`}></i></a>



                            </div>
                            <div className="Hero-btn-section">
                                <Link to='/contact'>
                                    <button className='Hero-btn'> Hire me</button>
                                </Link>
                            </div>
                        </div>
                        <div className="hero-img">
                            <img src={hero} alt="" />
                        </div>
                    </div>
                </div>
            </Wrapper>

        </>
    )
}

const Wrapper = styled.section`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

.hero{
    font-family: 'Poppins', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 120px;
    margin-bottom: 120px;
}
.hero-box{
    width: 70%;
}
    .hero-img img{
        width: 110%;
    }
    .hero-content h1{
        // color: orange;
        font-size: 1.5rem;
    }
    .hero-content h2{
        font-size: 2.5rem;
        line-height: 3.5rem;
        color: orange;
        text-transform: uppercase;
    }
    .hero-content p{
        font-size: 1rem;
        font-weight: 400;
    }

    .Hero-btn{

        box-shadow: rgb(168 73 18) 0px 0px 50px;
        padding: 9px 39px;
        border: none;
        outline: none;
        border-radius: 40px;
        font-size: 1.1rem;
        color: white;
        background: orange;
        margin-top: 40px;

    }
    .Hero-btn:hover {
        background: #054f7c;
        cursor: pointer;
    }
`
export default Hero