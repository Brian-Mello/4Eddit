import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

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

export const FormWrapper = styled.form`
    width: 100%;
    height: auto;
    gap: 10px;
    place-content: center;
    justify-items: center;
    display: grid;
    color: white;
`;

export const CreatePostContainer = styled.div `
    width: 300px;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0px 0px 5px;
    margin: 10px;
    background-color: white;
    :hover {
        box-shadow: 0px 0px 10px;
    }
`

export const StyledSearchTextField = styled(TextField)`
    color: white;
    margin: 20px;
`