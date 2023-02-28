import React, { useEffect } from 'react'
import styled from 'styled-components'
import HeaderCard from '../Components/HeaderCard'
import { useGloablContext } from '../Context'

const About = () => {
  const { DarkMode, UpdateAboutHeaderTitle } = useGloablContext()
  useEffect(() => {
    UpdateAboutHeaderTitle()
  }, [])

  return (
    <Wrapper>

      <HeaderCard />

      <div className={`container  ${DarkMode ? 'dark' : ''}`}>
        <div className="about-section two-column-grid grid ">
          <div className="summary">
            <h3>I'm Krunal Kathiriya, a Web Developer</h3>
            
            <p>As a new developer with a focus on React, I am eager to build my skills and contribute to exciting projects in the field of web development. With a solid foundation in React and a hunger to learn more, I am committed to writing clean, efficient code and creating dynamic, user-friendly interfaces that meet the needs of users and stakeholders</p>
            <p>
            As a new developer with a focus on React, I am eager to build my skills and contribute to exciting projects in the field of web development. With a solid foundation in React and a hunger to learn more, I am committed to writing clean, efficient code and creating dynamic, user-friendly interfaces that meet the needs of users and stakeholders

            </p>
          </div>
          <div className="detail">
            <p>Name: krunal kathiriya</p>
            <div className='horizontal'></div>
            <p>Email:kunalrkathiriya123@gmail.com</p>
            <div className='horizontal'></div>
            <p>Age:20</p>
            <div className='horizontal'></div>
            <p>From:Ahemdabad,Gujarat</p>
            <div className='horizontal'></div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
margin-bottom: 10%;

.about-section{
  display: flex;
  width: 100%;
  padding: 20px;
  justify-content: space-between;

}
.summary{
  width: 57%;

  line-height: 2rem;
}
.summary h3{
  font-size: 1.8rem;
  margin-bottom: 1rem;
}
.detail{
  line-height: 2.7rem;
}
.detail p{
  font-size: 1.2rem;
  margin-bottom: 0.3rem;
}


`
export default About