import React, {useState} from 'react';
import FormMeteo from './componenti/FormMeteo';
import ShowWeather from "./componenti/ShowWeather";
import {Container, Typography} from '@mui/material';
import './stile.css'

function App() {
    const [datiMeteo,setDatiMeteo] = useState(null);

   return (

    <Container className='Container'>
        <Typography className='title' variant="h4" gutterBottom>Weather App</Typography>
        <FormMeteo setDatiMeteo = {setDatiMeteo}/>
        {datiMeteo && <ShowWeather datiMeteo={datiMeteo}/>}

        <div className='img-container'>
        <img src='/weatherPhoto.jpg' alt='WeatherPhoto'/>
        </div>
        
    </Container>

  );
}

export default App;
