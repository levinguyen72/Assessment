import axios from "axios";
import { coreAxios } from "./axiosClient";

export interface trafficImageList {
  timestamp: string,
  cameras: Array<trafficImage>,
  api_info: {
    status: string
  }
}

export interface trafficImage {
  timestamp: string,
  image: string,
  location: {
    latitude: string,
    longitude: string
  },
  camera_id: string,
  image_metadata: {
    height: number,
    width: number,
    md5: string
  }
}


export const getTrafficImageData = (dateTime: string): Promise<trafficImageList> => {
  return axios({
    method: 'get',
    url: 'https://api.data.gov.sg/v1/transport/traffic-images',
    
  });
};