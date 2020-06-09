import * as axios from 'axios';


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": "0345e7f3-3e93-40f9-b140-50e5549d38fa"}
})

const usersAPI = {

    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    follow(id) {
        return instance.post(`follow/${id}`)
    },

    unfollow(id) {
        return instance.delete(`follow/${id}`)
    }

}


export const authAPI = {
    me() {
        return instance.get(`auth/me`)

    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})

    },
    logout() {
        return instance.delete(`auth/login`)

    }
}

export const profileAPI = {
    getProfile(id) {
        return instance.get('profile/' + id)
    }
    ,
    getStatus(id) {
        return instance.get('profile/status/' + id)
    }

    ,
    updateStatus(status) {
        return instance.put('profile/status', {status: status})
    }
    ,
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile);

        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
    ,
    saveProfile(profile) {
        return instance.put('profile', profile)
    }
}
export default usersAPI;
