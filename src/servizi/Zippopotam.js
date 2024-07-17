import axios from 'axios';

export const getCoordinate = async (CAPCode) => {
    const res = await axios.get(`https://api.zippopotam.us/it/${CAPCode}`);
    const {places} = res.data;
    const {latitude, longitude} = places[0];
    return {latitude, longitude};
}