import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import React from "react";

function CourseMaterial() {
  return (
    <Card style={styles.cardbox}>
      <CardHeader
        title="Course Info"
        style={{ fontWeight: "700 !important" }}
      />
      <hr style={{ marginTop: "0rem" }}></hr>

      <CardContent>
        <iframe
          src="https://cslabs-my.sharepoint.com/personal/harshita_verma_corestrat_ai/_layouts/15/Doc.aspx?sourcedoc={6e433788-9c4e-4fb6-8698-0c5d29e0909e}&amp;action=embedview&amp;wdAr=1.7777777777777777"
          width="990px"
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
      </CardContent>
    </Card>
  );
}

export default CourseMaterial;

const styles = {
  cardbox: {
    marginLeft: "18rem",
    width: "64rem",
    height: "32rem",
    border: "1px solid #9D9999",
    marginTop: "-16rem",
  },

  iFrame: {
    width: "100%",
    height: "100%",
    border: "none",
  },
};
