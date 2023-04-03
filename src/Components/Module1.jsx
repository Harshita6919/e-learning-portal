import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Module1Ppt from "./Module1Ppt";

function Module1() {
  const [showComponent2, setShowComponent2] = useState(false);

  const handleClick = () => {
    setShowComponent2(true);
  };

  return (
    <>
      <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
        <Grid>
          <Card style={styles.cardbox}>
            <CardHeader
              title="Module 1"
              style={{ fontWeight: "700 !important" }}
            />
            <hr style={{ marginTop: "0rem" }}></hr>

            {!showComponent2 && (
              <CardContent>
                <Typography
                  variant="h5"
                  component="h5"
                  style={{ marginTop: "-2rem" }}
                >
                  <h5>Introduction</h5>
                </Typography>

                <Typography
                  variant="h6"
                  component="h6"
                  style={{ marginTop: "0rem" }}
                >
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
                    Describe the Retail Banking (RB) product cycle from a
                    customer’s perspective​
                  </ListItem>
                  <ListItem>
                    Define the RB Credit Cycle of a facility​​
                  </ListItem>
                  <ListItem>
                    Understand the design elements of Retail Banking Products​​
                  </ListItem>
                  <ListItem>
                    Identify product design elements as they relate to risk
                    mitigation​
                  </ListItem>
                </List>
              </CardContent>
            )}
            {showComponent2 && <Module1Ppt />}
            {!showComponent2 && (
              <Button
                onClick={() => handleClick()}
                variant="contained"
                style={{
                  marginLeft: "40rem",
                  marginTop: "4rem",
                  background: "#0093fb",
                }}
              >
                Start Learning
              </Button>
            )}
            <Button
              variant="contained"
              style={{
                marginLeft: "3rem",
                marginTop: "4rem",
                background: "#0093fb",
              }}
            >
              Skip To Test
            </Button>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Module1;

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
