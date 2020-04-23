import styled from 'styled-components';

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