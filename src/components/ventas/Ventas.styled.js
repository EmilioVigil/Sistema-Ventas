import styled from 'styled-components';

const Container = styled.div`
    background-color: #EDAE49;
    margin: 0rem 2rem 0rem 2rem;
`

const SectionConfig = styled.section`
    height: 10rem;
    border : 1px solid black;
    padding:2rem;
    display:flex;
    flex-direction: column;

`

const FormConfig = styled.form`

    #information{
        display:flex;
        flex-direction: row;
        justify-content:space-between;
        gap: 5rem;
    }

    input #fecha{
        width: 10rem;
    }

`

const ItemForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 10rem;
    gap: 5px;
    margin-bottom: 10px;

    input{
        padding: 5px;
        border : none;
        border-radius: 2px;
        color : #fff;
        background-color: #18273E;
    }


`


export {
    Container,
    SectionConfig,
    FormConfig,
    ItemForm
}