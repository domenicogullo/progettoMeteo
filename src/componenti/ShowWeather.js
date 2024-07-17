import React from 'react';
import {Card, CardContent, Typography} from '@mui/material';

const ShowWeather = ({datiMeteo}) => {
    
    const {
        name,
        main: {temp,feels_like,humidity},
        wind : {speed},
        weather,
        sys : {sunrise,sunset},
    } = datiMeteo;

    const convertTimestamp = (timestamp) => {
        const data = new Date(timestamp * 1000);
        return data.toLocaleTimeString('it-IT',{ hour: '2-digit', minute: '2-digit'}); 
    }

    const sunriseTime = convertTimestamp(sunrise);
    const sunsetTime = convertTimestamp(sunset);
   

    return (
        
        <Card className='Card'>
            <CardContent>
                <Typography variant="h4" className='Typography'>{name}</Typography>
                <hr/>
                <Typography variant="body1" className='Typography'>
                    <strong>Temperature:</strong> {temp} °C, <strong>Perceived:</strong> {feels_like} °C
                    <br></br>
                    <strong>Wind (speed):</strong> {speed} m/s, <strong>Humidity (%):</strong> {humidity}%
                    <br></br>
                    <strong>Sunrise time:</strong> {sunriseTime}, <strong>Sunset time:</strong> {sunsetTime}
                </Typography>
                
                <Typography variant="body1" className='description'>
                    <strong>General weather description:</strong> {weather[0].description}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default ShowWeather;