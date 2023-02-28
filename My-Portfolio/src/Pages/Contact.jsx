import React from 'react'
import styled from 'styled-components'
import { useGloablContext } from '../Context'

const Contact = () => {
  const {state} = useGloablContext()
  return (

    <Wrapper>
      <h2 className='Poppins'>Feel free to Contact </h2>

      

      <div className={`contact-form ${state.DarkMode ? 'dark':''}`}>
        <form method='POST' className='contact-input' action='https://formspree.io/f/xlekbldj'>
          <input type="text" autoComplete='off' required name='Username' placeholder='Username' />
          <input type="email" autoComplete='off' required name='Email' placeholder='Email' />
          <textarea name="message" id="textarea" cols="30" rows="6" autoComplete='off' required placeholder='Type message here' ></textarea>
          <div className='submitBtn'>
            <input type="submit" value='Send' id='submit' />
          </div>
        </form>
      </div>
      <div className='container map'>


        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7342.771258066656!2d72.63231394494633!3d23.04631963946832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e869507b81e27%3A0x91db1c8f8424ff9c!2sHirawadi%2C%20Bapunagar%2C%20Ahmedabad%2C%20Gujarat%20380038!5e0!3m2!1sen!2sin!4v1676895563683!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} aria-hidden="false" tabIndex="0" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

      </div>


    </Wrapper>
  )
}

const Wrapper = styled.section`
margin-top: 2rem;
padding: 2rem;

h2{
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
}

.contact-form{
  /* margin-top: 2rem; */
  // background-color: #2c2828;
  padding: 2rem;  
  border-radius: 20px;
  width: 97.5%;
  margin-top: 2% ;
  margin-bottom:4%;
  
  .contact-input{
      max-width:50% ;
      margin : auto;
      display: flex;
      flex-direction: column;
      gap:2rem;

        input, textarea{
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 5px;
          margin-bottom: 1rem;
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    }
  }
}

.submitBtn{

  border-radius: 20px;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  // gap:2rem;

  #submit{


    box-shadow: rgb(168 73 18) 0px 20px 51px;
    padding: 9px 39px;
    border: none;
    outline: none;
    border-radius: 40px;
    font-size: 1.1rem;
    color: white;
    background: orange ;
    // width: 30%;
  }
  #submit:hover{
    background: #054f7c;
    cursor: pointer;

  }
 
}
.map{
    margin-bottom: 5%;
  }

`
export default Contact