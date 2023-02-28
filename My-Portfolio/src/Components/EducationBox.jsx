
import React, { useEffect, useState } from 'react'
import { EducationData } from '../data'
import { Card, ListGroup } from "react-bootstrap";
import styled from 'styled-components';
import { useGloablContext } from '../Context';

const EducationBox = () => {
    const {DarkMode} = useGloablContext()
    const [edata, seteData] = useState([])

    useEffect(() => {

        seteData(EducationData)
    }, [])


    return (

        <>
            <Wrapper>

                <div>
                    <h4 className='my-education'>My-Education</h4>
                    {edata.map((education) => (

                        <div className={`container educationData ${DarkMode?'dark':''}`} key={education.id}>
                            <div className="date-box">
                                {education.year}
                            </div>
                            <div className="strem">
                                {education.degree}
                            </div>
                            <div className="univercity-box">
                                {education.university}
                            </div>
                            <div className="descrption">
                                {education.description}
                            </div>
                        </div>
                    ))}
                </div>
            </Wrapper>

        </>
    )
}


const Wrapper = styled.section`
    margin-bottom: 10px;
    .my-education{
        margin-left: 22px;
        margin-bottom: 22px;
        
    }
    .educationData{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 22px;
        padding: 1.5rem;
        
    }
    .date-box{
        background-color: #1a87548c;
        width: 100px;
        display: flex;
        justify-content: center;
        border-radius: 50px;
    }
`
export default EducationBox