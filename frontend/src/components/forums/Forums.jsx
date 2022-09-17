import React,{useState, useEffect} from 'react'
/* --------------------------- STYLED-COMPOONENTS --------------------------- */
import styled from 'styled-components'
import Filter from './Filter'
import ForumsList from './ForumsList'


const Forums = () => {
    
    return (
        <Container>
            <div className="max__container p-5">
                <p className="title pb-3 mx-2">El Global Bulletin Board System</p>

                <ContainerForums className="row">

                    <div className='col-lg-3 col-12 mb-5'>
                        <Filter/>
                    </div>

                    <div className="col-lg-9 col-12">
                        <ForumsList/>
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