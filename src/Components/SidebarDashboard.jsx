import React, { useState, useEffect } from "react";
import { Grid, List, Typography } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import { ListItemText } from "@mui/material";
import { Collapse } from "@mui/material";

import { Sidebar } from "./Sidebar";
import { hasChildren } from "./Utils";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CourseInfo from "./CourseInfo";
import Module1 from "./Module1";
import Module2 from "./Module2";

export default function SidebarDashboard() {
  const [mykeys, setmykeys] = useState(1);

  useEffect(() => {
    localStorage.setItem("key", mykeys);
  }, [mykeys]);

  function mycall(e) {
    if (e !== undefined) setmykeys(e);
  }
  return (
    <>
      <Grid container xs={12} sm={12} md={12} lg={8} xl={8}>
        <Grid item xs={2} sm={2} md={3} lg={4} xl={6}>
          <img
            src="Iconic Mark Original 1920px 1.png"
            alt="logo"
            style={{ marginLeft: "5rem", marginTop: "3rem" }}
          />
          <Typography variant="h5">
            <h5
              style={{
                marginLeft: "1rem",
                marginTop: "0rem",
                width: "20rem",
              }}
            >
              Credit Risk Management
            </h5>
          </Typography>
        </Grid>

        {Sidebar.map((item, key) => (
          <MenuItem call={mycall} value={mykeys} key={key} item={item} />
        ))}
        {/* <div style={{ width: "80%", marginLeft: "2%" }}> */}
        <Grid item xs={2} sm={2} md={3} lg={4} xl={6} ml={8} mt={-30}>
          {mykeys === 1 && <CourseInfo />}
          {mykeys === 2 && <Module1 />}
          {mykeys === 3 && <Module2 />}
          {/* </div> */}
        </Grid>
      </Grid>
    </>
  );
}

const MenuItem = ({ item, value, call }) => {
  const Component = hasChildren(item) ? MultiLevel : SingleLevel;
  return <Component value={value} call={call} item={item} />;
};

const SingleLevel = ({ item, value, call }) => {
  const myClick = () => {
    call(item.mykey);
  };

  return (
    <ListItem button onClick={myClick}>
      <ListItemIcon sx={{ color: item.mykey === value ? "#1BC5BD" : "" }}>
        {item.icon}
      </ListItemIcon>
      <ListItemText
        primary={item.title}
        sx={{ color: item.mykey === value ? "#1BC5BD" : "" }}
      />
    </ListItem>
  );
};

const MultiLevel = ({ item, value, call }) => {
  const { items: children } = item;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    call(item.mykey);
    setOpen((prev) => !prev);
  };
  const [mykeyss, setmykeyss] = useState(0);
  useEffect(() => {
    setmykeyss(localStorage.getItem("key"));
  }, [localStorage.getItem("key")]);

  console.log("value", value, "mykeyss", mykeyss);
  return (
    <div>
      <ListItem
        style={{ color: item.mykey === value ? "#1BC5BD" : "" }}
        button
        onClick={handleClick}
      >
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.title} />
        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List
          component="div"
          disablePadding
          style={{
            marginLeft: "2rem",
            // color: `${mykeyss === value ? "#1BC5BD" : "blue"}`,
          }}
        >
          {children.map((child, key) => (
            <MenuItem
              style={{ color: "#1BC5BD" }}
              call={call}
              key={key}
              item={child}
            />
          ))}
        </List>
      </Collapse>
    </div>
  );
};
