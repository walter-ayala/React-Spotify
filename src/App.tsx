import { BrowserRouter } from "react-router";
import { MainRoute } from "./navigation";

function App() {
  return (
    <BrowserRouter>
      <MainRoute />
    </BrowserRouter>
  );
}

export default App;
