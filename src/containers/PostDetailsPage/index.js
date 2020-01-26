import React, {Fragment} from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router/index';
import { getPostDetails, createComment, voteComment } from "../../actions";
import Comment from "@material-ui/icons/Comment";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Loader from "../../components/Loader";
import Header from "../../components/Header";
import PropTypes from "prop-types";
import { BackToTopButton,ArrowContainer, PostName, PostTitle, CommentContainer, StyledMain,StyledArrowUpward, StyledArrowDownward, Container, CommentCardContainer, CardHeader, CardMain, CardFooter, CreateCommentContainer, PostCardContainer, P, Input, Label } from "../../style/styled"

// array do input
const createCommentForm = [
    {
        name: "text",
        type: "text",
        label: "Comment",
        required: true
    }
]


class PostDetailsPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            form: {}
        };
    };

    componentDidMount() {
        const token = window.localStorage.getItem("token")
        if(token === null){
          this.props.goToLoginPage()
        } else if (this.props.selectedPostId !== "") {
            this.props.getPostDetails(this.props.selectedPostId)
        } else {
            this.props.goBackToFeed()
        };
    };

    handleInputOnChange = event => {
        const { name, value } = event.target;

        this.setState ({ form: { ...this.state.form, [name]: value }});
    };

    handleCreateComment = event => {
        event.preventDefault();

        const { text } = this.state.form
        const { selectedPostId } = this.props

        this.props.createComment ( text, selectedPostId  )
        this.setState({form: {}})
    };

    handleScrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    };
    
    render() {
        const { goBackToFeed, voteComment, selectedPost } = this.props

        let orderedComments;

        if(selectedPost.comments){
            orderedComments = selectedPost.comments.sort((a,b) => {
                if (a.votesCount < b.votesCount) {
                    return 1;
                } else {
                    return -1;
                }
            });
        };

        const commentIsReady = !selectedPost.comments ? <Loader/> :  (
            <Fragment>
                {orderedComments.map((comment) =>
                    <CommentCardContainer key={comment.id}>
                        <CardHeader>
                            <P>{comment.username}</P>
                        </CardHeader>
                        <CardMain>
                            <P>{comment.text}</P>
                        </CardMain>
                        <CardFooter>
                            <ArrowContainer>
                                <StyledArrowUpward 
                                onClick={() => voteComment(selectedPost.id, comment.id, 1)}
                                color={comment.userVoteDirection > 0 ? "secondary" : "inherit"}
                            />
                                    {comment.votesCount}
                                <StyledArrowDownward
                                onClick={() => voteComment(selectedPost.id, comment.id, -1)}
                                color={comment.userVoteDirection < 0 ? "primary" : "inherit"}
                            />  
                            </ArrowContainer>
                        </CardFooter>
                    </CommentCardContainer>
                )}
            </Fragment>
        )

        return(
            <Container>
                <Header onClick={goBackToFeed} text={'Voltar'}></Header>
                <StyledMain>
                    <BackToTopButton onClick={this.handleScrollToTop}>voltar pro topo</BackToTopButton>
                    <PostCardContainer>
                        <CardHeader>
                        <PostName>{selectedPost.username}</PostName>
                        </CardHeader>
                        <CardMain>
                            <PostTitle>{selectedPost.title}</PostTitle>
                            <P>{selectedPost.text}</P>
                        </CardMain>
                        <CardFooter>
                            <ArrowContainer>
                                <ArrowUpward/>{selectedPost.votesCount}<ArrowDownward/>
                            </ArrowContainer>
                            <CommentContainer>
                                {selectedPost.commentsNumber} <Comment/>
                            </CommentContainer>
                        </CardFooter>
                    </PostCardContainer>
                    <CreateCommentContainer>
                        <form onSubmit={this.handleCreateComment}>
                            {createCommentForm.map (input => (
                                <div key={input.name}>
                                    <Label htmlFor = {input.name}>{input.label}</Label>
                                    <Input
                                        id = {input.id}
                                        name = {input.name}
                                        type = {input.type}
                                        label = {input.label}
                                        value = {this.state.form[input.name] || ""}
                                        required = {input.required}
                                        onChange = {this.handleInputOnChange}
                                        pattern = {input.pattern}
                                    />
                                </div>
                            ))}
                            <Button type="submit"> Enviar</Button>
                        </form>
                    </CreateCommentContainer>
                    {commentIsReady}
                </StyledMain>
            </Container>
        )
    }
}

PostDetailsPage.propTypes = {
    goBackToFeed: PropTypes.func.isRequired,
    goToLoginPage: PropTypes.func.isRequired,
    getPostDetails: PropTypes.func.isRequired,
    createComment: PropTypes.func.isRequired,
    selectedPostId: PropTypes.func.isRequired,
    voteComment: PropTypes.func.isRequired,
    selectedPost: PropTypes.object,
}

const mapStateToProps = (state) =>({
    selectedPostId: state.posts.selectedPostId,
    selectedPost: state.posts.selectedPost,
})

const mapDispatchToProps = (dispatch) =>({
    goBackToFeed: () => dispatch(push(routes.feed)),
    goToLoginPage: () => dispatch(push(routes.root)),
    getPostDetails: (postId) => dispatch(getPostDetails(postId)),
    createComment: (text, postId) => dispatch(createComment(text, postId)),
    voteComment: ( postId, commentId, direction ) => dispatch (voteComment ( postId, commentId, direction )),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailsPage);