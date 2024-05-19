import { create } from 'zustand';

export type locationData = {
  area: string,
  forecast: string,
}

interface WeatherForecastStore {
  weatherForcastData: any[],
  activeLocation: locationData,
  updateWeatherForecastData: (weatherForecastData: any) => void,
  setActiveLocation: (location: locationData) => void,
}


export const useWeatherForecastDateStore = create<WeatherForecastStore>((set) => ({
  weatherForcastData: [],
  activeLocation: {},
  updateWeatherForcastData: (weatherForecastData) => 
    set(() => ({
      weatherForcastData: weatherForecastData,
      activeLocation: weatherForecastData[0]
    })),
  setActiveLocation: (location) => 
    set(() => ({
      activeLocation: location
    }))
}));
