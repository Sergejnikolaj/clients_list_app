import React from 'react';
import Carousel from 'nuka-carousel';
import { useDispatch, useSelector } from "react-redux";
import { actUser } from "../actions/active";
import { setModal } from "../actions/modal";

export default function Slider(props) {
	const checkedList = useSelector((state) => state.checkedList.checkedList);
	const dispatch = useDispatch();

	  const handleClick = (person) => {
		dispatch(actUser(person));
		dispatch(setModal(true));
	  };
	 const minHeight = window.innerWidth === 768 ? '190px' : window.innerWidth < 768 ? '135px' : '225px';
	 
    return (
      <Carousel
		framePadding='5px 0px'
		slidesToShow={window.innerWidth < 768 ? 2 : 3}
		dragging={true}
		cellSpacing={3}
		slideWidth={0.75}
		slideHeight={0.75}
	  >
      
	  {checkedList.map(person => (
            <img
              src={person.general.avatar}
              alt={person.general.firstName}
              key={person.contact.phone}
			   onClick={() => handleClick(person)}
               style={{minHeight: `${minHeight}`}}
            />
          ))}
        
      </Carousel>
    );
}