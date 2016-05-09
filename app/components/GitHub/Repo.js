var React = require('react');

var Repo = React.createClass({
	propTypes: {
		username:React.PropTypes.string.isRequired,
		repos:React.PropTypes.array.isRequired
	},

	render: function(){
		console.log('REPOS:' , this.props.repos)
		return(
		<div>
		<p>REPOS</p>

		</div>
		)
	}

});

module.exports = Repo;