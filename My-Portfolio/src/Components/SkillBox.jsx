import React from 'react'
import styled from 'styled-components'
import { useGloablContext } from '../Context'

const SkillBox = () => {
    const { DarkMode } = useGloablContext()
    return (
        <>
            <Wrapper>
                <h2 className={`d-flex justify-content-center mb-4 `}>My skills</h2>
                <div className={`container overflow-hidden p-5 ${DarkMode ? "dark" : ""}`}>

                    <div className="row gx-5">

                        <div class="col-md-6">

                            <p class=" fw-500 text-start mb-2 ">
                                Web Design
                                <span class="float-end">80%</span>
                            </p>
                            <div class="progress progress-sm mb-4 bg-dark">
                                <div class="progress-bar bg-info" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">

                            <p class=" fw-500 text-start mb-2 ">
                                HTML
                                <span class="float-end">90%</span>
                            </p>
                            <div class="progress progress-sm mb-4 bg-dark">
                                <div class="progress-bar bg-info" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">

                            <p class=" fw-500 text-start mb-2 ">Css
                                <span class="float-end">90%</span>
                            </p>
                            <div class="progress progress-sm mb-4 bg-dark">
                                <div class="progress-bar bg-info" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">

                            <p class=" fw-500 text-start mb-2 ">Java Script
                                <span class="float-end">85%</span>
                            </p>
                            <div class="progress progress-sm mb-4 bg-dark">
                                <div class="progress-bar bg-info" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{ width: "85%" }}>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">

                            <p class=" fw-500 text-start mb-2 ">React
                                <span class="float-end">75%</span>
                            </p>
                            <div class="progress progress-sm mb-4 bg-dark">
                                <div class="progress-bar bg-info" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">

                            <p class=" fw-500 text-start mb-2 ">Bootstrap
                                <span class="float-end">75%</span>
                            </p>
                            <div class="progress progress-sm mb-4 bg-dark">
                                <div class="progress-bar bg-info bg-info" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="btn d-flex justify-content-center">

                        <button type="button" class="btn btn-success mt-3 ">

                            <a href="" className={` text-light`}>Download CV</a>

                        </button>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.section`
/* .progress{
    height:1%
}
.progress-bar bg-info{
    background: aqua;
    width: 25%;
    display: flex;
    justify-content: end;
    height:inherit;
} */
#file{
    height: 20px;
}
`


export default SkillBox