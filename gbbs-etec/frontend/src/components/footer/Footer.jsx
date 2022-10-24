import React from 'react'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
/* --------------------------------- IMAGES --------------------------------- */
import etec from '../../images/etec.png'
import um from '../../images/um.png'
import Map from './Map'

const Footer = () => {
  return (
    <Container className='d-flex justify-content-center align-items-center'>
        <div className="max__container row m-0 p-0 p-5">
            <div className="col-md-4 col-12 d-flex justify-content-center align-items-center footer__logos">
                <a href="#">
                    <img src={um} alt=""  className='mx-1'/>
                </a>
                <a href="#">
                    <img src={etec} alt="" className='mx-1' />
                </a>
            </div>
            <div className="col-md-4 col-12 py-4 d-flex justify-content-center align-items-center">
                <h6 className='m-0'>ETec GBBS</h6>
            </div>
            <div className="col-md-4 col-12">
                <Map/>
            </div>
            <div className="col-12 mt-5 footer__contacts">
                <p>Contactos</p>
                <ul className='p-0 m-0 d-flex'>
                    <li>jorge.favier@etec.um.edu.ar</li>
                    <li>contacto.repi@um.edu.ar</li>
                    <li>Repi: +54 261 420 2017</li>
                </ul>
            </div>

        </div>
    </Container>
  )
}

export default Footer

const Container = styled.footer`

    background-color: #111c3a;
    width: 100%;

    .max__container{
        width: 100%;
        max-width: 1140px;
        margin: auto;
        
        @media (min-width: 768px) {
            flex-direction: row-reverse;
        }

    }

    img{
        width: 70px;
    }

    .footer__logos{

        flex-direction: row;
        
        img{
            width: 70px;
        }
    }

    h6{
        color: #fff;
        text-align: center;
        font-size: 22px;

    }

    .footer__contacts{
        color: #fff;
        text-align: center;
        p{
            font-size: 20px;
            text-decoration: underline;
        }
        ul{
            list-style:none;
            justify-content: space-between;
            align-items: center;
            flex-direction: column;
        }

        @media (min-width: 992px) {
            ul{
                flex-direction: row;
            }
            p{
                text-align: start;
            }
        }
    }

`