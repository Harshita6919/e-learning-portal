import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import React from "react";

function Module2Ppt() {
  return (
    <Card style={styles.cardbox}>
      <CardHeader title="Module 2" style={{ fontWeight: "700 !important" }} />
      <hr style={{ marginTop: "0rem" }}></hr>

      <CardContent>
        <iframe
          src="https://cslabs-my.sharepoint.com/personal/gururaj_corestrat_ai/_layouts/15/Doc.aspx?sourcedoc={15235ad0-13c5-465c-861f-e99459a7d389}&amp;action=embedview&amp;wdAr=1.7777777777777777"
          width="476px"
          height="288px"
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
      </CardContent>
    </Card>
  );
}

export default Module2Ppt;

const styles = {
  cardbox: {
    // marginLeft: "18rem",
    width: "64rem",
    height: "32rem",
    border: "1px solid #9D9999",
    marginTop: "2rem",
  },

  iFrame: {
    width: "100%",
    height: "100%",
    border: "none",
  },
};
