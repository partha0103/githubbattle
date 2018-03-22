var React = require('React');
var NavLink = require('react-router-dom').NavLink;

function Nav(){
	return(
		<ul className='nav'>
			<NavLink exact activeClassName='active' to='/'>Home</NavLink>
			<NavLink  activeClassName='active' to='/battle'>Battle</NavLink>
			<NavLink  activeClassName='active' to='/popular'>Popular</NavLink>
		</ul>
	)
}

module.exports = Nav;