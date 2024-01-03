import { Box, CardContent } from "@mui/material";
import Card from "@mui/material/Card";
import Shop2Icon from "@mui/icons-material/Shop2";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export const DashboardTop = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}>
      <Card sx={{ minWidth: 275 }}>
        <Shop2Icon />
        <CardContent>
          <p>$777</p>
          <p>Total Purchase</p>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 275 }}>
        <MonetizationOnIcon />
        <CardContent>
          <p>S444</p>
          <p>Total Sales Due</p>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 275 }}>
        <ArrowDownwardIcon />
        <CardContent>
          <p>$555</p>
          <p>Total Sale Amount</p>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 275 }}>
        <ArrowUpwardIcon />
        <CardContent>
          <p>$6666</p>
          <p>Total Sales Amount</p>
        </CardContent>
      </Card>
    </Box>
  );
};
