import { ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./store";
import GridTable from "./components/table/GridTable";
import { theme } from "./theme";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Typography sx={{ marginBottom: "40px" }} variant={"h4"}>
          Оператори
        </Typography>
        <GridTable />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
