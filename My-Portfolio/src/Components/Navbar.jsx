import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import { useGloablContext } from '../Context'

const NavBar = () => {

    const { darkMode, state, DarkMode } = useGloablContext()


    return (
        <>

            <Wrapper>

                {/* ref={firstDiv} */}
                <nav>
                    <div className={`container-fluid ${state.DarkMode ? 'dark' : ''}`}  >
                        {/* ref={hero} */}
                        <div className="three-column-grid grid" >
                            <div className="two-column-grid grid-special">
                                <div className="logo_section">

                                    <img src={logo} alt="" className={`${DarkMode ? 'logo_dark' : "logo"}`} />

                                </div>
                                <div className="dark_mode">
                                <input type="checkbox" className="checkbox" id="checkbox" onClick={(e) => darkMode()} value={state.DarkMode} />
                                <label htmlFor="checkbox" className="label">
                                    <i className='fas fa-sun'></i>
                                    <i className="fas fa-moon"></i>
                                    <div className='ball' />
                                </label>
                            </div>
                                
                            </div>

                            {/* ref={menu_section} */}
                            <div className={`menu-section ${state.DarkMode ? 'light' : ''}`}  >
                                <ul>
                                    <li>
                                        <Link to="/">
                                            Home
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/about">
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Resume">
                                            Resume
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/portfolio">
                                            Portfolio
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/testimonial">
                                            Testimonial
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="contact-btn-section">
                                <Link to='/contact' style={{ textDecoration: "none", color: 'white' }}>
                                    <button className='contact_btn'>
                                        contact
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </Wrapper>


        </>


    )
}

export default NavBar

const Wrapper = styled.nav`
position: sticky;
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&family=Yantramanav&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
.container-fluid{
    padding: 12px;
    margin: auto;
    background-color: #f1f1f1;
    width: 100%;
    font-family: 'Poppins', sans-serif;
    display: flex;
    position: sticky;
    top: 0px;

    // font-family: 'Roboto Slab', serif;

}


.grid-special{
    display: grid;
   
}


.label{
    margin-left : 1rem;
}
.logo{
    font-size: 1.5rem;
    font-weight: 700;
}
.logo_dark{
    filter: drop-shadow(-4px -1px 17px blue) invert(95%);


}
.logo:hover{
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    color: red;
    z-index: 1;


}
.btn-text a{
    color: white;
    list-style: none;
    text-decoration: none;
}
.checkbox {
    opacity: 0;
    position: absolute;
  }
  
  .label {
    width: 50px;
    height: 23px;
    background-color:#111;
    display: flex;
    border-radius:50px;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    position: relative;
    transform: scale(1.5);
  }
  .label:hover{
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    color: #fff;
    background-color: #111;
    // border-radius:50px;
    box-shadow: 0px 0px 10px #111;
    z-index: 1;
    font-weight: 500;
    font-size: 1.1rem;
  }
  
  .ball {
    width: 21px;
    height: 20px;
    background-color: white;
    position: absolute;
    top: 2px;
    left: 2px;
    border-radius: 50%;
    -webkit-transition: -webkit-transform 0.2s linear;
    -webkit-transition: transform 0.2s linear;
    transition: transform 0.4s linear ;
  }
  
  
  /*  target the elemenent after the label*/
  .checkbox:checked + .label .ball{
    transform: translateX(24px);
  }
  
  .fa-moon {
    color: pink;
  }
  
  .fa-sun {
    color: yellow;
  }
  
  .menu-section ul{
      display: flex;
      align-items: center;
      width: 100%;
      gap: 3rem;
        padding: 12px;
        margin: 0;
  }
  
 .menu-section a{
     text-decoration: none;
     color: black;
     font-size: 1.2rem;
     font-weight: 200;
     

    }

.menu-section a:hover{
    color: #6049ac;
    font-weight: 500;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    background-color: #cac9c936;
    border-radius: 10px;
    padding: 10px;


}
.menu-section li{
    list-style: none;

}
.contact-btn-section{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    
}
.contact_btn{
    box-shadow: rgb(168 73 18) 0px 0px 30px;
    padding: 4px 34px;
    border: none;
    outline: none;
    border-radius: 40px;
    font-size: 1.1rem;
    color: white;
    background: orange ;
}

.contact_btn:hover {
    background: #054f7c;
    cursor: pointer;
}
.logo_section {
    margin-top: 0.5rem;
}
.logo_section img{
    width: 10rem;
    
}
`