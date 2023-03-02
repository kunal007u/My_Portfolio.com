
import React, { useEffect, useRef, useState } from 'react'
import HeaderCard from '../Components/HeaderCard';
import { useGloablContext } from '../Context'
import styled from 'styled-components';

const Portfolio = () => {

  const { UpdatePortfolioHeaderTitle, portfolioData, PortData, DarkMode, selectCategory, FilterImg, state } = useGloablContext();
  const [model, setModel] = useState(false)
  const [modelsection, setmodelSection] = useState([])

  // console.log(selectCategory);
  const filteredImages =
    selectCategory === ''
      ? portfolioData
      : portfolioData.filter((item) => {
        console.log(typeof(item.category) ,typeof( selectCategory));
        return item.category == selectCategory;
      })

  // console.log(filteredImages);
  const categories = [...new Set(portfolioData.map((img) => img.category))];
  // console.log(categories);

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
            {categories.map((category) => (
              <button key={category} onClick={() => FilterImg(category)}>
                {category}
              </button>
            ))}
          </li>

        </ul>

        {/* Model section */}
        <div className={model ? 'model open' : 'model'} >
          <div className={` container`}>

            <div className="header-title position-relative ">

              <h2 className=' d-flex justify-content-center mt-4 '>{modelsection.name}</h2>
              <div className="btn  ">
                <button type="button" className="btn-close position-absolute " aria-label="Close" onClick={() => getClose()} style={{ top: "-22px", left: "97%" }}></button>
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
                  <p className='P-detail  position-relative'>Industry : {modelsection.Industry}</p>
                  <p className='P-detail  position-relative'>Date : {modelsection.Date}</p>
                  <p className='P-detail  position-relative'>URL : {modelsection.URL}</p>
                </div>
              </div>
            </div>
          </div>

        </div>



        {/* Portfolio img gallery */}
        <div className={`container gallery ${DarkMode ? 'dark' : ''}`} style={{ marginBottom: "10%" }}>
          {
            filteredImages.map((item, index) => {
              // here Item is a specific data for pecific imges 
              return (
                <div className="pics img__wrap " key={index}>
                  <img src={item.img} alt="" style={{ width: "100%" }} onClick={() => getImg(item)} className="img__img card" />
                  <p className='item-name  img__description ' >{item.name}</p>
                </div>
              )
            })
          }
        </div>

      </Wrapper>
    </>


  )
}

const Wrapper = styled.section`



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
background-color: antiquewhite;
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
/* .item-name{

  font-size: 2rem;
  opacity: 0;
} */
/* .pics {
opacity: 0.5;
}
img:hover p{
  opacity: 1;
}*/

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


`
export default Portfolio
