import Picture1 from './assets/1.png'
import Picture2 from './assets/2.png'
import Picture3 from './assets/3.png'
import Picture4 from './assets/4.png'
import Picture5 from './assets/5.png'
import { Card } from './components'
import './components/styles/App.css'

const cards1 = [
	{
		imageURL: Picture1,
		data: 'Sep 26, 2021',
		title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
		buttonText: 'Read Full Article',
		size: 'large',
		onClick: () => alert('Кнопка работает!!!'),
	},
]
const cards2 = [
	{
		imageURL: Picture2,
		data: 'Sep 26, 2021',
		title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
		buttonText: 'Read Full Article',
		size: 'small',
		onClick: () => alert('Кнопка работает!!!'),
	},
]
const cards3 = [
	{
		imageURL: Picture3,
		data: 'Sep 26, 2021',
		title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
		buttonText: 'Read Full Article',
		size: 'small',
		onClick: () => alert('Кнопка работает!!!'),
	},
]
const cards4 = [
	{
		imageURL: Picture4,
		data: 'Sep 26, 2021',
		title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
		buttonText: 'Read Full Article',
		size: 'small',
		onClick: () => alert('Кнопка работает!!!'),
	},
]
const cards5 = [
	{
		imageURL: Picture5,
		data: 'Sep 26, 2021',
		title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
		buttonText: 'Read Full Article',
		size: 'small',
		onClick: () => alert('Кнопка работает!!!'),
	},
]
function App() {
	return (
		<div className='app'>
			<div className='app__col-4'>
				<div className='app__item-4'>
					{cards1.map(card => {
						return <Card {...card} />
					})}
				</div>
			</div>

			<div className='app__col-8'>
				<div className='app__col-6'>
					<div className='app__item-6'>
						{cards2.map(card => {
							return <Card {...card} />
						})}
					</div>
				</div>
				<div className='app__col-6'>
					<div className='app__item-6'>
						{cards3.map(card => {
							return <Card {...card} />
						})}
					</div>
				</div>
				<div className='app__col-6'>
					<div className='app__item-6'>
						{cards4.map(card => {
							return <Card {...card} />
						})}
					</div>
				</div>
				<div className='app__col-6'>
					<div className='app__item-6'>
						{cards5.map(card => {
							return <Card {...card} />
						})}
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
