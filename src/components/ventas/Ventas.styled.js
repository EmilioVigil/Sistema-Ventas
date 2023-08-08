import styled from 'styled-components';

const Container = styled.div`
    background-color: #F0F0F0;
    margin: 1rem 2rem 0rem 2rem;
    border-radius: 10px;
`

const SectionConfig = styled.section`
    height: 10rem;
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
        border-radius: 5px;
        color : #333;
        background-color: #f7f7f7;
        padding: .5rem;
        font-size: 15px;
          font-weight: bold;

        
        &.location{
            width: 19rem;
        }
    }

    select{

        width: 10rem  ;
    padding: 5px;
    border: none;
    border-radius: 5px;
    background-color: #f7f7f7;
    color: #333;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background-color: #eaeaea;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 2px #555;
    }
    
}



`


export {
    Container,
    SectionConfig,
    FormConfig,
    ItemForm
}