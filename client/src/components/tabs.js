import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ActiveContact from "./active_contact";
import { Form } from "./form";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div>
          <div>{children}</div>
        </div>
      )}
    </div>
  );
}

export default function TabsComponent(props) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="">
      <AppBar position="static" className="app-bar">
        <Tabs value={value} onChange={handleChange} aria-label="tabs">
          <Tab label="All info" />
          <Tab label="Print PDF" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ActiveContact {...props} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Form {...props} />
      </TabPanel>
    </div>
  );
}
