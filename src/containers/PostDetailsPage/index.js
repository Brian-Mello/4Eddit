import React from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router/index';
import { getPostDetails, createComment, voteComment } from "../../actions";
import PostContainer from '../../components/postContainer'
import Loader from "../../components/Loader";
import Header from "../../components/Header";
import PropTypes from "prop-types";
import CommentCard from '../../components/commentContainer'
import { CreateCommentContainer } from './styled';
import {Container, Input, Label, BackToTopButton, StyledMain,} from '../../style/styled';

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

        let mapComment

        let selectedPostCard = (<PostContainer
            key={selectedPost.id}
            username={selectedPost.username}
            title={selectedPost.title}
            text={selectedPost.text}
            upwardColor={selectedPost.userVoteDirection > 0 ? "secondary" : "inherit"}
            votesCount={selectedPost.votesCount}
            downwardColor={selectedPost.userVoteDirection < 0 ? "primary" : "inherit"}
            commentsNumber={selectedPost.commentsNumber}
        />)

        if(!selectedPost.comments){
            mapComment = (<Loader/>)
        } else if (orderedComments.length > 0) {
            mapComment = orderedComments.map((comment) =>
                <CommentCard
                    key={comment.id}
                    username={comment.username}
                    text={comment.text}
                    onClickUpward={() => voteComment(selectedPost.id, comment.id, 1)}
                    upwardColor={comment.userVoteDirection > 0 ? "secondary" : "inherit"}
                    votesCount={comment.votesCount}
                    onClickDownward={() => voteComment(selectedPost.id, comment.id, -1)}
                    downwardColor={comment.userVoteDirection < 0 ? "primary" : "inherit"}
                />
            )
        }

        return(
            <Container>
                <Header onClick={goBackToFeed} text={'Voltar'}></Header>
                <StyledMain>
                    <BackToTopButton onClick={this.handleScrollToTop}>voltar pro topo</BackToTopButton>
                    {selectedPostCard}
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
                    {mapComment}
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
    selectedPostId: PropTypes.string.isRequired,
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