import React from 'react';
import {CommentCardContainer, CardHeader, P, CardMain, CardFooter, ArrowContainer, StyledArrowDownward, StyledArrowUpward} from './styled'

export function CommentCard(props){
    return(
        <CommentCardContainer>
            <CardHeader>
                <P>{props.username}</P>
            </CardHeader>
            <CardMain>
                <P>{props.text}</P>
            </CardMain>
            <CardFooter>
                <ArrowContainer>
                    <StyledArrowUpward 
                        onClick={props.onClickUpward}
                        color={props.upwardColor}
                    />
                    {props.votesCount}
                    <StyledArrowDownward
                        onClick={props.onClickDownward}
                        color={props.downwardColor}
                    />  
                </ArrowContainer>
            </CardFooter>
        </CommentCardContainer>
    )
}

export default CommentCard;