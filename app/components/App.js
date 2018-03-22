var React = require('React');
var Popular = require('./Popular');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Nav = require('./Nav');
var Home = require('./Home');
var Battle = require('./Battle');
var Switch = ReactRouter.Switch;

class App extends React.Component{
	render(){
		return(
			<Router>
				<div className='container'>
					<Nav />
					<Switch>
						<Route exact path='/' component={Home}/>
						<Route exact path='/battle' component={Battle}/>
						<Route path='/popular' component={Popular}/>
						<Route render={function(){
							return <p>Not found</p>
							}
						}/>
					</Switch>
			</div>
			</Router>
		)
	}
}

module.exports = App;