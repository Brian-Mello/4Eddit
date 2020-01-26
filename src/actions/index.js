import axios from 'axios';
import  { push } from 'connected-react-router'
import { routes } from '../containers/Router';

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/fourEddit"

// pegar posts
const setPostAction = (posts) => ({
    type: "SET_POSTS_ACTION",
    payload: {
        posts,
    }
}) 

// pegar o ID do post
export const setPostIdAction = (postId) => ({
    type: "SET_POST_ID_ACTION",
    payload: {
        postId
    }
})

// pegar os detalhes de um post
export const setPostDetailAction = (postDetail) => ({
    type: "SET_POST_DETAIL",
    payload: {
        postDetail,
    }
})

// pegar o ID de um comentário
export const setCommentIdAction = (commentId) => ({
    type: "SET_COMMENT_ID_ACTION",
    payload: {
        commentId,
    }
})

// votar no Post
export const votePost = (postId, direction, userVoteDirection) => async (dispatch) => {
    const token = window.localStorage.getItem("token")    
    if (userVoteDirection === direction){
        
        const upVote = {
            direction: 0
        }

        try {
            await axios.put (`h${baseUrl}/posts/${postId}/vote`, upVote, {
                headers: {
                    auth: token
                } 
            })
            
            dispatch(getPosts())
        } catch (error) {

            window.alert("Ocorreu um erro, tente novamente")

        }
    } else {
        
        const downVote = {
            direction: direction
        }

        try {
            await axios.put (`${baseUrl}/posts/${postId}/vote`, downVote, {
                headers: {
                    auth: token
                } 
            })
            
            dispatch(getPosts())

        } catch (error) {

            window.alert("Ocorreu um erro, tente novamente")
        }
    }
}



// votar no Comentário
export const voteComment = (postId, commentId, direction, userVoteDirection) => async (dispatch) => {
    const token = window.localStorage.getItem("token")    
    if (userVoteDirection === direction){

        const upVote = {
            direction: 0
        }

        try {
            await axios.put (`h${baseUrl}/posts/${postId}/comment/${commentId}/vote`, upVote, {
                headers: {
                    auth: token
                } 
            })
            
            dispatch(getPostDetails())
        } catch (error) {

            alert("erro ao votar")

        }
    } else {

        const downVote = {
            direction: direction
        }

        try {
            await axios.put (`${baseUrl}/posts/${postId}/comment/${commentId}/vote`, downVote, {
                headers: {
                    auth: token
                } 
            })
            
            dispatch(getPostDetails(postId, commentId))

        } catch (error) {

            alert("erro ao votar")
        }
    }
}

// ver detalhes de um post
export const getPostDetails = (postId) => async (dispatch) => {

    const token = window.localStorage.getItem("token")
    try {
        const response = await axios.get (`${baseUrl}/posts/${postId}`, {
            headers: {
                auth: token
            }
        })

        dispatch(setPostDetailAction(response.data.post))

    } catch (error) {
        window.alert("Falha na renderização dos detalhes")
    }


}

// mostrar postagens
export const getPosts = () => async (dispatch) => {

    const token = window.localStorage.getItem("token")

    try {
        const response = await axios.get (`${baseUrl}/posts`, {
            headers: {
                auth: token
            }
        })
        dispatch(setPostAction(response.data.posts))
    } catch (error) {
        window.alert ("Erro de renderização")
    }
}

// criar comentário
export const createComment = (text, postId) => async (dispatch) => {

    const newComment = {
        text,
    }

    const token = window.localStorage.getItem("token")

    try {
        await axios.post (`${baseUrl}/posts/${postId}/comment`, newComment, {
            headers: {
                auth: token
            }
        })
        window.alert("Comentário Criado com sucesso")
        
        dispatch(getPostDetails(postId))
    } catch (error) {
        window.alert("Falha ao criar o Comentário")
    }
}

// criar post
export const createPost = (text, title) => async (dispatch) => {
    
    const newPost = {
        text,
        title
    }

    const token = window.localStorage.getItem("token")

    try {
        await axios.post (`${baseUrl}/posts`, newPost, {
            headers: {
                auth: token
            }
        })
        window.alert("Post Criado com sucesso")
        dispatch(getPosts())
    } catch (error) {
        window.alert("Falha ao criar o Post")
    }
} 

// logar na conta
export const login = (email, password) => async (dispatch) => {

    const login = {
        email,
        password,
    }
    try {
        const response = await axios.post (`${baseUrl}/login`, login)
        window.localStorage.setItem("token", response.data.token)
        dispatch(push(routes.feed))
    } catch (error) {
        window.alert("Usuário ou senha inválidos")
    }

}

// Função de cadastro
export const signUp = (email, password, username) => async (dispatch) =>{
    const signUp = {
        email,
        password,
        username,
    }

    try {
        await axios.post(`${baseUrl}/signup`, signUp)
        dispatch(push(routes.root))
        window.alert("Conta criada com sucesso")
    } catch (error) {
        window.alert("Conta existente")
    }  
}