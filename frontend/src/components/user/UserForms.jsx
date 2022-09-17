import { useState, useContext } from "react";
import styled from "styled-components";
/* ---------------------------- REACT-ROUTER-DOM ---------------------------- */
import {useNavigate} from 'react-router-dom'
/* ------------------------------- SWEETALERT ------------------------------- */
import Swal from 'sweetalert2'
/* ---------------------------- UNIVERSA-COOKIES ---------------------------- */
import Cookies from 'universal-cookie';
/* --------------------------------- CONTEXT -------------------------------- */
import { UserContext } from "../context/userContext";




const URI = process.env.REACT_APP_URI

const UserForms = () => {

    const [formState, setFormState] = useState(false);

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [fullname, setFullname] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [check, setCheck] = useState(false);
    

    const {isAuthenticated} = useContext(UserContext)


    const cookies = new Cookies();
    const navigate = useNavigate()

    const handleClickChangeForm = () => {
        setFormState(!formState)
    }

    const createUser = async(e) => {
        e.preventDefault()
        console.log('crear usuario')
        if(password === confirmPassword){
            console.log(URI)
            const res = await fetch(`${URI}/add_user`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  email,
                  username,
                  fullname,
                  password
                })
            })
            const data = await res.json()
            console.log(data)
            Swal.fire({
                title: data.alertTitle,
                text: data.alertMessage,
                icon: data.alertIcon,
                showConfirmButton: data.showConfirmButton,
                timer: data.timer
            }).then(() => {
                navigate(data.ruta)
            })
            console.log('crear usuario')
        }else{
            Swal.fire({
                title: 'Ocurrio un error',
                text: 'Las contraseñas no coinciden',
                icon: 'error',
                showConfirmButton: true,
                timer: false
            })    
            console.log('las contraseñas no coinciden')
        }
    }

    const getUser = async(e) => {
        e.preventDefault()
        console.log('Iniciar sesion')
        const res = await fetch(`${URI}/sign_in`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              username,
              password
            })
        })

        const data = await res.json()
        console.log(data)
        const alert = data.alert
        if(data.token){
            setCookies(data.token)
            isAuthenticated()
        }
        Swal.fire({
            title: alert.alertTitle,
            text: alert.alertMessage,
            icon: alert.alertIcon,
            showConfirmButton: alert.showConfirmButton,
            timer: alert.timer
        }).then(() => {
            navigate(alert.ruta)
        })
 
    }

    const setCookies = (token) => {
        console.log(token)
        try{
            cookies.set('jwt', token, { path: '/'});

        }catch(error){
            console.log('no hay usuario')
        }
    }

    return (
        <ContainerFlip className={formState ? 'active' : ''}>
            <div className="card front p-5">
                <form className='formSignUp' onSubmit={createUser}>
                    <div className="mb-2">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" name="email" required className="form-control" id="exampleInputEmail1" onChange={(e) => {setEmail(e.target.value)}}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="exampleInputPassword1" className="form-label">Nombre completo</label>
                        <input type="text" name="fullname" required className="form-control" id="exampleInputPassword1" onChange={(e) => {setFullname(e.target.value)}} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="exampleInputPassword1" className="form-label">Nombre de usuario</label>
                        <input type="text" name="username" required className="form-control" id="exampleInputPassword1" onChange={(e) => {setUsername(e.target.value)}} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                        <input type="password" name="password" required className="form-control" id="exampleInputPassword1" onChange={(e) => {setPassword(e.target.value)}} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="exampleInputPassword1" className="form-label">Confirmar contraseña</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => {setConfirmPassword(e.target.value)}} />
                    </div>
                    <button type="submit" className="btn mb-2">Registrarse</button>
                    <br />
                    <a href='#!' onClick={handleClickChangeForm} className='link-primary'>Si ya tienes cuenta inicie sesion</a>

                </form>
            </div>
            <div className="card back p-5">
                <form className='formSignIn' onSubmit={getUser}>
                    <div className="mb-2">
                        <label htmlFor="exampleInputPassword1" className="form-label">Nombre de usuario</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" onChange={(e) => {setUsername(e.target.value)}} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => {setPassword(e.target.value)}} />
                    </div>
                    <div className="mb-2 form-check">
                        <input type="checkbox" onClick={() => setCheck(!check)} className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Recuerdame</label>
                    </div>
                    <button type="submit" className="btn mb-2">Iniciar sesion</button>
                    <br />
                    <a href='#!' onClick={handleClickChangeForm} className='link-primary'>Si todavia no tienes cuenta puedes Registrarse</a>
                </form>
            </div>
        </ContainerFlip>
    );
}
 
export default UserForms;

const ContainerFlip = styled.div`
    position: relative;

    .card{
        display: flex;
        justify-content: center;
        align-items: stretch;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

        transition-timing-function: cubic-bezier(.175, .885, .32, 1.275);
        transition-duration: 1.5s;
        transition-property: transform, opacity;


    }

    .front{
        transform: rotateY(0deg);
    }

    .back{
        position: absolute;
        opacity: 0;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        transform: rotateX(-180deg);
        z-index: -1;
    }

    &.active{
        .front {
            transform: rotateX(180deg);
            z-index: -1;
        }
        .back {
            z-index: 1;
            opacity: 1;
            transform: rotateX(0deg);
        }
    }

`