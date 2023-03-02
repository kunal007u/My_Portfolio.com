import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGloablContext } from '../Context'
import HeaderCard from '../Components/HeaderCard'
import ServicesCard from '../Components/ServicesCard'


const Services = () => {
    useEffect(() => {

        UpdateHomeHeaderTitle()
    }, [])
    const { UpdateHomeHeaderTitle, DarkMode } = useGloablContext()
    return (
        <Wrapper>

            <HeaderCard />
            <div className={`box container ${DarkMode ? 'dark' : ""} p-4`}>
                    <div className="two-column-grid grid ">
                        <ServicesCard />
                    </div>
            </div>


        </Wrapper>
    )
}


const Wrapper = styled.div`

margin-top: 5%;
.box{
    /* display: flex; */
    /* justify-content:space-between; */
    margin-top: 7%;
}
i{
    font-size: 3rem;
}
.icon{
   
    border-radius: 15px;
    display: flex;
    justify-content:center;
    align-items: center;
}
.box{
   display: flex;
   justify-content: space-evenly;
}
.icon-1-detail{
    width: 270%;
}
.first-row{
    width: 50%;
}
`
export default Services