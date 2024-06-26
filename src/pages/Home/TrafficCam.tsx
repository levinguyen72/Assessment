import { useEffect } from 'react'
import Skeleton from '~/components/molecules/Skeleton'
import { getTrafficImageData } from '~/services/getTrafficImage';
import { useTrafficCamStore, useDateTimeStore, useCommonStore } from '~/stores';
import { nanoid } from 'nanoid';

export default function TrafficCam() {
	const { dateTimeSelected } = useDateTimeStore();
  const { updateTrafficImageData, traficImageData } = useTrafficCamStore();
	const { openLoading } = useCommonStore();

  const fetchTrafficImage = async () => {
		openLoading(true)
    const response = await getTrafficImageData(dateTimeSelected);
		if(response && response?.status == '200') {
			updateTrafficImageData(response?.data?.items[0]?.cameras)
			openLoading(false)
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
							(<div className="list-image flex flex-row flex-wrap h-[500px] overflow-y-auto">
								{
									traficImageData.map(item => ( 
										<div key={nanoid()} className="traffic-image">
											<img className='lg:w-[300px] md:w-[250px] sm:w-[150px]' src={item?.image} />
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
