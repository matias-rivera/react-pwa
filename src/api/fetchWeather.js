import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '22bf00741ec3718924f5334326c23e71';


export const fetchWeather = async(query) =>{
    const {data} = await axios.get(URL,{
        params:{
            q:query,
            units: 'metric',
            APPID: API_KEY,
        }
    });
    return data;
}