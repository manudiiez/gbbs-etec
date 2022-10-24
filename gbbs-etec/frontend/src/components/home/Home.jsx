import React from 'react'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
/* --------------------------------- IMAGES --------------------------------- */
import logo from '../../images/gbbsBlanco.png'
import team from '../../images/team.png'
import dr from '../../images/jorgeFavier.jpg'
import etec from '../../images/etec.png'
import um from '../../images/um.png'
import lu1mum from '../../images/lu1mum.jpg'
import repi from '../../images/repi.png'
/* ---------------------------- REACT-ROUTER-DOM ---------------------------- */
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <Container>
      <ContainerHeader className='d-flex justify-content-center align-items-center'>
        <div className='max__container row justify-content-center align-items-center m-0 p-5'>
          <div className="col-lg-4 col-12">
            <img src={logo} alt="" />
          </div>
          <div className="col-lg-4 col-12">
            <p>GBBS</p>
            <button className='btn btn-outline-light buttonForum'><Link to={'/forums'}>Explorar foros</Link></button>
          </div>
        </div>
      </ContainerHeader>
      <ContainerNosotros id='nosotros'>
        <div className="max__container p-5">
          <p className="title mb-5">Sobre nosotros</p>
          <div className="row p-0 m-0 justify-content-center align-items-center team__container mb-5">
            <div className="col-md-5 col-12 p-0 mx-2">
              <h1>
                Global Bulletin Board System (GBBS) es una plataforma que permite la creación y difusión de mensajes y boletines, entre los usuarios registrados en la misma.  
                <br/>
                Los usuarios pueden ingresar y compartir la información aportada por ellos, de la misma forma, pueden crear y participar en foros. El uso del GBBS les permite formar parte de la comunidad de radioaficionados a través de la Estación de Packet Radio de la Universidad de Mendoza (LU1MUM). 
                <br/>
                Nuestro equipo está formado por los alumnos 6° informática (promoción 2022) del Colegio Técnico de la Universidad de Mendoza (ETec). 
              </h1>
            </div>
            <div className="col-md-5 col-12 p-0 mx-2">
              <img src={team} alt="" />
            </div>
          </div>
          <div className="row p-0 m-0 justify-content-center align-items-center dr__container mb-5">
            <div className="col-md-5 col-12 p-0 mx-2">
              <h2>JORGE FAVIER</h2>
              <h2>
                Doctor en Ingeniería.
                <br/> 
                Director de la Estación Packet Radio de la Universidad de Mendoza</h2>
            </div>
            <div className="col-md-5 col-12 p-0 mx-2">
              <img src={dr} alt="" />
            </div>
          </div>
          <div className="row p-0 m-0 justify-content-center align-items-center mb-5 objetivo__container">
            <div className="col-12 text-start">
              <p className='m-0 mt-5 mb-3'>Nuestra Misión</p>
              <h3>Ofrecer una mejor experiencia y servicio del GBBS para tratar de satisfacer a nuevos usuario (acostumbrados a nuevas tecnologías) y clientes de mayor edad que sean amantes de los antiguos sistemas Packet BBS.</h3>
            </div>
            <div className="col-12 text-end">
              <p className='m-0 mt-5 mb-3'>Nuestra Visión</p>
              <h3>Ser líder en las plataformas web para radioaficionados, para poder generar valores económicos y sociales gestionando modelos de negocio innovadores.</h3>
            </div>
            <div className="col-12 text-start">
              <p className='m-0 mt-5 mb-3'>Nuestros Valores</p>
              <h3>Nuestros valores nos guían cada día para crecer más como personas y también como empresa empatizando con nuestros clientes expresando quienes somos y que creemos. Algunos de nuestros valores son: empatía, progreso, innovación, contribución y fiabilidad.</h3>
            </div>
          </div>
        </div>
      </ContainerNosotros>
      <ContainerOrganizaciones>
        <div className="max__container pt-5 px-5">

          <p className='mb-5'>Organizaciones relacionadas</p>

          <div className='row p-0 m-0 justify-content-center align-items-center mb-5'>

            <div className="col-lg-3 col-md-6 col-12">
              <img src={um} alt="" />
              <h4 className='mb-5 mt-3'>Universidad de Mendoza</h4>
            </div>
            <div className="col-lg-3 col-md-6 col-12 ">
              <img src={etec} alt="" />
              <h4 className='mb-5 mt-3'>Colegio tecnico ETec</h4>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <img src={lu1mum} alt="" />
              <h4 className='mb-5 mt-3'>Lu1mum</h4>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <img src={repi} alt="" />
              <h4 className='mt-3'>Repi</h4>
            </div>
            
          </div>

        </div>
      </ContainerOrganizaciones>
    </Container>
  )
}

export default Home

const Container = styled.div`

  .max__container{
    width: 100%;
    max-width: 1140px;
    margin: auto;
  }

`

const ContainerHeader = styled.section`
  background-color: #0072BB;
  min-height: 600px;
  text-align: center;

  img{
    width: 100%;
    max-width: 300px;
  }

  p{
    font-size: 35px;
    color: #fff;
  }

  .buttonForum{
    &:hover{
      a{
        color: #000;
      }
    }
    a{
      color: #fff;
      text-decoration: none;
    }
  }

`


const ContainerNosotros = styled.section`

  background-color: #243C7C;
  color: #fff;
  text-align: center;

  .title{
    font-size: 30px;
    font-weight: 500;
  }

  .team__container{
    img{
      width:100%;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      border-radius: 10px;
      max-width: 520px;
    }

    h1{
      font-size: 20px;
      font-weight: lighter;
      line-height: 2rem;    
    }
  }

  .dr__container{

    h2{
      font-size: 20px;
      font-weight: lighter;
      line-height: 2rem;    
    }

    img{
      width: 100%;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      border-radius: 50%;
      max-width: 300px;
    }

    @media (min-width: 992px) {
      flex-direction: row-reverse;
      h2{
        text-align: left;
      }
    }

  }

  .objetivo__container{
    p{
      font-size: 25px;
    }

    h3{
      font-size: 18px;
      font-weight: lighter;
      line-height: 2rem;    

    }
  }

`


const ContainerOrganizaciones = styled.section`

  p{
    font-size: 30px;
    text-align: center;
    color: #243C7C;
    font-weight: 500;
  }

  div{
    text-align: center;

    img{
      width: 100%;
      max-width: 250px;

    }

    h4{
      color: #111C3A;
      font-weight: normal;
      color: #243C7C;

    }
  }

`