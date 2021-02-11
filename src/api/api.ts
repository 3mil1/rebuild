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
        return instance.delete(`auth/login`)
    },

}
