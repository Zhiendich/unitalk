import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "Rubik, sans-serif",
    fontSize: 14,
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#0000003B",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#0000003B",
            },
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "#6c757d",
          "&.Mui-focused": {
            color: "#668099",
          },
        },
      },
    },
  },
});
