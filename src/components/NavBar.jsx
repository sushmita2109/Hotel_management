import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Box } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import Typography from "@mui/material/Typography";

const NavBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "5px",
        backgroundColor: "blue",
        height: "50px",
        color: "white",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "5px",
          backgroundColor: "blue",

          color: "white",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" gutterBottom>
          HMS
        </Typography>
        <Box>
          <AddCircleOutlineIcon fontSize="small" />
          <AddCircleOutlineIcon fontSize="medium" />
          <AddCircleOutlineIcon fontSize="large" />
        </Box>
      </Box>
      <Box>
        <SettingsIcon />
      </Box>
    </Box>
  );
};

export default NavBar;
