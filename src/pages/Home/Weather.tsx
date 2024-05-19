import React from 'react'
import { generateWeatherIcon } from '~/helpers';
import { useWeatherForecastDateStore } from '~/stores'

export default function Weather() {

  const { activeLocation } = useWeatherForecastDateStore();
  return (
    <div className='h-full'>
      <h2 className="text-2xl">Weather</h2>
      <div className="location-list overflow-y-auto rounded h-96 w-100">
        <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg p-3 h-full">
          {activeLocation?.area} - {activeLocation?.forecast}
          <img src={generateWeatherIcon(activeLocation?.forecast)} />
        </div>
      </div>
    </div>
  )
}
