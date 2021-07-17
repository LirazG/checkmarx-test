import { URL } from '../config/generalConfigs';

export const apiGet = async (search = '') => {
    const response = await fetch(URL + search);
    const data = await response.json();
    return data;
}