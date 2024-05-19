import cloudyIcon from '~/assets/cloudy.png'
import partlyCloudIcon from '~/assets/partly-cloudy.png'
import cloudyNight from '~/assets/cloudy-night.png'
import showersIcon from '~/assets/shower.png'
import SunIcon from '~/assets/sun.png'
import LightShower from '~/assets/light-showers.png'
import ThunderyShower from '~/assets/thunder.png'

enum weatherType {
  // lowercase weather type
  cloudy = 'cloudy',
  partlyCloud = 'partly cloudy',
  cloudyNight = 'partly cloudy (night)',
  showers = 'showers',
  thunderyShower = 'thundery showers',
  lightShower = 'light showers',
}

export const generateWeatherIcon = (weather: string) => {
  let regex = /\([^)]*\)/g;
  // Replace the text inside parentheses
  let standardlizeWeather;
  // night icon
  if(!weather?.toLocaleLowerCase().includes('night')) {
    standardlizeWeather = weather?.replace(regex, '')?.trim()?.toLowerCase();
  } else standardlizeWeather = weather?.toLowerCase()

  switch(standardlizeWeather) {
    case weatherType.cloudy: 
      return cloudyIcon;
    case weatherType.partlyCloud:
      return partlyCloudIcon;
    case weatherType.cloudyNight:
      return cloudyNight;
    case weatherType.showers:
      return showersIcon;
    case weatherType.lightShower:
      return LightShower;
    case weatherType.thunderyShower: 
      return ThunderyShower;
    default: 
      return SunIcon;
  }
}
