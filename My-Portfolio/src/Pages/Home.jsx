import React, { useEffect } from 'react'
import styled from 'styled-components'
import Hero from '../Components/Hero'
import { useGloablContext } from '../Context'
import Services from '../Pages/Services'


const Home = () => {
  




  return (
    <>
      <Wrapper>

        <Hero />
      
        <Services/>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.div`
margin-bottom: 10%;`
export default Home