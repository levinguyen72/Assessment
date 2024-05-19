import { create } from 'zustand';
import { formatDateTime } from '~/helpers';

interface commonStore {
  isLoading: boolean,
  openLoading: (loading: boolean) => void,
}


export const useCommonStore = create<commonStore>((set) => ({
  isLoading: false,
  openLoading: (loading) => 
    set(() => ({
      isLoading: loading,
    })),
}));