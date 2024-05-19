import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid';
import { getWeatherByLocation } from '~/services/getWeatherbyLocation'
import { useWeatherForecastDateStore, locationData, useDateTimeStore } from '~/stores';
import { formatDateSingapore } from '~/helpers';

export default function Locations() {

  const { updateWeatherForcastData, setActiveLocation, weatherForcastData } = useWeatherForecastDateStore();
  const { dateTimeSelected, dateSelected } = useDateTimeStore();

  const fetchWeatherByLocation = async () => {
    const dateFormat = formatDateSingapore(dateSelected);
    let result = await getWeatherByLocation(dateTimeSelected, dateFormat);
    if(result && result.status == '200') {
      updateWeatherForcastData(result?.data?.items[0]?.forecasts);
    }
  }

  const handleActiveLocation = (location: locationData) => {
    setActiveLocation(location)
  }

  useEffect(() => {
    fetchWeatherByLocation()
  }, [dateTimeSelected, dateSelected])

  return (
    <>
      <h2 className='text-2xl' >Locations</h2>
      <div className="location-list overflow-y-auto h-96 rounded">
        <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg p-3">
          {
            weatherForcastData?.length && weatherForcastData.map(location => (
              <button 
                key={nanoid()} 
                type="button" 
                onClick={() => handleActiveLocation(location)}
                className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium rounded-b-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                {location?.area}
              </button>
            ))
          }
        </div>
      </div>
    </>
  )
}


