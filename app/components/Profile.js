var React = require('react');
var Router = require('react-router');
var Repo = require('./GitHub/Repo');
var UserProfile = require('./GitHub/UserProfile');
var Notes = require('./Notes/Notes');
var ReactFireMixin = require('reactfire');
var FireBase = require('firebase');


var Profile = React.createClass({

	mixins: [ReactFireMixin],

	getInitialState: function(){
		return{
			notes: [1,2,3],
			bio: {name:'Sant'},
			repos: ['a','b']
		}
	},

	componentDidMount: function(){
		this.ref = new FireBase('https://github-note-taker.firebaseio.com/');
		var childRef = this.ref.child(this.props.params.username);
		this.bindAsArray(childRef, 'notes');
	},

	componentWillUnMount: function(){
		this.bind('notes');
	},


	render: function(){
		return(
			<div className="row">
				<div className="col-md-4">
				<UserProfile username={this.props.params.username} bio={this.state.bio}/>
				</div>
				<div className="col-md-4">
				<Repo username={this.props.params.username} repos={this.state.repos}/>
				</div>
				<div className="col-md-4">
				<Notes username={this.props.params.username} notes={this.state.notes}/>
				</div>
			</div>
			)
	}
});

module.exports = Profile;



