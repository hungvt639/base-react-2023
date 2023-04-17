import Routers from "./router";
import "./styles/globals.scss";
import { Button, ConfigProvider } from "antd";

function App() {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#00b14f" } }}>
      <Routers />
    </ConfigProvider>
  );
}

export default App;
