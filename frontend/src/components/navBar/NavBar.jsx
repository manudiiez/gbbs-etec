import React,{useEffect, useState, useContext} from 'react'
import styled from 'styled-components'
/* ------------------------------- FONTAWESOME ------------------------------ */
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
/* ----------------------------- REACT BOOTSTRAP ---------------------------- */
import Dropdown from 'react-bootstrap/Dropdown';
/* --------------------------------- IMAGES --------------------------------- */
import logo from '../../images/gbbsAzul.png';
/* ------------------------------- COMPONENTS ------------------------------- */

import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';


import Link from './Link'
import BurguerBtn from './BurguerBtn'

import { UserContext } from '../context/userContext';



const NavBar = () => {

    const [navState, setNavState] = useState(false);
    const {isAuthenticated, user, logOutUser} = useContext(UserContext)
    const navigate = useNavigate()



    const handleClick = () => {
        const width = document.body.clientWidth
        if(width < 992){
          setNavState(!navState);
        }
    }

    const cerarSesion = () => {
        logOutUser()
        isAuthenticated()
        Swal.fire({
            title: 'Sesion cerrada',
            icon: 'success',
            showConfirmButton: true
        }).then(() => {
            navigate('/')
        })
    }

    useEffect(() => {
        isAuthenticated()
    }, [])

    return (
        <Container className='d-flex align-items-center px-3'>
            <BgTouch onClick={handleClick} className={navState ? 'active' : ''}/>
            <div className='justify-content-between align-items-center nav__header'>
                <p className='m-0'><strong>GBBS</strong></p>
                <BurguerBtn handleClick={handleClick} clicked={navState}/>
            </div>
            
            <div className={`nav__container d-flex align-items-center ${navState ? 'active' : ''} ${user ? 'user' : ''}`}>

                {
                    user ? (
                        <ContainerLogo className='d-flex justify-content-center align-items-center'>
                            <img src={logo} alt="" />
                            <p className='m-0'>GBBS</p>
                        </ContainerLogo>
                    ): (
                        <span className="d-none"></span>
                    )
                }


                <Nav>
                    <ul className='p-0 m-0 d-flex justify-content-center align-items-center'>
                        <li><Link click={handleClick} to='/'>Inicio</Link></li>
                        <li>
                            {
                                window.location.pathname == '/' ? (
                                    <a href="#nosotros">Nosotros</a>
                                ):(
                                    <Link click={handleClick} to='/'>Nosotros</Link>
                                )
                            }
                        </li>
                        <li><Link click={handleClick} to='/forums'>Foros</Link></li>
                        { !user && <li><Link click={handleClick} to='/user'>Cuenta</Link></li> }
                        { user && <li><Link click={handleClick} to='/email'>Emails</Link></li> }
                    </ul>
                </Nav>

                {
                    user ? (
                        <ContainerUser className='d-flex justify-content-center align-items-center'>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                    {user.nombre_usuario}
                                    <FontAwesomeIcon icon={faUser} />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item as="button"><Link click={handleClick} to='/user/1'>Perfil</Link></Dropdown.Item>
                                    <Dropdown.Item as="button" onClick={cerarSesion}>Cerrar sesion</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </ContainerUser>
                    ): (
                        <span className="d-none"></span>
                    )
                }

            </div>

        </Container>
    )
}

export default NavBar

const Container = styled.header`
    
    background-color: #fff;
    position: fixed;
    width: 100%;
    height: 80px;
    top: 0;
    left: 0;
    z-index: 100;
    justify-content: space-between;

    .nav__header{
        width: 100%;
        height: 100%;
        z-index: 110;
        display: flex;
        p{
            color: #111C3A;
            font-size: 20px;
        }

        @media (min-width: 992px) {
            display: none;
        }
    }

    .nav__container{
        background-color: #fff;
        position: absolute;
        width: 75vw;
        height: 100vh;
        left: -100%;
        top: 0;
        transition: all .5s ease;
        flex-direction: column;
        justify-content: center;
        padding: 25px 0;
        &.user{
            justify-content: space-between;
        }
        &.active{
            left: 0;
        }
        z-index: 109;

        @media (min-width: 992px) {
            left: 0;
            position: relative;
            width: 100%;
            max-width: 1140px;
            height: 100%;
            background: transparent;
            flex-direction: row;
        }
    }

    @media (min-width: 992px) {
        justify-content: center;
    }

`

const Nav = styled.nav`

    width: 100%;
    ul{
        list-style: none;
        flex-direction: column;
        li{
            width: 100%;
            a{
                display: block;
                padding: 10px;
                text-align: center;
                color: #111C3A;
                transition: all .3s ease;
                text-decoration: none;
                &.active{
                    background-color: #243C7C;
                    color: #fff;
                }

                &:hover{
                    text-decoration: underline;
                }
            }
        }
    }

    @media (min-width: 992px) {
        position: absolute;
        left: 50%;
        margin-left: -250px;
        width: 100%;
        max-width: 500px;
        ul{
            flex-direction: row;
            li{
                width: 100%;
                a{
                    display: block;
                    padding: 10px;
                    text-align: center;
                    color: #111C3A;
                    transition: all .3s ease;
                    text-decoration: none;
                    &.active{
                        background-color: transparent;
                        color: #0072BB;
                        text-decoration: underline;
                    }

                    &:hover{
                        text-decoration: underline;
                        color: #0072BB;

                    }
                }
            }
        }
    }
    

`
const BgTouch = styled.div`
    
    width: 100vw;
    height: 100vh;
    position: absolute;
    left: -100%;
    display: none;
    top: 0;
    background-color:rgba(0, 0, 0, 0.7);

    &.active{
        left: 0;
        display: block
    }
    
    @media (min-width: 992px) {
        display: none!important;
    }

`
const ContainerUser = styled.div`
    #dropdown-basic{
        background-color: transparent;
        color: #111C3A;
        border: none;
    }
    svg{
        margin-left: 8px;
    }

`

const ContainerLogo = styled.div`
    
    img{
        width: 40px;
        margin-right: 7px;
    }

    @media (max-width: 992px) {
        p{
            display: none;
        }
    }

`