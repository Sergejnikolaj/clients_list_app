import React, { Component } from 'react';
import '../index.css';
import { connect } from 'react-redux';
import { actUser } from '../actions/active';
import {bindActionCreators} from 'redux';

class Contact extends Component {
	handleClick = () => {
		this.props.actUser(this.props);
	}
	render() {
		return (
			<li className='contact' onClick={this.handleClick}>
				<span className="contact-image"><img  src={this.props.image} alt="person_pic_small_size" /></span>
				<span className='contact-info'>
					<p><b> {this.props.name} {this.props.lastName}</b></p>
					<p> {this.props.phoneNumber} </p>
				</span>
			</li>
		);
	}
}
function mapStateToProps (store) {
  return {
    actUser: store.active.activeUser
  }
}
function matchDispatchToProps(dispatch){
	return bindActionCreators({actUser: actUser}, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(Contact);