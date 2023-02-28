import React, { useEffect } from 'react'
import styled from 'styled-components';
import EducationBox from '../Components/EducationBox';
import ExperienceBox from '../Components/ExperienceBox';
import HeaderCard from '../Components/HeaderCard';
import SkillBox from '../Components/SkillBox';
import { useGloablContext } from '../Context'


const Resume = () => {
    const { UpdateExperienceHeaderTitle } = useGloablContext();

    useEffect(() => {
        UpdateExperienceHeaderTitle()
    }, [])
    return (
        <>
            <Wrapper>
                <HeaderCard />

                <div className="experience-box">
                    <div className="two-column-grid grid grid-box">
                        <div className="my-education">

                            <EducationBox />
                        </div>
                        <div className="my-experience">
                            <ExperienceBox />
                        </div>
                    </div>
                </div>
                <SkillBox />
                
            </Wrapper>
        </>
    )
}

const Wrapper = styled.section`
   margin-bottom: 10%;
   .experience-box{
      
    margin: 12px;
   }
    .grid-box{
        display: flex;
        justify-content: space-between;
        /* margin-top: 90px; */
        width: 80%;
        margin: 80px auto;
    }
`
export default Resume