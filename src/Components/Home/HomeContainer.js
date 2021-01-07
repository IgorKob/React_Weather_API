import React, {useState, useEffect, useMemo} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { setGeolocationThunk } from '../../Redux/geolocation_reducer';
import { setWeatherThunk } from '../../Redux/weather_reducer';
import Spinner from '../Spinner/Spinner';
import { GeolocationWeather } from '../GeolocationWeather/GeolocationWeather';
import { setWeatherSearchThunk } from './../../Redux/weather_reducer';

export default function HomeContainer() {

    const [search, setSearch] = useState('');

    const geolocation = useSelector(state => state.geolocation);
    const weather = useSelector(state => state.weather.weather);
    const weatherSearch = useSelector(state => state.weather.weatherSearch);
    const isLoading = useSelector(state => state.errorMess.isLoading)
    const error_mess = useSelector(state => state.errorMess.error);
    const errorSearch = useSelector(state => state.errorMess.errorSearch);

    
    const dispatch = useDispatch();
         
    useEffect(() => {
        debugger
        if (geolocation.city.length === 0) {
            dispatch(setGeolocationThunk());
        }
    }, [])
    
    useEffect(() => {
        dispatch(setWeatherThunk(geolocation.city, geolocation.lat, geolocation.lon));
    }, [geolocation.city])


    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const handleClick = (e) => {
        debugger
        e.preventDefault();
        dispatch(setWeatherSearchThunk(search, geolocation.lat, geolocation.lon));
    }

    // const handleClick = React.useMemo(() => {
    //     dispatch(setWeatherThunk(geolocation.city, geolocation.lat, geolocation.lon))
    //   }, [search]
    // );

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Nocvember', 'December'];
    const date = new Date();
    const dates = `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`;

    return (
        <div>
          
            {isLoading ? <Spinner /> : (<React.Fragment>

                {error_mess && (<h3>{error_mess}</h3>)}
                
                {geolocation.city.length !== 0 && <GeolocationWeather geolocation={geolocation}
                    weather={weather}
                    dates={dates}
                />}

                <br></br>
                
                <input onChange={handleChange} value={search} placeholder='Львів, Lviv, Kyiv, Ivano Frankivsk...' title='You can specify the City name not only in English. In list of more than 200,000 locations.'/>
                <button onClick={handleClick}>Send</button>

                {errorSearch && (<h3>{errorSearch}</h3>)}

                {JSON.stringify(weatherSearch) !== '{}' && (<>



                    <h2>{weatherSearch.city.name}, {weatherSearch.city.country}</h2>
                    {weatherSearch.list.map(el => (<>
                        <div>{el.dt}</div>
                        <div>{el.dt_txt}</div>
                        <div>Імовірність опадів: {el.pop}</div>
                        <div>Частина доби: {el.sys.pod}</div>
                        <div>Швидкість вітру: {el.wind.speed}m/s</div>
                        <div>{el.weather[0].description}</div>
                        <img src={`http://openweathermap.org/img/wn/${el.weather[0].icon}@4x.png`}/>
                        <div>{el.main.temp}°C</div>
                        <div>Atmospheric pressure: {el.main.pressure}hPa</div>
                        <div>Humidity: {el.main.humidity}%</div>
                        <div>Cloudiness: {el.clouds.all}%</div>


                    </>))}

                </>)}
       

            </React.Fragment>)}

            
        </div>
    )
}