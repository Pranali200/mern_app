import API from './api'
export const register = async (email, password) =>{
    const {data} = await API.post('/auth/register', {email,password});
    return data;
}

export const login = async (email, password) =>{
    const {data} = await API.post('/auth/login',{email,password})
    return data;
}

