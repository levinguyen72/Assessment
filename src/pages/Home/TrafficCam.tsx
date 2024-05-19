import { useEffect } from 'react'
import Skeleton from '~/components/molecules/Skeleton'
import { getTrafficImageData } from '~/services/getTrafficImage';
import { useTrafficCamStore, useDateTimeStore } from '~/stores';
import { nanoid } from 'nanoid';

export default function TrafficCam() {
	const { dateTimeSelected } = useDateTimeStore();
  const { updateTrafficImageData, traficImageData } = useTrafficCamStore();
  const fetchTrafficImage = async () => {
    const response = await getTrafficImageData(dateTimeSelected)
		if(response && response?.status == '200') {
			updateTrafficImageData(response?.data?.items[0]?.cameras)
		}
  }

  useEffect(() => {
    fetchTrafficImage()
  }, [dateTimeSelected])

  return (
    <>
      <h2 className='text-2xl my-5' >Traffic cam</h2>
					<div className="screenshot">
						{
							traficImageData.length ?
							(<div className="list-image flex flex-row flex-wrap">
								{
									traficImageData.map(item => ( 
										<div key={nanoid()} className="traffic-image">
											<img className='w-[300px]' src={item?.image} />
										</div>
									))
								}
							</div> ) :
							<Skeleton/>
						}
					</div>
    </>
  )
}
