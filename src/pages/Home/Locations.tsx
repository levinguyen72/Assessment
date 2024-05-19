import { useEffect } from 'react'
import { nanoid } from 'nanoid';
import { getWeatherByLocation } from '~/services/getWeatherbyLocation'
import { useWeatherForecastDateStore, locationData, useDateTimeStore, useCommonStore } from '~/stores';
import { formatDateSingapore } from '~/helpers';

export default function Locations() {

  const { updateWeatherForcastData, setActiveLocation, weatherForcastData, activeLocation } = useWeatherForecastDateStore();
  const { dateTimeSelected, dateSelected } = useDateTimeStore();
  const { openLoading } = useCommonStore();

  const fetchWeatherByLocation = async () => {
    const dateFormat = formatDateSingapore(dateSelected);
    openLoading(true)
    let result = await getWeatherByLocation(dateTimeSelected, dateFormat);
    if(result && result.status == '200') {
      updateWeatherForcastData(result?.data?.items[0]?.forecasts);
      openLoading(false)
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
      <div className="overflow-y-auto lg:h-96 md:h-[300px] sm:h-[200px] rounded pt-3">
        <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg p-3">
          {
            weatherForcastData?.length && weatherForcastData.map(location => (
              <button 
                key={nanoid()} 
                type="button" 
                onClick={() => handleActiveLocation(location)}
                className={`relative inline-flex items-center w-full px-4 py-2 text-sm font-medium hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 ${location?.area === activeLocation?.area ? `text-blue-700 bg-gray-100` : ''}`}>
                {location?.area}
              </button>
            ))
          }
        </div>
      </div>
    </>
  )
}


