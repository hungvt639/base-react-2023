import "./styles/globals.scss";
import { Button, ConfigProvider } from "antd";

function App() {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#00b14f" } }}>
      <div className="App">
        <header className="App-header">
          <p className=" text-red-500">
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          <Button>sdasdaasd</Button>
        </header>
      </div>
    </ConfigProvider>
  );
}

export default App;
