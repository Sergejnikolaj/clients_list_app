import React from 'react';
import '../index.css';

const ActiveContact = (props) => {
    return ( 
		<div className="">
			<div className="active-picture-holder"><img src={props.image} alt="person_pic_full_size" /></div>
			<div className='active-info-holder'>
				<p><b>Name/Lastname: </b>{props.name} / {props.lastName}</p>
				<p><b>Phone number: </b>{props.phoneNumber} </p>
				<p><b>Job company: </b>{props.jobCompany} </p>
				<p><b>Job title: </b>{props.jobTitle}</p>
				<p><b>Email: </b>{props.email}</p>
				<p><b>Street: </b>{props.street}</p>
			</div>
		</div>
    );
}
export default ActiveContact;