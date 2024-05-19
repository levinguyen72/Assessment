import cloudyIcon from '~/assets/cloudy.png'
import partlyCloudIcon from '~/assets/partly-cloudy.png'
import cloudyNight from '~/assets/cloudy-night.png'
import showersIcon from '~/assets/shower.png'
enum weatherType {
  cloudy = 'cloudy',
  partlyCloud = 'partly cloudy',
  cloudyNight = 'partly cloudy (night)',
  showers = 'showers',
  thunderyShower = 'Thundery Showers',
  lightShower = 'Light Showers',
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
  }
}
