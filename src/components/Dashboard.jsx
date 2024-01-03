import { Box } from "@mui/material";
import NavBar from "./NavBar";
import { DashboardTop } from "./DashboardTop";

export const Dashboard = () => {
  return (
    <Box>
      <NavBar />
      <DashboardTop />
    </Box>
  );
};
