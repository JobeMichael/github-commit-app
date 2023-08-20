import Layout from "components/Layout/Layout";
import theme from "global/theme";
import { Provider } from "react-redux";
import store from "store";
import { ThemeProvider } from "styled-components";
import "./App.css";
import AppRoutes from "./routes";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout>
          <AppRoutes />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
