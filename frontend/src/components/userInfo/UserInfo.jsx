import React,{useRef, useState, useContext} from 'react'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
/* ----------------------------------- IMG ---------------------------------- */
import img from '../../images/user.jpg'
/* ------------------------------- FONTAWESOME ------------------------------ */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../context/userContext';


const URI = process.env.REACT_APP_URI


const UserInfo = () => {

    const inputFile = useRef(null)
    const [file, setFile] = useState(null);
    const {user} = useContext(UserContext)


    const SelectFile = async(e) => {
        e.current.click()
    }

    const handleEditImg = async() => {
        console.log(file)
        let formData = new FormData();
        formData.append("file", file);
        formData.append("username", user.nombre_usuario);
        const res = await fetch(`${URI}/edit_img`, {
            method: 'POST',
            body: formData
        })
        const data = await res.json()
        console.log(data)
        console.log(formData.get('file'))
    }

    return (
        <Container className='py-5'>
            <div className="max__container p-5">
                <div className="row p-0 m-0">
                    <h6 className='mb-5'>Informacion de usuario</h6>
                </div>
                <div className='row justify-content-center align-items-center m-0 p-0'>
                    <div className='col-md-6 col-12 p-0'>
                        <ContainerImg >
                            <img src={file === null ? img : URL.createObjectURL(file)} alt=""  />
                            <div className='d-flex justify-content-center align-items-center' onClick={() => {SelectFile(inputFile)}}>
                                <FontAwesomeIcon icon={faImage} />
                            </div>
                        </ContainerImg>
                        <button className="btn btn-primary mt-3" onClick={handleEditImg}>Guardar</button>
                    </div>
                    <ContainerText className='col-md-6 col-12'>
                        <div className="mb-3">
                            <p><span>Nombre de usuario: </span>{user.nombre_usuario}</p>
                        </div>
                        <div className="mb-3">
                            <p><span>Email: </span>{user.email}</p>
                        </div>
                        <div className="mb-3">
                            <p><span>Nombre completo: </span>{user.nombre_completo}</p>
                        </div>
                    </ContainerText>
                    <input type="file" ref={inputFile} className='d-none' onChange={(e) => {setFile(e.target.files[0])}} />
                </div>
            </div>
        </Container>
    )
}

export default UserInfo

const Container = styled.section`

    background: #243C7C;


    .max__container{
        width: 100%;
        max-width: 768px;
        margin: auto;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;


        h6{
            text-align: center;
            font-size: 24px;
            color: #243C7C;
        }
    }


`

const ContainerText = styled.div`
    
    p{
        span{
            color: #0072bb;
            font-weight: bold;
        }
    }

`

const ContainerImg = styled.div`
    position: relative;
    img{
        width: 100%;
        max-width: 300px;
        object-fit: cover;
        border-radius: 20px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }

    div{
        position: absolute;
        background-color: rgba(17, 28, 58, 0.733);
        border-radius: 20px;
        height: 100%;
        width: 100%;
        max-width: 300px;
        top: 0;
        left: 0;
        opacity: 0;
        transition: all .5s ease;

        svg{
            color: #ffffff81;
            font-size: 30px;
        }
        
        &:hover{
            opacity: 1;
        }
    }

`