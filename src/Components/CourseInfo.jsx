import { Card, CardContent } from "@mui/material";
import React from "react";

function CourseInfo() {
  return (
    <Card style={styles.cardbox}>
      <CardContent></CardContent>
    </Card>
  );
}

export default CourseInfo;

const styles = {
  cardbox: {
    marginLeft: "21rem",
    width: "58rem",
    height: "58rem",
    border: "1px solid #9D9999",
    marginTop: "-16rem",
  },
};
