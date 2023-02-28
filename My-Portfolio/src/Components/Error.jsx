import React from 'react'
import styled from 'styled-components'
import error from "../assets/error.png"
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <>
            <Wrapper>

                <div className="error-section">
                    <img src={error} alt="error" className="error-img" />
                    <h1 className="error-title">Oops!</h1>
                    <p className="error-text">Something went wrong.</p>
                    <div className="btn-container" style={{marginTop: " 20px"}}>
                        <Link to="/" className="btn">Back to Home</Link>
                    </div>
                </div>

            </Wrapper>
        </>
    )
}

const Wrapper = styled.section`
/* transition: all 0.2s ease-in-out; */

.error-section{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;

    img{
        width: 40%;
        object-fit: cover;

    }
    h1{
        font-size: 40px;
        font-weight: 700;
        text-align: center;
        margin-top: 40px;
    }
    p{
        font-size: 20px;
        text-align: center;
        margin-top: 20px;

    }

}


  


`

export default Error