var React = require('react');
var Router = require('react-router');
var Repo = require('./GitHub/Repo');
var UserProfile = require('./GitHub/UserProfile');
var Notes = require('./Notes/Notes');


var Profile = React.createClass({

	getInitialState: function(){
		return{
			notes: [1,2,3],
			bio: {name:'Sant'},
			repos: ['a','b']
		}
	},


	render: function(){
		console.log(this.props) 
		return(
			<div className="row">
				<div className="col-md-4">
				<UserProfile username={this.props.params.username} bio={this.state.bio}/>
				</div>
				<div className="col-md-4">
				<Repo repos={this.state.repos}/>
				</div>
				<div className="col-md-4">
				<Notes notes={this.state.notes}/>
				</div>
			</div>
			)
	}
});

module.exports = Profile;



