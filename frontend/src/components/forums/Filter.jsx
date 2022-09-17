import React,{useState, useContext} from 'react'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
/* ------------------------------- FONTAWESOME ------------------------------ */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
/* ----------------------------- REACT BOOTSTRAP ---------------------------- */
import Accordion from 'react-bootstrap/Accordion';
import FilterItem from './FilterItem';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
/* --------------------------------- CONTEXT -------------------------------- */
import { UserContext } from '../context/userContext';
/* ------------------------------- SWEETALERTR ------------------------------ */
import Swal from 'sweetalert2';
/* ---------------------------- REACT-ROUTER-DOM ---------------------------- */
import { useNavigate } from 'react-router-dom';
/* ------------------------------ REACT-SELECT ------------------------------ */
import Select from 'react-select'



const URI = process.env.REACT_APP_URI

const options = [
    { value: 'antenas', label: 'Antenas' },
    { value: 'noticias', label: 'Noticias' },
    { value: 'espacio', label: 'Espacio' },
    { value: 'tutoriales', label: 'Tutoriales' }
    
  ]


const Filter = ({getMyForos, getForos, setSearch}) => {

    const {user} = useContext(UserContext)
    const [input, setInput] = useState('');
    const navigate = useNavigate()

    const [state, setState] = useState(false);
    const [show, setShow] = useState(false);
    const [newForm, setNewForm] = useState({
        titulo: '',
        subtitulo: '',
        cuerpo: '',
        categoria: ''
    });


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChangeInput = (e) => {
        if(e.keyCode == 13 || e.keyCode == 32){
            setSearch(input)
        }
    }
  

    const handleClick = () => {
        const width = document.body.clientWidth
        if(width < 992){
          setState(!state);
        }
    }

    const handleChange = ({ target: {name, value}}) => {
        setNewForm({...newForm, [name]: value})
    }

    const createNewForm = async(e) => {
        e.preventDefault()
        let date = new Date();
        let output = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();
        console.log(output);
        if(user){
            if(newForm.titulo || newForm.subtitulo || newForm.cuerpo){
                const titulo = newForm.titulo
                const subtitulo = newForm.subtitulo
                const cuerpo = newForm.cuerpo
                const autor = user.nombre_usuario
                const categoria = newForm.categoria
                const fecha = output
                const res = await fetch(`${URI}/add_forum`, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      titulo,
                      subtitulo,
                      cuerpo,
                      autor,
                      categoria,
                      fecha
                    })
                })
                const data = await res.json()
                Swal.fire({
                    title: data.alertTitle,
                    text: data.alertMessage,
                    icon: data.alertIcon,
                    showConfirmButton: data.showConfirmButton,
                    timer: data.timer
                }).then(() => {
                    navigate(data.ruta)
                    handleClose()
                })
                console.log('foro creado')
            }else{
                Swal.fire({
                    title: 'Complete los campos para crear el foro',
                    icon: 'warning',
                    confirmButtonText: 'Vamos!',
                })
            }
        }else{
            Swal.fire({
                title: 'Primero debe iniciar sesion',
                icon: 'warning',
                confirmButtonText: 'Vamos!',
            }).then(() => {
                navigate('/user')
            })
        }
    }



    return (
        <Container className='p-2'>
            <ContainerSearch className='d-flex justify-content-center align-items-center'>
                <input type="text" className='form-control' onKeyUp={(e) => {handleChangeInput(e)}} onChange={(e) => {setInput(e.target.value)}}  placeholder='Buscar...' />
                <button className='mx-1 p-1 px-2' onClick={handleClick}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </ContainerSearch>
            <ContainerBody className={`d-flex justify-content-center align-items-center ${state ? 'active': ''}`}>
                <FontAwesomeIcon icon={faX} className='icon__x' onClick={handleClick} />
                <Accordion defaultActiveKey="0" className='w-100' alwaysOpen>
                    <FilterItem eventKey='0' title='Categorias'>
                        <ul className="list-group">
                            <button className="list-group-item" onClick={() => {getForos('todos')}}>Todos</button>
                            <button className="list-group-item" onClick={() => {getForos('antenas')}}>Antenas</button>
                            <button className="list-group-item" onClick={() => {getForos('noticias')}}>Noticias</button>
                            <button className="list-group-item" onClick={() => {getForos('espacio')}}>Espacio</button>
                            <button className="list-group-item" onClick={() => {getForos('tutoriales')}}>Tutoriales</button>
                        </ul>
                    </FilterItem>
                    <FilterItem eventKey='2' title='Mis Foros'>
                        <ul className="list-group ">
                            <Button className="list-group-item" onClick={handleShow}>
                                Crear un foro
                            </Button>
                            <button className="list-group-item" onClick={() => {getMyForos()}}>Mis foros</button>
                        </ul>
                    </FilterItem>
                </Accordion>
            </ContainerBody>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Crear un foro</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={createNewForm}>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Categoria</label>
                            <Select options={options} name='category' onChange={(e) => {setNewForm({...newForm, ['categoria']: e.value})}}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Titulo del foro</label>
                            <input type="text" className="form-control" maxLength='150' id="exampleFormControlInput1" name='titulo' onChange={handleChange}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Subtitulo</label>
                            <input type="text" className="form-control" maxLength='150' id="exampleFormControlInput1" name='subtitulo' onChange={handleChange}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Descripcion del foro</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" name='cuerpo' onChange={handleChange}></textarea>
                        </div>
                        <button type="submit" className='btn btn-primary'>Crear foro</button>
                    </form>

                </Modal.Body>
            </Modal>
        </Container>
    )
}

export default Filter

const Container = styled.div`

    background: #fff;
    border-radius: 5px;
    max-height: 54px;
    @media (min-width: 992px) {
        position: sticky;
        max-height: 100%;
        top: 100px;
        left: 0;
    }

`

const ContainerSearch = styled.div`

    button{
        background: transparent;
        border: 1px solid #ced4da;
        border-radius: 5px;  
        color: #9e9e9e;
        transition: all .5s ease;
        &:hover{
            background: #ced4da;
            color: #fff;
        }
        @media (min-width: 992px) {
            display: none;
        }
    }

`

const ContainerBody = styled.div`
    padding: 0 20px;
    padding-top: 100px;
    background: #e2e2e2;
    position: fixed;
    top: 0;
    left: -100%;
    height: 100vh;
    width: 100%;
    z-index: 90;

    transition: all .5s ease;

    &.active{
        left: 0;
    }

    @media (min-width: 992px) {
        margin-top: 20px;
        padding: 0;
        position: relative;
        left: 0;
        height: 100%;
        background: transparent;
        padding-top: 0;


    }

    .icon__x{
        position: absolute;
        z-index: 50;
        top: 100px;
        right: 30px;
        font-size: 20px;
        
        &:hover{
            color: red;
        }

        @media (min-width: 992px) {
            display: none;
        }
    }

    ul{
        button{
            &:hover{
                background: #ced4da;
            }
        }
    }

`