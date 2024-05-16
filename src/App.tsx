import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Landing from "./pages/Landing/Landing";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
