import axios from 'axios';

const API_Key = `30e950345c6399da7a91cbe16eeed908`;

export const getWeather = async (lat, lon) => {
    try{
        const res = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
            params: {
                lat: lat,
                lon: lon,
                appid: API_Key,
                units: 'metric'
            }
        });
        return res.data;
    }
    catch(error){
        console.error('Errore visualizzazione meteo:', error);
        throw error;
    }
}