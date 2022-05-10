import React from "react"
import logo from "./logo.svg"
import "./App.css"
import Router from "./routing/Router"
import { createTheme, ThemeProvider } from "@material-ui/core/styles"
import { store } from "./redux/store"
import { Provider } from "react-redux"
import CustomSnackBar from "./components/SnackBar"

const theme = createTheme({
  palette: {
    primary: {
      main: "#04243c",
    },
    secondary: {
      main: "#acebd3",
    },
  },
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Router />
          <CustomSnackBar />
        </Provider>
      </ThemeProvider>
    </div>
  )
}

export default App
