import React, { Component } from 'react';
import '../index.css';
import { connect } from 'react-redux';

class Contact extends Component {
	handleClick = () => {
		this.props.dispatch({
			type: 'USER_ACTIVE',
			payload: this.props
		});
		console.log("contacts props", this.props);
	}
	render() {
		return (
			<li className='contact' onClick={this.handleClick}>
				<a className="contact-image"><img  src={this.props.image} alt="person_pic_small_size" /></a>
				<span className='contact-info'>
					<p><b> {this.props.name} {this.props.lastName}</b></p>
					<p> {this.props.phoneNumber} </p>
				</span>
			</li>
		);
	}
}
function mapStateToProps (store) {
	/*console.log("store",store);*/
  return {
    actUser: store.activeUser
  }
}
export default connect(mapStateToProps)(Contact);