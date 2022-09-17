import React,{useState, useEffect} from 'react'
/* ---------------------------- STYLED-CMPONENTS ---------------------------- */
import styled from 'styled-components'
import ForumItem from './ForumItem'
/* ------------------------------- COMPONENTS ------------------------------- */
import Loader from '../utils/Loader'

const URI = process.env.REACT_APP_URI


const ForumsList = () => {
    const [listaForos, setListaForos] = useState(false);

    const getForos = async() => {
        const res = await fetch(`${URI}/forums`)
        const data = await res.json()
        console.log(data)
        setListaForos(data)
    }

    useEffect(()=>{

        getForos()

    }, [])
    return (
        <Container className='row p-0 m-0'>


            {
                listaForos === false ? (

                    <Loader/>

                ):(
                    listaForos.map((item)=><ForumItem key={item[0]} id={item[0]} autor={item[1]} cuerpo={item[2]} titulo={item[3]} subtitulo={item[4]} fecha={item[5]}  />)
                )
            }
        </Container>
    )
}

export default ForumsList

const Container = styled.div`

    min-height: 500px;

`