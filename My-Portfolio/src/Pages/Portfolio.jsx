
import React, { useEffect, useRef, useState } from 'react'
import HeaderCard from '../Components/HeaderCard';
import { useGloablContext } from '../Context'
import styled from 'styled-components';

const Portfolio = () => {

  const { UpdatePortfolioHeaderTitle, portfolioData, PortData, DarkMode, selectCategory, FilterImg, state } = useGloablContext();
  const [model, setModel] = useState(false)
  const [modelsection, setmodelSection] = useState([])
  console.log(selectCategory);

  const filteredImages = selectCategory === "All"
    ? portfolioData
    : portfolioData.filter((img) => img.category === state.selectCategory)

  // console.log(portfolioData);
  const categories = [...new Set(portfolioData.map((img) => img.category))];

  const getClose = () => {
    setModel(false)
    console.log("close");
  }
  const getImg = (item) => {
    setModel(true)
    setmodelSection(item)

  }

  useEffect(() => {
    UpdatePortfolioHeaderTitle()
    PortData()

  }, [])

  return (
    <>

      <Wrapper>
        <HeaderCard />
        {/* Category menu */}


        <ul className="portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 nav-light">
          <li className="nav-item">
            <a className="me-3 my-button" type="button" onClick={() => FilterImg("All")}>ALL</a>
            {categories.map((category) => {
              return (


                <a className="me-3 my-button" type="button" key={category} onClick={() => FilterImg(category)}>
                  {category}
                </a>
              )
            })}
          </li>

        </ul>

        {/* Model section */}
        <div className={model ? 'model open' : 'model'} >
          <div className={` container ${DarkMode ? 'dark' : ''}`}>

            <div className="header-title position-relative ">

              <h2 className=' d-flex justify-content-center mt-4 '>{modelsection.name}</h2>
              <div className={`btn position-absolute`} style={{ top: "-22px", left: "97%" }}>
                <button type="button" className={`btn-close  ${DarkMode ? 'light-close' : ''}`} aria-label="Close" onClick={() => getClose()} ></button>
              </div>
            </div>
            <div className="grid two-column-grid m-4">
              <div className="img-box">
                <img src={modelsection.img} alt="" width={"80%"} height={"30%"} />

              </div>
              <div className="project-detail">
                <h2>Project Info</h2>
                <p>{modelsection.ProjectInfo}</p>

                <h4>Project Details:</h4>
                <div className="p-details">

                  <p className='P-detail  position-relative'>Client : {modelsection.Client}</p>
                  <p className='P-detail  position-relative'>Technologies : {modelsection.Technologies}</p>
                  {/* <p className='P-detail  position-relative'>Industry : {modelsection.Industry}</p> */}
                  <p className='P-detail  position-relative'>Date : {modelsection.Date}</p>
                  <p className='P-detail  position-relative'><a href=''>URL : {modelsection.URL}</a></p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Portfolio img gallery */}
        <div className={`container gallery ${DarkMode ? 'dark' : ''}`} style={{ marginBottom: "10%" }}>
          {
            filteredImages.map((item, index) => {

              return (
                <div className="pics img__wrap " key={index}>
                  <img src={item.img} alt="" style={{ width: "100%" }} onClick={() => getImg(item)} className="img__img card" />
                  <p className='item-name  img__description ' >{item.name}</p>
                </div>
              )
            })}
        </div>

      </Wrapper>
    </>


  )
}

const Wrapper = styled.section`
@media only screen and (max-width: 1345px) {
    
  }

.light-close{
  background-color: wheat;
    color: red;
    filter: hue-rotate(45deg);
}
.gallery{
  column-count: 3;
column-width: 33%;
padding: 20px;
}
.pics{
  padding: 10px 0px;
  cursor: pointer;
  transition: all 0.4s ease;
}
.model{
 width: 100%;
 height: 100vh;
 position: fixed;
 top: 0;
 left: 0;
 justify-content: center;
 display: flex;
visibility: hidden;
opacity: 0;
transform: scale(0);
overflow: hidden;
z-index: 999;
transition: opacity 0.4s ease, visibility 0.4s ease , transform 0.4s ease;
background-color: #777474;
}
.model.open{

visibility: visible;
opacity: 1;
transform: scale(1);

}
.P-detail::after{
  content: "";
  position: absolute;
  
  width: 70%;
  height: 2px;
  background-color: black;
  bottom:-10px;
  left: 0;

}


.img__wrap {
  position: relative;
 opacity: 1;
} 
.img__wrap img:hover{
  opacity: 0.4;
}

.img__description {
  position: absolute;
  top: 50%;
  left: 50%;
  transform:  translate(-50%,-50%);
  font-size: 2rem;
  visibility: hidden;
  opacity: 0;
  transition: opacity .2s, visibility .2s;
  pointer-events: none;
}

.img__wrap:hover .img__description {
  visibility: visible;
  opacity: 1;
}

.my-button {
  background-color: blue;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

@media only screen and (max-width: 600px) {
  .my-button {
    font-size: 14px;
    padding: 8px;
  }
}



`
export default Portfolio
