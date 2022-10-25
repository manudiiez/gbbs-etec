import React from 'react'
/* ---------------------------- SYLED-COMPONENTS ---------------------------- */
import styled from 'styled-components'
import UserForms from './UserForms'

const User = () => {
  return (
    <Container className='py-5'>
        <div className="max__container">
            
          <UserForms/>

        </div>
    </Container>
  )
}

export default User


const Container = styled.section`

  background: #243C7C;
  height: 100%;

  .max__container{
    border-radius: 10px;
    width: 100%;
    max-width: 768px;
    margin: auto;

    button{
      background: #243c7c;
      color: #fff;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }

    

  }

`
