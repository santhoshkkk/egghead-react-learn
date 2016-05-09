var React = require('react');

var UserProfile = React.createClass({
	propTypes: {
		username: React.PropTypes.string.isRequired,
		bio: React.PropTypes.object.isRequired
	},
	
	render: function(){
		console.log('UserProfile: ' , this.props.bio)
		return(
			<div> 
			<p> USER PROFILE</p>
			<p> User Name: {this.props.username}</p>
			</div>
			)
	}
});

module.exports = UserProfile;