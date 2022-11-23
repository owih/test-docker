import axios from "axios";

export const fetchCommentsAPI = () => {
    return axios.get('/api/comments/');
}

export const fetchCommentAPI = (id) => {
    return axios.get('/api/comments/' + id);
}

export const createCommentAPI = ({ name, text, date }) => {
    return axios.post('/api/comments/', {
        name,
        text,
        date,
    });
}

export const deleteCommentAPI = (id) => {
    return axios.delete('/api/comments/' + id);
}

export const patchCommentAPI = ({ id, name, text, date }) => {
    return axios.patch('/api/comments/' + id, {
        name,
        text,
        date,
    });
}
