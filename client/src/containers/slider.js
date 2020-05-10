import React, { memo } from "react";
import Carousel from "nuka-carousel";
import { useDispatch, useSelector } from "react-redux";
import { actUser } from "../actions/active";
import { setModal } from "../actions/modal";

export const Slider = memo(() => {
  const checkedList = useSelector((state) => state.checkedList.checkedList);
  const colorTheme = useSelector((state) => state.colorTheme.lightTheme);
  const dispatch = useDispatch();

  const handleClick = (person) => {
    dispatch(actUser(person));
    window.innerWidth <= 768 && dispatch(setModal(true));
  };

  const slidesToShow =
    window.innerWidth < 768 ? 2 : window.innerWidth === 768 ? 3 : 5;
  const mobSliderTheme =
    window.innerWidth <= 768 && colorTheme
      ? "slider-light"
      : window.innerWidth <= 768 && !colorTheme
      ? "slider-dark"
      : null;
  const shouldControls = slidesToShow + 2 <= checkedList.length ? false : true;

  return (
    <Carousel
      framePadding="5px 0px"
      slidesToShow={slidesToShow}
      dragging={true}
      cellSpacing={3}
      slideWidth={0.75}
      slideHeight={0.75}
      className={mobSliderTheme}
      withoutControls={shouldControls}
    >
      {checkedList.map((person) => (
        <img
          src={person.general.avatar}
          alt={person.general.firstName}
          key={person.contact.phone}
          onClick={() => handleClick(person)}
          className="slider-img"
        />
      ))}
    </Carousel>
  );
});
