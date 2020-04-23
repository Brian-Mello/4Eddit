import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router/index';
import { getPosts, createPost, setPostIdAction, votePost } from '../../actions';
import Loader from "../../components/Loader";
import Header from "../../components/Header";
import {StyledSearchTextField, FormWrapper, CreatePostContainer} from './styled'
import { BackToTopButton, StyledMain, Container, Input, Label } from '../../style/styled'
import PostContainer from "../../components/postContainer";

// inputs do formulário
const createPostForm = [
    {
        name: "title",
        type: "text",
        label: "Título",
        required: true
    },
    {
        name: "text",
        type: "text",
        label: "Post",
        required: true
    }
]

class FeedPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            form: {},
            search: "",
        };
    };

    componentDidMount() {
        const token = window.localStorage.getItem("token")
        if(token === null){
          this.props.goToLoginPage()
        } else {
            this.props.getPosts()
        };
    };

    handleLogOut = () => {
        localStorage.removeItem("token")
        this.props.goToLoginPage()
    };

    handleInputOnChange = event => {
        const { name, value } = event.target;

        this.setState ({ form: { ...this.state.form, [name]: value }});
    };

    handleFieldChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });

        this.setState({ search: event.target.value })
    };

    handleCreatePost = event => {
        event.preventDefault();

        const { text, title } = this.state.form

        this.props.createPost ( text, title )
        this.setState({form: {}})
    };

    handleSetPostId = (postId) => {
        this.props.setPostId(postId)
        this.props.goToPostPageDetails(postId)
        window.scroll({
            top: 0,
            behavior: 'auto'
        });
    };

    handleScrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    };

    render() {
        const { posts } = this.state;
        const { votePost } = this.props;

        let filterPosts = this.props.posts.filter((post) => {
                return post.username.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || 
                post.text.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );

        let orderedPosts;

        if (filterPosts) {
            orderedPosts = filterPosts.sort((a,b) => {
                if (a.votesCount < b.votesCount) {
                    return 1;
                } else {
                    return -1;
                }
            });
        };

        let mapPost = (<h3>Não foi possível achar o Post!</h3>)

        if(this.props.posts.length === 0){
            mapPost = (<Loader/>)
        } else if (orderedPosts.length > 0) {
            mapPost = orderedPosts.map((post) =>
                <PostContainer
                    key={post.id}
                    username={post.username}
                    onClickMain={() => this.handleSetPostId(post.id)}
                    title={post.title}
                    text={post.text}
                    onClickArrowUpward={() => votePost(post.id, 1)}
                    upwardColor={post.userVoteDirection > 0 ? "secondary" : "inherit"}
                    votesCount={post.votesCount}
                    onClickArrowDownward={() => votePost(post.id, -1)}
                    downwardColor={post.userVoteDirection < 0 ? "primary" : "inherit"}
                    commentsNumber={post.commentsNumber}
                    onClickCommentIcon={() => this.handleSetPostId(post.id)}
                />
            )
        }

        const createPost = (<form onSubmit={this.handleCreatePost}>
            {createPostForm.map (input => (
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
        </form>)

        return(
            <Container>
                <Header onClick={this.handleLogOut} text={'Log Out'}></Header>
                <StyledMain>
                    <FormWrapper>
                        <StyledSearchTextField
                            color="primary"
                            onChange={this.handleFieldChange.bind(this)}
                            name="posts"
                            type="text"
                            label="Search"
                            value={posts}
                        />
                    </FormWrapper>
                    <CreatePostContainer>
                        {createPost}
                    </CreatePostContainer>
                    {mapPost}
                </StyledMain>
                <BackToTopButton onClick={this.handleScrollToTop}>voltar pro topo</BackToTopButton>
            </Container>
        )
    }
}

FeedPage.propTypes = {
    goToPostPageDetails: PropTypes.func.isRequired,
    goToLoginPage: PropTypes.func.isRequired,
    getPosts: PropTypes.func.isRequired,
    createPost: PropTypes.func.isRequired,
    setPostId: PropTypes.func.isRequired,
    votePost: PropTypes.func.isRequired,
    post: PropTypes.object,
}

const mapStateToProps = (state) =>({
    posts: state.posts.allPosts
})

const mapDispatchToProps = (dispatch) => ({
    goToPostPageDetails: (postId) => dispatch(push(`post/${postId}`)),
    goToLoginPage: () => dispatch(push(routes.root)),
    getPosts: () => dispatch(getPosts()),
    createPost: ( text, title ) => dispatch(createPost( text, title )),
    setPostId: (postId) => dispatch(setPostIdAction(postId)),
    votePost: (postId, direction) => (dispatch(votePost(postId, direction)))
})

export default connect(mapStateToProps, mapDispatchToProps)(FeedPage);