var React = require('react');
var Router = require('react-router');
var Repo = require('./GitHub/Repo');
var UserProfile = require('./GitHub/UserProfile');
var Notes = require('./Notes/Notes');
var ReactFireMixin = require('reactfire');
var FireBase = require('firebase');
var helpers = require('../utils/helpers');

var Profile = React.createClass({

	mixins: [ReactFireMixin],

	getInitialState: function(){
		return{
			notes: [1,2,3],
			bio: {},
			repos: []
		}
	},

	componentDidMount: function(){
		this.init(this.props.params.username)
	},

	init: function(username){
		this.ref = new FireBase('https://github-note-taker.firebaseio.com/');
		var childRef = this.ref.child(username);
		this.bindAsArray(childRef, 'notes');

		helpers.getGithubInfo(username).then(
			function(data){
				this.setState({
					bio: data.bio,
					repos: data.repos
				})
			}.bind(this))
	},

	componentWillUnMount: function(){
		this.bind('notes');
	},

	handleAddNote: function(newNote){
		this.ref.child(this.props.params.username).child(this.state.notes.length).set(newNote)
	},

	componentWillReceiveProps: function(nextProps){
		this.unbind('notes');
		this.init(nextProps.params.username)
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
				<Notes username={this.props.params.username} notes={this.state.notes} addNote={this.handleAddNote}/>
				</div>
			</div>
			)
	}
});

module.exports = Profile;



