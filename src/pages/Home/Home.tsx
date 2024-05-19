import { useEffect, useState } from 'react'
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import {
  Input,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import Locations from './Locations'
import Weather from './Weather'
import TrafficCam from './TrafficCam'
import TimePicker from '~/components/atoms/TimePicker'
import AppIcon from '~/assets/weather-app.png'
import { useDateTimeStore } from '~/stores';

export default function Home() {
  const [date, setDate] = useState<Date>(new Date());
	const { dateTimeSelected, dateSelected ,timeSelected, updateDateSelected, updateTimeSelected } = useDateTimeStore()

	const onChangeTime = (even: any) => {
		const timePicked = even?.target?.value;
		if(timePicked) {
			updateTimeSelected(timePicked)
		}
	}

  useEffect(() => {
    updateDateSelected(date)
  }, [date])
	console.log('updateDateSelected', dateSelected, timeSelected)
	console.log('updateDatetineSelected', dateTimeSelected)

  return (
    <>
      <div className="bg-white shadow">
        <div className="flex flex-row justify-between mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <img className='w-10 h-10' src={AppIcon} />
          <div className='flex flex-row'>
					<Popover placement="bottom">
        <PopoverHandler>
          <Input
            label="Select a Date"
            onChange={() => null}
            value={date ? format(date, "PPP") : ""}
          />
					
        </PopoverHandler>
        <PopoverContent>
          <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
            showOutsideDays
            className="border-0"
            classNames={{
              caption: "flex justify-center py-2 mb-4 relative items-center",
              caption_label: "text-sm font-medium text-gray-900",
              nav: "flex items-center",
              nav_button:
                "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
              nav_button_previous: "absolute left-1.5",
              nav_button_next: "absolute right-1.5",
              table: "w-full border-collapse",
              head_row: "flex font-medium text-gray-900",
              head_cell: "m-0.5 w-9 font-normal text-sm",
              row: "flex w-full mt-2",
              cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
              day: "h-9 w-9 p-0 font-normal",
              day_range_end: "day-range-end",
              day_selected:
                "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
              day_today: "rounded-md bg-gray-200 text-gray-900",
              day_outside:
                "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
              day_disabled: "text-gray-500 opacity-50",
              day_hidden: "invisible",
            }}
            components={{
              IconLeft: ({ ...props }) => (
                <span>{'<'}</span>
              ),
              IconRight: ({ ...props }) => (
                <span>{'>'}</span>
              ),
            }}
          />
        </PopoverContent>
      </Popover>
					
							<div className="ml-3">
								<TimePicker handleChangeTime={onChangeTime}/>
							</div>
          </div>
        </div>
      </div>
      <div className='bg-[#f4f3f3]' >
				<div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8' >
					<div className='weather flex lg:flex-row md:flex-col sm:flex-col' >
						<div className='location-list w-2/3' >
							<Locations/>
						</div>
						<div className='weather w-1/3' >
							<Weather/>
						</div>
					</div>	
					<div>
						<TrafficCam/>
					</div>
					
				</div>
      </div>
    </>
  )
}
