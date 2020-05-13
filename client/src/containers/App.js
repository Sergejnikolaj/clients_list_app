import React, { useEffect } from "react";
import { getUsers } from "../actions/getData";
import { useDispatch, useSelector } from "react-redux";
import { isMobile } from "react-device-detect";
import LinearProgress from "@material-ui/core/LinearProgress";
import _ from "lodash";
import Contact from "./contact";
import { Header } from "./header";
import { Slider } from "./slider";
import HOCmodal from "./HOCmodal";
import { TabsComponent } from "../components/tabs";
import { ActiveContact } from "../components/active_contact";
import "../index.css";

export default function App() {
  const actUser = useSelector((state) => state.active.activeUser);
  const searchVal = useSelector((state) => state.search.searchUsers);
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const checkedList = useSelector((state) => state.checkedList.checkedList);
  const colorTheme = useSelector((state) => state.colorTheme.lightTheme);
  const showModal = useSelector((state) => state.modal.modal);
  const dispatch = useDispatch();
  const ModalContact = HOCmodal(ActiveContact);

  const filteredList =
    users &&
    users.filter(
      (user) =>
        user.general.firstName
          .toLowerCase()
          .includes(searchVal.toLowerCase()) ||
        user.general.lastName.toLowerCase().includes(searchVal.toLowerCase())
    );
  const mobSmallScreen = isMobile && window.innerWidth <= 768;

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div className="">
      <Header />
      <div
        className={`${!colorTheme ? "list-holder-light" : "list-holder-dark"} ${
          mobSmallScreen && checkedList.length > 0 && "with-slider"
        }`}
      >
        <ul className="contacts-list">
          {loading ? (
            <div className="spinner-holder">
              <LinearProgress />
              <h6>LOADING...</h6>
            </div>
          ) : searchVal.length > 0 && filteredList.length === 0 ? (
            <span className="no-found">no person found</span>
          ) : (
            filteredList.map(function (el) {
              return <Contact personsData={el} key={el.contact.phone} />;
            })
          )}
        </ul>
      </div>
      {_.isEmpty(actUser) ? (
        <span className="click-info">
          {!mobSmallScreen && "click on person to get more info"}
        </span>
      ) : (
        <div className="active-contact-holder">
          {!mobSmallScreen ? (
            <TabsComponent {...actUser} />
          ) : (
            <ModalContact isOpen={showModal} {...actUser} />
          )}
        </div>
      )}
      {checkedList.length > 0 && <Slider />}
    </div>
  );
}
