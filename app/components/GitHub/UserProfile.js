import React from 'react';


class UserProfile extends React.Component{
	render(){
		return(
			<div> 
				{this.props.bio.avatar_url &&<li className="list-group-item"><img src={this.props.bio.avatar_url}></img></li>}
				{this.props.bio.name && <li className="list-group-item">Name: {this.props.bio.name} </li>}
				{this.props.bio.login && <li className="list-group-item">UserName: {this.props.bio.login} </li>}
				{this.props.bio.email && <li className="list-group-item">Email: {this.props.bio.email} </li>}
			</div>
		)
	}
}

UserProfile.propTypes = {
	username: React.PropTypes.string.isRequired,
	bio: React.PropTypes.object.isRequired
}

export default UserProfile