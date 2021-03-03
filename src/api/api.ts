import axios from "axios";


const instance = axios.create({
    // baseURL: `http://localhost:3000/`,
    // withCredentials: true,
})

export const authAPI = {
    auth() {
        return instance.get(`auth/me`)
            .then(response => {
                return response
            })
    },
    login(email: string, password: string) {
        return instance.post(`auth/login`, {email, password})
    },
    logout() {
        return instance.get(`auth/logout`)
    },

}

export const forgotPasswordApi = {
    passwordReset(email: string) {
        return instance.post('/forgot-password', {email})
    }
}

export const registerApi = {
    register(email: string, firstName: string, lastName: string, password: string,) {
        return instance.post('/register', {email, firstName, lastName, password})
    }
}

export const postsApi = {
    getPosts() {
        return instance.get(`/posts`)
    },
    getTags() {
        return instance.get(`/categories`)
    },
    addPost(title: string, content: string, categories: []) {
        return instance.post('/posts/new-post', {title, content, categories})
    }
}

