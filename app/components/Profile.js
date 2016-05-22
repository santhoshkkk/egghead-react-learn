import React from 'react';
import Repo from './GitHub/Repo';
import UserProfile from './GitHub/UserProfile';
import Notes from './Notes/Notes';
import getGithubInfo from '../utils/helpers';
import Rebase from 're-base';

const base = Rebase.createClass('https://github-note-taker.firebaseio.com');


class Profile extends React.Component{
	constructor(props){
		super(props);
		this.state={
			notes: [],
			bio: {},
			repos: []
		}
	}

	componentDidMount(){
		this.init(this.props.params.username)
	}

	init(username){
		this.ref = base.bindToState(username, {
			context: this,
			asArray: true,
			state: 'notes'
		});

		getGithubInfo(username).then(
			function(data){
				this.setState({
					bio: data.bio,
					repos: data.repos
				})
			}.bind(this)
		)
	}

	componentWillUnMount(){
		base.removeBinding(this.ref)
	}

	handleAddNote(newNote){
		base.post(this.props.params.username, {
			data: this.state.notes.concat([newNote])
		})
	}

	componentWillReceiveProps(nextProps){
		base.removeBinding(this.ref)	
		this.init(nextProps.params.username)
	}


	render(){
		return(
			<div className="row">
				<div className="col-md-4">
				<UserProfile username={this.props.params.username} bio={this.state.bio}/>
				</div>
				<div className="col-md-4">
				<Repo username={this.props.params.username} repos={this.state.repos}/>
				</div>
				<div className="col-md-4">
				<Notes username={this.props.params.username} notes={this.state.notes} addNote={this.handleAddNote.bind(this)}/>
				</div>
			</div>
			)
	}
}

export default Profile


