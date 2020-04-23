import React from 'react';
import {PostCardContainer, CardHeader, PostName, CardMain, PostTitle, P, CardFooter, ArrowContainer, StyledArrowUpward, StyledArrowDownward, CommentContainer, StyledComment} from './styled'

export function PostContainer (props){
    return(
        <PostCardContainer>
            <CardHeader>
                <PostName>{props.username}</PostName>
            </CardHeader>
            <CardMain onClick = {props.onClickMain}>
                <PostTitle>{props.title}</PostTitle>
                <P>{props.text}</P>
            </CardMain>
            <CardFooter>
                <ArrowContainer>
                    <StyledArrowUpward 
                        onClick={props.onClickArrowUpward}
                        color={props.upwardColor}
                    />
                    {props.votesCount}
                    <StyledArrowDownward 
                        onClick={props.onClickArrowDownward}
                        color={props.downwardColor}
                    />
                </ArrowContainer>
                <CommentContainer>
                    {props.commentsNumber}
                    <StyledComment onClick={props.onClickCommentIcon}/>
                </CommentContainer>
            </CardFooter>
        </PostCardContainer> 
    )
}

export default PostContainer;