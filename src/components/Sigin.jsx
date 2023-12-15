import { Box } from "@mui/material";
import pictures from "../pictures.svg";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const Sigin = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "2px",
        textAlign: "center",
        justifyContent: "center",
        padding: "8px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          textAlign: "center",
          justifyContent: "center",
          padding: "8px",
        }}
      >
        <TextField
          id="outlined-disabled"
          label="Username"
          defaultValue="Username"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <Button variant="contained">Submit</Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img src={pictures} alt="pic" />
      </Box>
    </Box>
  );
};
