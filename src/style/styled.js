import styled from "styled-components";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

// containers

export const StyledHeaderForms = styled.header `
    width: 100%;
    min-height: 150px;
    background-color: rgb(237, 127, 97);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    position: absolute;
    top: 0px;
`

export const StyledMain = styled.main `
    width: 100%;
    min-height: 689px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: #ffa485;
    position: absolute;
    top: 120px;

` 

export const Container = styled.div `
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffa485;
    font-family: 'Manrope', sans-serif;
    
`

// inputs do formulário

export const Input = styled.input `
    outline: none;
    border: 0;
    width: 90%;
    border-bottom: 1px solid black;
    margin-bottom: 20px;
    :hover {
        cursor: text;
    }
`

export const Label = styled.label `
    font-weight: bolder;
    font-size: 15px;
`

// Botões

export const BackToTopButton = styled(Button) `
    position: fixed;
    right: 4%;
    bottom: 2%;
    color: black;
    width: auto;
    box-shadow: 0 0 5px;
    background-color: white;
    border-radius: 10px;
    transition-timing-function: linear;
    :hover {
        cursor: pointer;
        border: 1px solid white;
        background-color: white;
    }
`

export const StyledButtonForms = styled(Button) `
    cursor: pointer;
    color: white;
    width: auto;
    
    :hover {
        border: 1px solid white;
        background-color: rgb(237, 127, 97);
    }
`

// icones material ui

export const StyledTextField = styled(TextField)`
    color: white;
    background-color: rgb(237, 127, 97);
`

// Imagem

export const StyledImgForms = styled.img `
    width: 150px;
    height: 150px;
`