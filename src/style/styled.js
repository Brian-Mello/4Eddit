import styled, { keyframes } from "styled-components";
import Comment from "@material-ui/icons/Comment"
import ArrowUpward from "@material-ui/icons/ArrowUpward"
import ArrowDownward from "@material-ui/icons/ArrowDownward"
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

// containers

export const StyledHeader = styled.header `
    width: 100%;
    min-height: 100px;
    background-color: rgb(237, 127, 97);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    position: absolute;
    top: 0px;
`

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

export const LogoContainer = styled.div `
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const MenuContainer = styled.div `
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const Container = styled.div `
    width: 100%;
    min-height: 689px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffa485;
    font-family: 'Bangers', cursive;
    
`

export const CardContainer = styled.div `
    width: 300px;
    min-height: 230px;
    display: grid;
    grid-template-rows: 40px 2fr 40px;
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

export const CreateCommentContainer = styled.div `
    width: 300px;
    max-width: 300px;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 0px 5px;
    margin: 10px;
    :hover {
        box-shadow: 0px 0px 10px;
    }
`

export const PostCardContainer = styled.div `
    width: 300px;
    max-width: 300px;
    min-height: 200px;
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

// Card Containers

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

export const ArrowContainer = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CommentContainer = styled.span`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 5px;
    width: 40px;
`

// inputs do formulário

export const P = styled.p `
    margin: 5px;
    padding: 0;
    max-width: 300px;
    font-size: 15px;
`

export const PostName = styled.h2 `
    margin: 5px;
    max-width: 300px;
    padding: 0;
`

export const PostTitle = styled.h3 `
    margin: 5px;
    padding: 0;
    max-width: 300px;
    border-bottom: 1px solid black;
`

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

export const StyledButton = styled(Button) `
    cursor: pointer;
    color: white;
    width: auto;
    margin-right: 40px;
    :hover {
        border: 1px solid white;
        background-color: rgb(237, 127, 97);
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

export const StyledComment = styled(Comment) `
    :hover {
        cursor: pointer;
    }
` 

export const StyledTextField = styled(TextField)`
    color: white;
    background-color: rgb(237, 127, 97);
`

export const StyledSearchTextField = styled(TextField)`
    color: white;
    margin: 20px;
`

// Imagem


export const StyledImg = styled.img `
    width: 100px;
    height: 100px;
    margin-left: 20px;
`

export const StyledImgForms = styled.img `
    width: 150px;
    height: 150px;
`
// formulário

export const FormWrapper = styled.form`
    width: 100%;
    height: auto;
    gap: 10px;
    place-content: center;
    justify-items: center;
    display: grid;
    color: white;
`;

// loader animado 

export const Loading = styled.text `
    font-size: 9px;
    text-align: center;
`

const dash = keyframes  `
    100% { stroke-dashoffset: 136; }
`

export const Triangle = styled.polygon`
    stroke-dasharray: 17;
    animation: ${dash} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`
