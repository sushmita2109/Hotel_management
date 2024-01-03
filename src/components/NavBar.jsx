import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Box } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import LanguageIcon from "@mui/icons-material/Language";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { NavMenu } from "./NavMenu";

const NavBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "5px",
        backgroundColor: "blue",
        height: "60px",
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
      </Box>
      <Box
        sx={{
          backgroundColor: "white",
          maxWidth: "180px",
          maxHeight: "40px",
          marginTop: "4px",
          borderRadius: "5px",
        }}
      >
        <TextField id="outlined-basic" label="Search " variant="outlined" />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          marginTop: "4px",
          gap: "3px",
        }}
      >
        <LanguageIcon />
        <FullscreenIcon />
        <MailOutlineIcon />
        <NotificationsNoneIcon />
        <SettingsIcon />
        <NavMenu />
      </Box>
    </Box>
  );
};

export default NavBar;
