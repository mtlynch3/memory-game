import './Card.css'

export default function Card({ card, handleChoice, flipped, disabled }) {
	const handleClick = () => {
		if (!disabled) {
			handleChoice(card);
		}
	}
	return(
		<div className='card'>
			{flipped ? <div className='front'>{card.src}</div>
			:<div className='back' onClick={handleClick}/>
			}	
		</div>
	);
}