import React from 'react';
import Router from 'react-router';

class SearchGithub extends React.Component{
	getRef(ref){
		this.userNameRef=ref;
	}

	handleSubmit(){
		const username = this.userNameRef.value;
		this.userNameRef.value='';
		this.props.history.pushState(null, "/profile/" + username);
	}

	render(){
		return(
			<div className="col-sm-12" >
				<form onSubmit={this.handleSubmit}/>
				<div className="form-group col-sm-7">
					<input type="text" ref={this.getRef.bind(this)} className="form-control"/>

				</div>
				<div className="form-group col-sm-5">
					<button type="submit" className="btn btn-block btn-primary" onClick={this.handleSubmit.bind(this)}> Search Githut </button>
				</div>
			</div>
		)
	}
}

SearchGithub.PropTypes = {
	history : React.PropTypes.object.isRequired
}

export default SearchGithub;