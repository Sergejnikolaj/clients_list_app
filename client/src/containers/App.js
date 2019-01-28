import React, { Component } from 'react';
import Contact from './contact';
import ActiveContact from '../components/active_contact';
import '../index.css';
import { connect } from 'react-redux';
import axios from 'axios';

class App extends Component {
	componentDidMount() {
		axios.get('http://127.0.0.1:3020').then(response => {
			/*console.log(response.data);*/
			this.props.dispatch({
				type: 'USER_LIST_SUCCESS',
				payload: response.data
			});
		})
		.catch(function (error) {
			console.log("error is", error);
		});
	}
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
		let actUser = this.props.actUser;
		let srchUsers = this.props.srchUsers;
		let users = this.props.users;
		console.log("props/length",this.props.users.length);
		console.log("length", actUser.length);
		/*console.log("гsers",this.props.srchUsers);*/
		return (
			<div className="">
				<div className="list-holder">
					<div className="search-holder">
						<input type='text' className="" onChange={this.handleSearch} />
					</div>
					<ul className='contacts-list'>
					 {	srchUsers.length === 0 && users.length === 0 ? 
						<p>...loading</p> : srchUsers.length === 0 && users.length !== 0 ?
						<p>no person found</p> :
						srchUsers.map(function(el) {
							return <Contact
									key={el.contact.phone}
									name={el.general.firstName}
									lastName={el.general.lastName}
									phoneNumber={el.contact.phone} 
									image={el.general.avatar}
									jobCompany={el.job.company}
									jobTitle={el.job.title}
									email={el.contact.email}
									street={el.address.street}	
									/>;
							})
					 }
					</ul>
				</div>
				 { actUser.length === 0? <p className="click-info">click on person to show more info</p>:
					<div className = "active-contact-holder">
						 <ActiveContact 
							name={actUser.name}
							lastName={actUser.lastName}
							phoneNumber={actUser.phoneNumber} 
							image={actUser.image}
							jobCompany={actUser.jobCompany}
							jobTitle={actUser.jobTitle}
							email={actUser.email}
							street={actUser.street}	
						 />
					</div>
				 }
			</div>
		);
	}
}
function mapStateToProps (store) {
	/*console.log("store",store);*/
  return {
    users: store.users,
    srchUsers: store.searchUsers,
    actUser: store.activeUser
  }
}
export default connect(mapStateToProps)(App);