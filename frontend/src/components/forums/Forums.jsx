import React,{useState, useEffect, useContext} from 'react'
/* --------------------------- STYLED-COMPOONENTS --------------------------- */
import styled from 'styled-components'
import Filter from './Filter'
import ForumsList from './ForumsList'
import { UserContext } from '../context/userContext';


const URI = process.env.REACT_APP_URI


const Forums = () => {

    const [listaForos, setListaForos] = useState(false);
    const [search, setSearch] = useState('');
    const [categoriaSelect, setCategoriaSelect] = useState('');

    const {user} = useContext(UserContext)


    const getForos = async(value) => {
        // const res = await fetch(`${URI}/forums`)
        const res = await fetch(`${URI}/forums`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                categoria: value,
                input: search
            })
        })
        const data = await res.json()
        console.log(data)
        setListaForos(data)
    }

    const getMyForos = async() => {
        const res = await fetch(`${URI}/get_my_forums`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: user.nombre_usuario
            })
        })
        const data = await res.json()
        console.log(data)
        setListaForos(data)
    }

    useEffect(()=>{

        getForos('todos')

    }, [])

    useEffect(()=>{

        getForos(categoriaSelect)

    }, [categoriaSelect, search])

    
    return (
        <Container>
            <div className="max__container p-5">
                <p className="title pb-3 mx-2">El Global Bulletin Board System</p>

                <ContainerForums className="row">

                    <div className='col-lg-3 col-12 mb-5'>
                        <Filter getMyForos={getMyForos} getForos={setCategoriaSelect} setSearch={setSearch}/>
                    </div>

                    <div className="col-lg-9 col-12">
                        <ForumsList listaForos={listaForos}/>
                    </div>

                </ContainerForums>
            </div>

        </Container>
    )
}

export default Forums

const Container = styled.div`

    background-color: #243C7C;


    .max__container{
        width: 100%;
        max-width: 1140px;
        margin: auto;
    }

    .title{
        text-align: center;
        font-size: 30px;
        color: #fff;    
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    }
    

`
const ContainerForums = styled.section`

`