import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = import.meta.env.VITE_API_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;


    let fetchWeather = async () => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let data = await response.json();
        console.log(data);
        let result = {
            city: data.name,
            temp: data.main.temp,
            tempMin: data.main.temp_min,
            tempMax: data.main.temp_max,
            weather: data.weather[0].description,
            humidity: data.main.humidity,
            feelsLike: data.main.feels_like,
            icon: data.weather[0].icon,
        }
        console.log(result);
        return result;
        } catch(err){
            throw err;
        }
        
    }

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        try{
            event.preventDefault();  // Prevents the page from reloading on form submission
        // alert(`You have searched for ${city}`);
        setCity("");
        let newInfo = await fetchWeather();
        updateInfo(newInfo);
        } catch(err){
            setError(true);
        }
            
    }

    return (    
        <div>
            <form action="" onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange} required/><br />
                <Button variant="contained" type='submit' style={{marginTop: "10px"}}>
                Search
                </Button>
                {error && <p style={{color:"red"}}>NO such place exist in our API</p>}
            </form>
        </div>
    );
}