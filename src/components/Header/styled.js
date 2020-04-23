import styled from 'styled-components';
import Button from "@material-ui/core/Button";

export const StyledHeader = styled.div `
    width: 100%;
    height: 100px;
    background-color: rgb(237, 127, 97);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    position: absolute;
    top: 0;
`

export const LogoContainer = styled.div `
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const StyledImg = styled.img `
    width: 100px;
    height: 100px;
    margin-left: 20px;
`

export const MenuContainer = styled.div `
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
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