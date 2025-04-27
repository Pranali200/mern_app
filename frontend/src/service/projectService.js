import API from './api'
export const createproject = async (userId, name) =>{
    const {data} = await API.post('/project/create', {userId,name});
    return data;
}

export const getprojects = async (userId) =>{
    const {data} = await API.post('/project/user/',{userId})
    return data;
}

