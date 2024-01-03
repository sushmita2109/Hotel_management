import { Box, Typography } from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import CropSquareIcon from "@mui/icons-material/CropSquare";

export const Sidebar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "3px",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <GridViewIcon />
        <Typography>Dashboard</Typography>
      </Box>
      <Box>
        <CropSquareIcon />
        <Typography>Application</Typography>
      </Box>
    </Box>
  );
};
