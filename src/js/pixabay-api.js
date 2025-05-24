import axios from "axios";

const apiKEY = '50347023-c170e0a84468278d26beb99ca';
const baseURL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, page = 1) {
    const params = {
        key: apiKEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page, 
        per_page: 15
    };

    try {
        const res = await axios.get(baseURL, { params })
        return res.data.hits;
    }
        catch(error) {
            console.log('error');
            return [];
        };
}
    
