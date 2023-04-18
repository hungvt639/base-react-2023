import Routers from "./router";
import { ConfigProvider } from "antd";
import "./styles/globals.scss";

function App() {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#00b14f" } }}>
      <Routers />
    </ConfigProvider>
  );
}

export default App;
