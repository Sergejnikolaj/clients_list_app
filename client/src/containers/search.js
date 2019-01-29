import React, { Component } from 'react';
import '../index.css';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';

class Search extends Component {
	handleSearch = (event) => {
		let searchQuery = event.target.value.toLowerCase();
		let searchUsers = this.props.users.filter(function(el) {
			let srchInName = el.general.firstName.toLowerCase();
			let srchInLastName = el.general.lastName.toLowerCase();
			return srchInName.indexOf(searchQuery) !== -1 || srchInLastName.indexOf(searchQuery) !== -1
		});
						
		this.props.dispatch({
			type: 'USER_SEARCH',
			payload: searchUsers
		});
		console.log(event.target.value);
	}
	render() {
		return (
			<div className="search-wrapper">
				<div className="search-holder">
					<TextField
					 onChange={this.handleSearch}
					 type="search"
					 label="Search field"
					 className="textfield"
					/>
				</div>
			</div>
		);
	}
}
function mapStateToProps (store) {
  return {
    users: store.users
  }
}
export default connect(mapStateToProps)(Search);