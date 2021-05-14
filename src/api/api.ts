import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: `http://localhost:3000`,
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
        return instance.post('forgot-password', {email})
    }
}

export const registerApi = {
    register(email: string, firstName: string, lastName: string, password: string,) {
        return instance.post('register', {email, firstName, lastName, password})
    }
}

export const postsApi = {
    getPosts(tags: string | null, page: number) {
        return instance.get(`posts/${tags}?page=${page}`)
    },
    getTags() {
        return instance.get(`categories`)
    },
    addPost(title: string, content: string, categories: []) {
        return instance.post('posts/new-post', {title, content, categories})
    },
    getCertainPost(id: number) {
        return instance.get(`post/${id}`)
    },
    editPost(id: number, title: string, content: string, categories: { id: number }[]) {
        return instance.patch('posts/edit/' + id, {title, content, categories})
    },
    commentPost(id: number, rating: number, review_text: string) {
        return instance.post(`posts/${id}/add-review`, {rating, review_text})
    }
}

export const userApi = {
    getUser(id: number) {
        return instance.get(`user/${id}`)
    }
}
