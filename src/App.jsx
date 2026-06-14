import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tasks from "./pages/TasksForm";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/task" element={<Tasks />} />
          <Route path="/task/:id" element={<Tasks />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
