import { create } from 'zustand';

export type trafficImages = {
  timestamp: string,
  cameras: trafficImage[],
  api_info: {
    status: string
  }
}

export type trafficImage = {
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

interface TrafficCamStore {
  traficImageData: trafficImage[],
  updateTrafficImageData: (trafficImageList : trafficImage[]) => void,
}


export const useTrafficCamStore = create<TrafficCamStore>((set) => ({
  traficImageData: [],
  updateTrafficImageData: (trafficImage) => 
    set(() => ({
      traficImageData: trafficImage
    }))
}));
