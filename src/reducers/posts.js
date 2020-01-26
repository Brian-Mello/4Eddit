const initialState = {
    allPosts: [],
    selectedPostId: "",
    selectedPost: {},

}

const posts = (state = initialState, action) => {
    switch( action.type ) {
        case "SET_POSTS_ACTION":
            return { ...state, allPosts: action.payload.posts}

        case "SET_POST_ID_ACTION":
            return  { ...state, selectedPostId: action.payload.postId}

        case "SET_COMMENTS_ACTION":
            return { ...state, comments: action.payload.comments}

        case "SET_POST_DETAIL": 
            return { ...state, selectedPost: action.payload.postDetail}
        default:
            return state 
    }
}

export default posts;