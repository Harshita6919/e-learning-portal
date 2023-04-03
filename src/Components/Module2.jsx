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

function Module2() {
  return (
    <Card style={styles.cardbox}>
      <CardHeader title="Module 2" style={{ fontWeight: "700 !important" }} />
      <hr style={{ marginTop: "0rem" }}></hr>

      <CardContent>
        <Typography variant="h5" component="h5" style={{ marginTop: "-2rem" }}>
          <h5>Introduction</h5>
        </Typography>

        <Typography variant="h6" component="h6" style={{ marginTop: "0rem" }}>
          <h6>At the end of this session, you will be able to:</h6>
        </Typography>

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
            Appreciate how the Risk Management Framework is applied in RB​
          </ListItem>
          <ListItem>
            Identify elements and process used for Credit Approval Documents
            (CAD) and Campaign Recommendation Documents (CRD)​​
          </ListItem>
          <ListItem>
            Recognize the triggers used to ensure appropriate tracking of
            portfolio shapes as approved in the CADs​
          </ListItem>
        </List>
      </CardContent>
      <Button
        variant="contained"
        style={{
          marginLeft: "50rem",
          marginTop: "4rem",
          background: "#0093fb",
        }}
      >
        Start Learning
      </Button>
    </Card>
  );
}

export default Module2;

const styles = {
  cardbox: {
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
