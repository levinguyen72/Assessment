import axios from "axios";

export const getWeatherByLocation = (dateTime: string, date: string): Promise<any> => {
  return axios({
    method: 'get',
    url: 'https://api.data.gov.sg/v1/environment/2-hour-weather-forecast',
    params: {
      date_time: dateTime,
      date: date
    }
  });
};
