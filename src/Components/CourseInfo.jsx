import {
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";

function CourseInfo() {
  return (
    <Card style={styles.cardbox}>
      <CardHeader title="Introduction" style={{ fontWeight: "bold" }} />
      <hr style={{ marginTop: "0rem" }}></hr>

      <CardContent>
        {/* <Typography variant="h5" component="h5" style={{ marginTop: "-2rem" }}>
          <h5>Introduction</h5>
        </Typography> */}

        <List
          sx={{
            listStyleType: "disc",
            pl: 4,
            "& .MuiListItem-root": {
              display: "list-item",
            },
          }}
          style={{ marginLeft: "2rem", marginTop: "-1rem" }}
        >
          <ListItem>
            Predicated on the pivotal role you play in Retail​
          </ListItem>
          <ListItem>Eight material crises in fifteen years​</ListItem>
          <ListItem>Bad loans are made in good times​</ListItem>
          <ListItem>
            The absence of evidence is not the evidence of absence​​
          </ListItem>
          <ListItem>A still evolving risk culture​​</ListItem>
          <ListItem>A beginning, not an end​​</ListItem>
        </List>
      </CardContent>
    </Card>
  );
}

export default CourseInfo;

const styles = {
  cardbox: {
    width: "64rem",
    height: "32rem",
    border: "1px solid #9D9999",
    marginTop: "2rem",
  },
};
