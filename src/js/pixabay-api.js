export const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '41679082-b67c28713339d89ec156191f3';


export const options = {
    params: {
        key: API_KEY,
        q: '',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page:1,
        per_page: 40,
    }
};