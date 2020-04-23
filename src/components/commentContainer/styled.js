import styled from 'styled-components';
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import ArrowDownward from "@material-ui/icons/ArrowDownward";

export const CommentCardContainer = styled.div `
    width: 300px;
    max-width: 300px;
    min-height: 150px;
    display: grid;
    grid-template-rows: 40px 2fr 30px;
    justify-items: center;
    align-content: center;
    text-align: center; 
    margin: 10px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px;
    :hover {
        box-shadow: 0px 0px 10px;
    }
`

export const CardHeader = styled.header `
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: rgb(237, 127, 97);
    border-radius: 5px;
`

export const CardMain = styled.main `
    width: 100%;
    max-width: 301px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: white;
    word-wrap: break-word;
    padding: 3px;
    :hover {
        cursor: pointer;
        color: black;
        background-color: #eeeeee;
    }
`

export const CardFooter = styled.footer `
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    background-color: rgb(237, 127, 97);
    border-radius: 5px;
`

export const P = styled.p `
    margin: 5px;
    padding: 0;
    max-width: 300px;
    font-size: 15px;
`

export const ArrowContainer = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const StyledArrowUpward = styled(ArrowUpward) `
    :hover {
        cursor: pointer;
    }
` 

export const StyledArrowDownward = styled(ArrowDownward) `
    :hover {
        cursor: pointer;
    }
` 