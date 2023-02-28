
import React, { useEffect, useState } from 'react'
import { ExperienceData } from '../data'
import { Card, ListGroup } from "react-bootstrap";
import styled from 'styled-components';
import { useGloablContext } from '../Context';

const ExperienceBox = () => {
    const {DarkMode} = useGloablContext()
    const [edata, seteData] = useState([])

    useEffect(() => {

        seteData(ExperienceData)
    }, [])


    return (

        <>
            <Wrapper>

                <div>
                    <h4 className='my-ex'>My-Expeirence</h4>
                    

                    {edata.map((Experience) => (

                        <div className={`container expeirenceData ${DarkMode?'dark':''}`} key={Experience.id}>
                            <div className="date-box">
                                {Experience.year}
                            </div>
                            <div className="strem">
                                {Experience.degree}
                            </div>
                            <div className="univercity-box">
                                {Experience.university}
                            </div>
                            <div className="descrption">
                                {Experience.description}
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
    .my-ex{
        margin-left: 22px;
        margin-bottom: 22px;
        
    }
    .expeirenceData{
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
export default ExperienceBox