import React from 'react'
import { generateWeatherIcon } from '~/helpers';
import { useWeatherForecastDateStore } from '~/stores'

export default function Weather() {

  const { activeLocation } = useWeatherForecastDateStore();
  return (
    <div className='h-full'>
      <h2 className="text-2xl">Weather</h2>
      <div className="location-list overflow-y-auto rounded lg:h-96 md:h-max w-100 flex flex-col justify-center">
        <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg p-3 h-full">
          <div className='' >{activeLocation?.area} - {activeLocation?.forecast}</div>
          <img className='w-[200px] ' src={generateWeatherIcon(activeLocation?.forecast)} />
        </div>
      </div>
    </div>
  )
}
