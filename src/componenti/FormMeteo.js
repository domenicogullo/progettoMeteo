import React, {useState} from 'react';
import {TextField, Button} from "@mui/material";
import {getCoordinate} from "../servizi/Zippopotam";
import {getWeather} from "../servizi/ServizioMeteo";

const FormMeteo = ({setDatiMeteo}) => {
    
    const [CAPCode, setCAPCode] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const {latitude, longitude} = await getCoordinate(CAPCode);
            const meteo = await getWeather(latitude, longitude);
            setDatiMeteo(meteo);
        }
        catch(error){
            console.error("Errore nell'ottenimento dei dati", error);
            setDatiMeteo(null);
        }
    }

    const handleChange = (e) => {
        setCAPCode(e.target.value);
    }

    return (

        <form onSubmit={handleSubmit}>
            <TextField
               label="CAP"
               color="warning"
               value={CAPCode}
               onChange={handleChange}
               placeholder="Insert CAP"
               required margin="normal" fullWidth inputProps={{maxLength: 5, minLength: 5}}/>

               <Button type="submit" variant="contained" color="warning" fullWidth>Show Weather</Button>
        </form>

    );
};

export default FormMeteo;