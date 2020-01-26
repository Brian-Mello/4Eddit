import React from 'react';
import { StyledHeader, StyledButton, StyledImg, LogoContainer, MenuContainer } from '../../style/styled'
import Foureddit from '../../containers/images/4eddit.png'

function Header (props) {
    return (
        <StyledHeader>
            <LogoContainer>
                <StyledImg src={Foureddit}/>
            </LogoContainer>
            <MenuContainer>
                <StyledButton onClick={props.onClick}>{props.text}</StyledButton>
            </MenuContainer>
        </StyledHeader>
    )
}

export default Header;