import API from './api'

export const register = async (name, email, password) => {
    const { data } = await API.post('/auth/register', { name, email, password });
    return data;
};


export const login = async (email, password) =>{
    const {data} = await API.post('/auth/login',{email,password})
    return data;
}
