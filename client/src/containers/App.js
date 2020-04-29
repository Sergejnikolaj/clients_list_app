import React, { useEffect } from "react";
import axios from "axios";
import { getData } from "../actions/getData";
import { useDispatch, useSelector } from "react-redux";
import { isMobile } from "react-device-detect";
import _ from "lodash";
import Contact from "./contact";
import Search from "./search";
import Slider from "./slider";
import ModalComponent from "./modal";
import ActiveContact from "../components/active_contact";
import "../index.css";

export default function App() {
  const actUser = useSelector((state) => state.active.activeUser);
  const searchVal = useSelector((state) => state.search.searchUsers);
  const users = useSelector((state) => state.users.users);
  const checkedList = useSelector((state) => state.checkedList.checkedList);
  const dispatch = useDispatch();

  const filteredList = users.filter(
    (user) =>
      user.general.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
      user.general.lastName.toLowerCase().includes(searchVal.toLowerCase())
  );
  const mobSmallScreen = isMobile && window.innerWidth <= 768;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios
        .get("http://127.0.0.1:3040")
        .then((response) => {
          dispatch(getData(response.data));
        })
        .catch(function (error) {
          console.log("error is", error);
        });
    };
    fetchData();
  }, []);

  return (
    <div className="">
      <Search />
      <div
        className={`list-holder ${
          mobSmallScreen && checkedList.length > 0 && "with-slider"
        }`}
      >
        <ul className="contacts-list">
          {searchVal.length === 0 && users.length === 0 ? (
            <p>...loading</p>
          ) : searchVal.length > 0 && filteredList.length === 0 ? (
            <p>no person found</p>
          ) : (
            filteredList.map(function (el) {
              return <Contact personsData={el} key={el.contact.phone} />;
            })
          )}
        </ul>
      </div>
      {_.isEmpty(actUser) ? (
        <p className="click-info">
          {!mobSmallScreen && "click on person to get more info"}
        </p>
      ) : (
        <div className="active-contact-holder">
          {!mobSmallScreen ? (
            <ActiveContact {...actUser} />
          ) : (
            <ModalComponent {...actUser} />
          )}
        </div>
      )}
      {checkedList.length > 0 && <Slider />}
    </div>
  );
}
