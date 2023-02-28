import React, { useRef ,useEffect} from 'react'
import styled from 'styled-components';

const GoToTop = () => {

    const top = useRef(null)
    const HandleTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    const HandleScroll = () => {
        const ShowArrow =250;
        const winscroll= document.body.scrollTop || document.documentElement.scrollTop;
        if (winscroll > ShowArrow) {
            top.current.style.display="block";
        }
        else{
            top.current.style.display="none";
        }
    }

    useEffect(() => {
     window.addEventListener('scroll', HandleScroll);
    }, [])
    

    return (
        <>
            <Wrapper>

                <div className='d-flex justify-content-end'>

                    <button type="button" className="btn btn-outline-primary topBtn " ref={top} onClick={() => HandleTop()}>
                    
                            <i className="fas fa-duotone fa-arrow-up icon"></i>
                      
                    </button>
                </div>
            </Wrapper>

        </>
    )
}

const Wrapper = styled.section`
.topBtn{
    position: fixed;
    font-size: 1.7rem;
    width: 3rem;
    height: 3rem;
    color: #fff;
    bottom:5rem;
    right:5rem;
    border-radius: 50%;
    background-color: #6b63ff;
    cursor: pointer;
}
   .icon{

     animation: topBtn  1s linear infinite alternate-reverse;
   }
@keyframes topBtn{
    0%{
        transform: translateY(0.5rem);
    }
    100%{
        transform: translateY(-0.5rem);
    }
}
`
export default GoToTop