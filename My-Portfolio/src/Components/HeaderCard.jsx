import React,{useEffect} from 'react'
import styled from 'styled-components'
import { useGloablContext } from '../Context'

const HeaderCard = () => {
    const { headerTitle,headerSubTitle} = useGloablContext()

   
    
    return (
        <Wrapper>

            <div className="Aboutme-section">
                <h1>{headerTitle}</h1>
                <div className="aboutme-small">
                    <h4>{headerSubTitle}</h4>
                    <div className='horizontal'></div>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`



.Aboutme-section {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: all 1.5s ease-in-out;
  margin: 32px 0px;
}
.Aboutme-section h1{
    font-size: 10rem;
    opacity: 0.1;
    margin-top: 2rem;
    box-shadow: rgba(66, 109, 142, 0.4) 0px 1px 2px 5px, rgba(46, 129, 193, 0.15) 0px 1px 3px 10px;
    padding: 10px;

}
.aboutme-small{
  position: absolute;
  top: 50%;
}

.aboutme-small h4{ 
  font-size: 4rem;
  z-index: 1;
}

`

export default HeaderCard