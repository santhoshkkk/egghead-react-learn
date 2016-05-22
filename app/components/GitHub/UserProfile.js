import React from 'react';

const UserProfile = ({bio}) => {
	return(
		<div> 
			{bio.avatar_url &&<li className="list-group-item"><img src={bio.avatar_url}></img></li>}
			{bio.name && <li className="list-group-item">Name: {bio.name} </li>}
			{bio.login && <li className="list-group-item">UserName: {bio.login} </li>}
			{bio.email && <li className="list-group-item">Email: {bio.email} </li>}
		</div>
	)
}

UserProfile.propTypes = {
	username: React.PropTypes.string.isRequired,
	bio: React.PropTypes.object.isRequired
}

export default UserProfile