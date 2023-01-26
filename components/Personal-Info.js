import { MdPhoneIphone, MdEmail, MdLocationOn } from 'react-icons/md';

export default function PersonalInfo({type}) {
	return (
		<div className='mx-5 mb-1 sm:mb-0 flex items-center'>
			{type === 'Phone' ? <MdPhoneIphone />
				: type === 'Email' ? <MdEmail />
				: <MdLocationOn />
			}
			<p className='ml-1'>
				{type === 'Phone' ? '(437) 97101353'
				: type === 'Email' ? 'ann1212123@gmail.com'
				: 'Toronto, ON'
				}
			</p>
		</div>
	)
}