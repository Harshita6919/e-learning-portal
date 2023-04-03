import { Grid } from "@mui/material";

function Test() {
  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    <Grid item></Grid>
  </Grid>;
}

export default Test;
