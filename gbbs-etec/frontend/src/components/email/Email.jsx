import React, {useContext, useEffect, useState} from 'react'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
/* ------------------------------- SWEEETALERT ------------------------------ */
import Swal from 'sweetalert2';
import { UserContext } from '../context/userContext';



const Email = () => {

    const {isAuthenticated} = useContext(UserContext)
    const [message, setMessage] = useState({
        email: '',
        titulo: '',
        mensaje: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(message)
        Swal.fire(
            'En desarrollo',
            'Esta funcion sigue en desarrollo',
            'warning'
        )
    }

    const handleChangue = ({target: {name, value}}) => {
        setMessage({...message, [name]: value})
    }

    useEffect(() => {
        isAuthenticated()
    }, [])

    return (
        <Container className='py-5'>
            <ContainerHeader className="row p-0 m-0 px-5">
                <h5 className='mb-3'>Enviar un email desde la plataforma</h5>
                <h6 className='mb-5'>Se permiten archivos de cualquier tipo que no superen los 10mb</h6>
            </ContainerHeader>
            <div className="max__container p-5">
                <div className="row p-0 m-0">
                    <h6 className='h4 text-center mb-5'>Enviar un Email</h6>
                </div>
                <div className="row p-0 m-0">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Direccion de email</label>
                            <input type="email" className="form-control" name='email' id="exampleInputEmail1" onChange={handleChangue}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Titulo</label>
                            <input type="text" className="form-control" name='titulo' id="exampleInputPassword1" onChange={handleChangue}/>
                        </div>
                        <div className="form-floating mb-3">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" name='mensaje' onChange={handleChangue}></textarea>
                            <label htmlFor="floatingTextarea">Mensaje</label>
                        </div>
                        <button type="submit" className="btn">Submit</button>
                    </form>
                </div>
            </div>
        </Container>
    )
}

export default Email

const Container = styled.section`
    background: #243C7C;

    .max__container{
        width: 100%;
        max-width: 768px;
        margin: auto;
        background-color: #fff;

        h6{
            color: #243C7C;
        }

        button{
            background: #243c7c;
            color: #fff;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        }
    }
`

const ContainerHeader = styled.div`
    
    text-align: center;
    color: #fff;
    h5, h6{
        font-weight: lighter;
        font-size: 20px;
    }

`