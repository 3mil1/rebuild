import axios from "axios";

const instance = axios.create({
    // withCredentials: true,
    baseURL: `http://localhost:3000/`,

})

export const authAPI = {
    auth() {
        return instance.get(`users/validate`)
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
