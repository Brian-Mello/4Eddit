import styled from 'styled-components';
import Comment from "@material-ui/icons/Comment"
import ArrowUpward from "@material-ui/icons/ArrowUpward"
import ArrowDownward from "@material-ui/icons/ArrowDownward"

export const PostCardContainer = styled.div `
    width: 300px;
    min-width: 300px;
    max-width: 80%;
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
    padding: 0 20px 0 20px;
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

export const P = styled.p `
    margin: 5px;
    padding: 0;
    max-width: 250px;
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