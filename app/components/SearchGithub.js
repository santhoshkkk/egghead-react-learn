var React = require('react');
var Router = require('react-router');


var SearchGithub = React.createClass({

	mixins: [Router.History],

	getRef: function(ref){
		this.userNameRef=ref;
	},

	handleSubmit: function(){
		var username = this.userNameRef.value;
		this.userNameRef.value='';
		console.log(username);
		this.history.pushState(null, "profile/" + username);
	},

	render: function(){
		return(
			<div className="col-sm-12" >
				<form onSubmit={this.handleSubmit}/>
				<div className="form-group col-sm-7">
					<input type="text" ref={this.getRef} className="form-control"/>

				</div>
				<div className="form-group col-sm-5">
					<button type="submit" className="btn btn-block btn-primary" onClick={this.handleSubmit}> Search Githut </button>
				</div>
			</div>
		)
	}

});

module.exports = SearchGithub;