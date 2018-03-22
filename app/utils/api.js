var axios = require('axios');

function getProfile (username){
	return axios.get('https://api.github.com/users/' + username)
		.then(function(user){
			return user.data;
		})
}

function getRepos(username){
	return axios.get('https://api.github.com/users/' + username + '/repos&per_page=100')
		.then(function(){

		})
}

function getStarCount(repos){
	repos.data.reduce(function(count, repo){
		return count + repo.stagazers_count; 
	},0)
}

function calculateScore(profile, repos){
	var followers = profile.followers;
	var totalStarCount = getStarCount(repos);

	return (followers * 3) + totalStarCount;
}

function handleError(error){
	console.warn(error);
	return null;
}

function getUserData(player){
	return axios.all([
			getProfile(player),
			getRepos(player)
		]).then(function(data){
			var profile = data[0];
			var repos = data[1];

			return {
				profile: profile,
				score: calculateScore(profile, repos)
			}
		})
}

function sortPlayers(players){
	return players.sort(function(a,b){
		return b.score - a.score;
	});
}

module.exports = {
	fetchPopularRepos: function(language){
		var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:1>1+language:'+ language + '&sort=stars&order=desc&type=Repositories');

		return axios.get(encodedURI)
			.then(function(response){
				return response.data.items;	
			})
	},
	battle: function(players){
		axios.all(players.map(getUserData))
	}
}