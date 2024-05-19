import Locations from './Locations'
import Weather from './Weather'
import TrafficCam from './TrafficCam'
import AppIcon from '~/assets/weather-app.png'
import DateTimePicker from './DateTimePicker';
import { Spinner } from '~/components/atoms/Spinner';
import { useCommonStore } from '~/stores';

export default function Home() {
  const { isLoading } = useCommonStore();
  return (
    <>
      {isLoading && <Spinner size="lg" className="text-current fixed top-[50%] left-[50%] z-50" />}
      <div className="bg-white shadow">
        <div className="flex flex-row justify-between mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <img className='w-10 h-10' src={AppIcon} />
          <div className='flex flex-row'>
            <DateTimePicker/>
          </div>
        </div>
      </div>
      <div className='bg-[#f4f3f3]' >
				<div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8' >
					<div className='weather flex lg:flex-row md:flex-col sm:flex-col' >
						<div className='location-list lg:w-2/3 md:w-full sm:w-full' >
							<Locations/>
						</div>
						<div className='weather lg:w-1/3 md:w-full sm:w-full' >
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
