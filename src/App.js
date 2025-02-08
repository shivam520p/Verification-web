import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { BrowserRoute } from "./routes/BrowserRoutes";
import { PageProvider } from "./API/PageHandle/PageProvider";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <BrowserRouter>
        <PageProvider>
          <Toaster />
          <BrowserRoute />
        </PageProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
