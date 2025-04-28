import API from './api'
export const uploadYoutubePodcast = async (projectId, name,videoUrl) =>{
    const {data} = await API.post('/podcast/upload', {projectId, name,videoUrl});
    return data;
}

export const getpodcast = async (projectId) => {
    const { data } = await API.get(`/podcast/project/${projectId}`);
    return data;
}

