import React,{useState, useEffect} from 'react'
/* ---------------------------- STYLED-CMPONENTS ---------------------------- */
import styled from 'styled-components'
import ForumItem from './ForumItem'
/* ------------------------------- COMPONENTS ------------------------------- */
import Loader from '../utils/Loader'



const ForumsList = ({listaForos}) => {
    
    
    return (
        <Container className='p-0 m-0'>


            {
                listaForos === false ? (

                    <Loader/>

                ):(
                    listaForos.map((item)=><ForumItem key={item[0]} id={item[0]} autor={item[1]} cuerpo={item[4]} titulo={item[2]} subtitulo={item[3]} fecha={item[6]} categoria={item[5]}  />)
                )
            }
        </Container>
    )
}

export default ForumsList

const Container = styled.div`

    min-height: 500px;

`