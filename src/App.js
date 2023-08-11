import "./App.css";
import Header from "./components/header";
import Headline from "./components/headline";
import { GitHub, Twitter, LinkedIn } from "@mui/icons-material";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="fixed flex flex-col px-5 top-[40vh] gap-5">
        <GitHub sx={{ fontSize: 35 }} />
        <LinkedIn sx={{ fontSize: 35, color: "#1DA1F2" }} />
        <Twitter sx={{ fontSize: 35, color: "#1DA1F2" }} />
      </div>
      <Header />
      <Headline />
    </div>
  );
}

export default App;
