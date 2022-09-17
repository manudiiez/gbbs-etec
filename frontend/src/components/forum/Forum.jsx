import React,{useEffect, useState} from 'react'
/* ---------------------------- STYLED COMPONENT ---------------------------- */
import styled from 'styled-components'
/* --------------------------------- IMAGES --------------------------------- */
import img from '../../images/radioaficion.jpg'
/* ---------------------------- REACT-ROUTER-DOM ---------------------------- */
import { useParams } from 'react-router-dom'
/* ------------------------------- COMPONENTS ------------------------------- */
import Loader from '../utils/Loader'

const URI = process.env.REACT_APP_URI

const Forum = () => {

  const [openResponses, setOpenResponses] = useState(false);
  const [forum, setForum] = useState(false);

  const {id} = useParams()

  const getForo = async() => {
    const res = await fetch(`${URI}/forum/${id}`)
    const data = await res.json()
    console.log(data)
    setForum(data)
    console.log(forum)
  }

  const handleClick = () => {
    setOpenResponses(!openResponses)
  }

  useEffect(() => {
    getForo()
  }, [])

  return (
    <Container>
      {forum === false && <Loader/>}
      <div className="max__container p-5">
          <ContainerHeader className="row justify-content-between align-items-center p-0 m-0">
            <p className='col p-0 m-0'>Respouestas: <span>20</span></p>
            {/* <button className='col text-end'>Bloquear</button> */}
          </ContainerHeader>
          <ContainerBody className='row p-2 active'>
            <div className='col-12 d-flex flex-column justify-content-center'>
              <div className='d-flex justify-content-between align-items-center '>
                <p className='owner'>Creador: <span>{forum.autor}</span></p>
                <p className='date'>{forum.fecha}</p>
              </div>
              <h5>{forum.titulo}</h5>
              <p className='body'>{forum.cuerpo}</p>
            </div>
            {/* <div className="col-lg-6 col-12 p-4">
              <img src={img} alt="" />
            </div> */}
            {/* <div className='my-3'>
              <button className={openResponses ? 'active' : ''} onClick={handleClick} >Ver respuestas <FontAwesomeIcon className='mx-2' icon={faAngleRight} /></button>
            </div> */}
          </ContainerBody>

          <ContainerBody className={` row  ${openResponses ? 'active p-2 my-5' : ''}`}>

            <div className='col-lg-6 col-12 d-flex flex-column justify-content-center'>
              <div className='d-flex justify-content-between align-items-center '>
                <p className='owner'>Creador: <span>Manudiiez</span></p>
                <p className='date'>03/06/2022 a las 13:00</p>
              </div>
              <h5>Lorem ipsum dolor sit amet.</h5>
              <p className='body'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus placeat fuga velit reiciendis soluta quam fugit ullam, obcaecati voluptatibus, dolor illo, dolorem repellendus laboriosam. Esse nihil temporibus deserunt consequuntur eos?</p>
            </div>
            <div className="col-lg-6 col-12 p-4">
              <img src={img} alt="" />
            </div>

          </ContainerBody>
      </div>
    </Container>
  )
}

export default Forum

const Container = styled.section`

  background: #243C7C;
  .max__container{
    width: 100%;
    max-width: 1140px;
    margin: auto;
    min-height: 67vh;
  }

`
const ContainerHeader = styled.div`

  p{
    color: #fff;
    span{
      color: green;
    }
  }

  button{
    color: red;
    background: transparent;
    border: none;
    &:hover{
      text-decoration: underline;
      border: none;
      color: red;
    }
  }

`

const ContainerBody = styled.div`

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background: #fff;
  border-radius: 10px;
  display: none;
  transition: all .5s ease;
  overflow: hidden;
  

  .owner{

    font-size: 16px;
    span{
      color: #243C7C;
    }

  }

  h5{
    color: #243C7C;
  }

  button{
    background: transparent;
    border: none;

    svg{
      transition: all 1.5s ease;
    }

    &.active{
      svg{
        transform: rotate(90deg);
      }
    }
  }

  img{
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
  }


  &.active{
    display: flex
  }

`