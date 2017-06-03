import React from 'react';
var {connect} = require('react-redux');

export var Nav = React.createClass({
	onLogout(e) {
	    e.preventDefault();
	    this.props.handle();
   },
	render: function(){
		return (
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
						<li className="user-name">Hello {this.props.auth.uname}</li>
					</ul>
				</div>
				<div className="top-bar-right">
					<div className="page-action">
			          <a href="#" onClick={this.onLogout}>Logout</a>
			        </div>
				</div>
			</div>
		)
	}
});

export default connect(
  (state) => {
    return state;
  }
)(Nav);