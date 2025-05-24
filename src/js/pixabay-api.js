import axios from "axios";

const apiKEY = '50347023-c170e0a84468278d26beb99ca';
const baseURL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
    const params = {
        key: apiKEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    };

    return axios.get(baseURL, { params })
        .then(res => res.data.hits)
        .catch(error => {
            console.log('error');
            return [];
        });
}
    
