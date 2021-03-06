
var PropTypes = require('prop-types');

function PlayerPreview(props){
	return(
		<div>
			<div className='column'>
				<img
					className='avatar'
					src={props.avatar}
					alt={'avatar for' + props.avatar} 
				/>
				<h2 className='username'>@{props.username}</h2>
			</div>
			{props.children}
		</div>
	)
}

PlayerPreview.propTypes = {
	avatar: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired,
	onReset: PropTypes.func.isRequired
}

module.exports = PlayerPreview;