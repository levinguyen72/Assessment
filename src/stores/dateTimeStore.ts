import { create } from 'zustand';
import { formatDateTime } from '~/helpers';

interface dateTimeStore {
  dateSelected: any,
  timeSelected: string,
  dateTimeSelected: string,
  updateDateSelected: (date: string) => void,
  updateTimeSelected: (time: string) => void,
}


export const useDateTimeStore = create<dateTimeStore>((set) => ({
  dateSelected: new Date(),
  timeSelected: '00:00',
  dateTimeSelected: '',
  updateDateSelected: (date) => 
    set((state) => ({
      dateSelected: date,
      dateTimeSelected: formatDateTime(date, state.timeSelected)
    })),
  updateTimeSelected: (time) => 
    set((state) => ({
      timeSelected: time,
      dateTimeSelected: formatDateTime(state.dateSelected, time)
    }))
}));