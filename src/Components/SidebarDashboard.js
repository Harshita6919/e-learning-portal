import React, { useState } from "react";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import { ListItemText } from "@mui/material";
import { Collapse } from "@mui/material";

import { Sidebar } from "./Sidebar";
import { hasChildren } from "./Utils";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CourseInfo from "./CourseInfo";
import Dashboard from "./Dashboard"


export default function SidebarDashboard() {
  const [mykeys, setmykeys] = useState(1);
  function mycall(e) {
    if (e !== undefined) setmykeys(e);
  }
  return (
    <div className="d-flex w-100">
      <div style={{ width: "20%" }}>
        {Sidebar.map((item, key) => (
          <MenuItem call={mycall} value={mykeys} key={key} item={item} />
        ))}
      </div>
      <div style={{ width: "80%" }}>{mykeys === 1 && <CourseInfo />}{mykeys === 2 && <Dashboard />}</div>
    </div>
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

  return (
    <div>
      <ListItem button onClick={handleClick}>
        <ListItemIcon sx={{ color: item.mykey === value ? "#1BC5BD" : "" }}>
          {item.icon}
        </ListItemIcon>
        <ListItemText
          // sx={{ color: item.mykey === value ? "#1BC5BD" : "" }}
          primary={item.title}
        />
        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List
          component="div"
          disablePadding
          style={{ marginLeft: "2rem" }}
          // sx={{ color: item.mykey === value ? "#1BC5BD" : "" }}
        >
          {children.map((child, key) => (
            <MenuItem call={call} key={key} item={child} />
          ))}
        </List>
      </Collapse>
    </div>
  );
};
