import React from 'react';
import maxtempimg from '../Images/maxtemp.png';
import mintempimg from '../Images/mintemp.png';
import humidityimg from '../Images/humidity.png';
import pressureimg from '../Images/prssure.png';
import windimg from '../Images/wind.png';
import sunriseimg from '../Images/sunrise.png';
import sunsetimg from '../Images/sunset.png';

const WeatherCard = ({ location, temperature, description, iconCode, minTemp, maxTemp, pressure, humidity, wind, sunrisetimeprops, sunsetprops}) => {
    
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

    const getsunriseTimestamp = sunrisetimeprops;
    const getsunsetTime = sunsetprops;

    const sunriseDate = new Date(getsunriseTimestamp * 1000);
    const sunsetDate = new Date(getsunsetTime * 1000);


    const hours =  sunriseDate.getHours();
    const sunsetHours =  sunsetDate.getHours();


    const minutes =  sunriseDate.getMinutes();
    const sunsetminutes =  sunsetDate.getMinutes();


    const seconds =  sunriseDate.getSeconds();
    const sunsetseconds =  sunsetDate.getSeconds();


    const formattedTime = `${hours} : ${minutes} : ${seconds}`;
    const sunsetformattedTime = `${sunsetHours} : ${sunsetminutes} : ${sunsetseconds}`;


    return (
        <>
            <div className="flex justify-start">
                <div className="mt-[15px] w-[100%] overflow-hidden text-center text-white">
                    <div className=''>
                        <h2 className="text-3xl font-normal">{location}</h2>
                        <div className="flex flex-row justify-center">
                            <img src={iconUrl} alt={description} className="w-[4rem] md:w-32" />
                            <p className=" text-[3rem] md:text-[5rem]">{(temperature - 273.15).toFixed(0)}°C</p>
                        </div>
                        <p className="text-[1.5rem] capitalize">{description}</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-row justify-around'>

                <div className="w-[40%] px-[5%] py-2 m-9 mt-10 bg-white shadow-2xl --tw-shadow-color: #e2e8f0; rounded-2xl flex flex-wrap justify-evenly h-[100%]">
                    <div className="mt-2 m-[2%]" >
                        <img width="60" src={mintempimg} alt="" className='mx-auto h-[70px]' />
                        <h2 className="text-xl font-semibold text-gray-800">Min Temp</h2>
                        <p className="">{(minTemp - 273.15).toFixed(2)}°C</p>
                    </div>
                    <div className="mt-2 m-[2%]">
                        <img width="60" src={maxtempimg} alt="" className='mx-auto h-[70px]' />
                        <h2 className="text-xl font-semibold text-gray-800">Max Temp</h2>
                        <p className="">{(maxTemp - 273.15).toFixed(2)}°C</p>
                    </div>
                    <div className='mt-2 m-[2%]'>
                        <img width="60" src={pressureimg} alt="" className='mx-auto h-[70px]' />
                        <h2 className="text-xl font-semibold text-gray-800">Pressure</h2>
                        <p className="">{pressure}mb</p>
                    </div>
                    <div className='mt-2 m-[2%]'>
                        <img width="60" src={humidityimg} alt="" className='mx-auto h-[70px]' />
                        <h2 className="text-xl font-semibold text-gray-800">Humidity</h2>
                        <p className="">{humidity}%</p>
                    </div>
                    <div className='mt-2 m-[2%]'>
                        <img width="60" src={windimg} alt="" className='mx-auto h-[70px]' />
                        <h2 className="text-xl font-semibold text-gray-800">Wind</h2>
                        <p className="">{wind}m/s</p>
                    </div>
                    <div className='mt-2 m-[2%]'>
                        <img width="60" src={sunriseimg} alt="" className='mx-auto h-[70px]' />
                        <h2 className="text-xl font-semibold text-gray-800">Sunrise</h2>
                        <p className="">{formattedTime}</p>
                    </div>
                    <div className='mt-2 m-[2%]'>
                        <img width="60" src={sunsetimg} alt="" className='mx-auto h-[70px]' />
                        <h2 className="text-xl font-semibold text-gray-800">Sunset</h2>
                        <p className="">{sunsetformattedTime}</p>
                    </div>
                </div>

               
            </div>

        </>
    );
};

export default WeatherCard;
