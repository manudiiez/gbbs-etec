import React from 'react'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
/* ---------------------------- REACT-ROUTER-DOM ---------------------------- */
import {useNavigate} from 'react-router-dom'


const ForumItem = ({id, autor, cuerpo, titulo, subtitulo, fecha}) => {

    const navigate = useNavigate()

    const handleClick = (id) => {
        navigate(`/forums/${id}`)
    }
     return (
        <Container className='col-12 p-0 mb-4' onClick={() => handleClick(id)}>
            {/* <div className="card p-2">
                <div className="row g-0">
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{titulo}</h5>
                            <p className="card-text">{subtitulo}</p>
                            <p className="card-text"><small className="text-muted">Creador: {autor}</small></p>
                            <p className="card-text"><small className="text-muted">{fecha}</small></p>
                        </div>
                    </div>
                    <div className="col-md-4 text-center p-3">
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Amateurfunkstation.jpg/200px-Amateurfunkstation.jpg' className="img-fluid rounded" alt="..."/>
                    </div>
                </div>
            </div> */}
            <div className="card">
                <div className="card-header">
                    {autor}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{titulo}</h5>
                    <p className="card-text">{subtitulo}</p>
                </div>
                <div className="card-footer">
                    <p className='text-end m-0'>02 - 09 - 2022</p>
                </div>
            </div>
        </Container>
    )
}

export default ForumItem

const Container = styled.div`

    background: #fff;
    border-radius: 5px;
    transition: all .5s ease;    

    img{
        width: 100%;
        max-width: 400px;
        height: 100%;
        object-fit: cover;
    }

    &:hover{
        transform: scale(1.05);
    }

`