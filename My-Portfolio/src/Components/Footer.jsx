
import React from 'react'
import styled from 'styled-components'
import { useGloablContext } from '../Context'
import { Link } from 'react-router-dom'
const Footer = () => {
  const { DarkMode } = useGloablContext()
  return (
    <Wrapper>
      <div className={`footer_section ${DarkMode ? 'dark' : ""}`}>


        <div className={`two-column-grid grid first-row ${DarkMode ? 'dark' : ""}`}>

          <div className={`first_coloumn `}>
            <p>Redy to get started ?</p>
            <p>Talk to us today</p>
          </div>
          <div className="second_coloumn">
            <div className="btn-container">
              <Link to='/contact' style={{ textDecoration: "none", color: 'white' }}>
                <button className='btn-blue'>
                  Get Started
                </button>
              </Link>
            </div>
          </div>

        </div>



        <div className="second-row">
          <div className="four-column-grid grid" style={{ alignItems: "flex-start" }}>

            <div className="first-column">
              <h3>Krunal kathiriya</h3>
              <p>Lorem ipsum dolor sit amet .</p>
            </div>

            <div className="second-column">
              <h3>Enter your Email </h3>
              <input type="email" required placeholder='Email' />
            </div>

            <div className="third-column">
              <h3>follow us</h3>
              <div className="icons">
                <a href=""><i className={`fa-brands fa-linkedin ${DarkMode ? "dark-icons" : ""}`}></i></a>
                <a href=""><i className={`fa-brands fa-facebook  ${DarkMode ? "dark-icons" : ""}`}></i></a>
                <a href="https://www.instagram.com/kunal____007u/"><i className={`fa-brands fa-instagram  ${DarkMode ? "dark-icons" : ""}`}></i></a>






              </div>

            </div>

            <div className="forth-column">
              <h3>Call us</h3>
              <a href={`tel:+917201870914`}>+91 720-187-0914</a>
            </div>

          </div>
        </div>


        <div className="thid-row">

        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
.footer_section{
  background-color: #f2f2f2;
  /* position: fixed; */
  width: 100%;
  /* height: 40vh; */
  border: 1px solid black;
}
.first-row{
  

  bottom: 0;
  background-color: #fff;
  box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
  width: 60%;
  margin: auto;
  padding: 35px;
  border-radius: 20px;
  position: relative;
  bottom: 50px;
display: flex;
justify-content: space-between;
}

.second-row{
 width: 100%;
 /* margin: auto; */
 display: flex;
 justify-content: space-around;
 padding: 10px;
/* align-items: center; */

 
}

h3{
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
}

.forth-column a{
  color: skyblue !important;
}
`
export default Footer