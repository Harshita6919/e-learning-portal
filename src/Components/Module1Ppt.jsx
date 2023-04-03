import {
  Button,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";
import "./../App.css";

function Module1Ppt() {
  return (
    // <Card>
    <>
      {/* <CardHeader title="Module 1" style={{ fontWeight: "bold" }} /> */}
      {/* <hr style={{ marginTop: "0rem" }}></hr> */}
      <iframe
        src="https://cslabs-my.sharepoint.com/personal/harshita_verma_corestrat_ai/_layouts/15/Doc.aspx?sourcedoc={6e433788-9c4e-4fb6-8698-0c5d29e0909e}&amp;action=embedview&amp;wdAr=1.7777777777777777"
        download
        width="100%"
        height="400px"
        frameborder="0"
      >
        This is an embedded{" "}
        <a target="_blank" href="https://office.com">
          Microsoft Office
        </a>{" "}
        presentation, powered by{" "}
        <a target="_blank" href="https://office.com/webapps">
          Office
        </a>
        .
      </iframe>
      <Button variant="contained" style={{ marginLeft: "53.1rem" }}>
        Move To Test
      </Button>
      {/* // </Card> */}
    </>
  );
}

export default Module1Ppt;

const styles = {
  cardbox: {
    // marginLeft: "18rem",
    width: "64rem",
    height: "34rem !important",
    border: "1px solid #9D9999",
    // marginTop: "-16rem",
  },
};
