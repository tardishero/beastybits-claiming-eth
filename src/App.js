import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppHeader from "./component/header";
import AppFooter from "./component/footer";
import Topbar from "./component/topbar";
import DashBoard from "./pages/dashboard";

import { ToastContainer } from "react-toastify";

import { motion } from "framer-motion";
import "./App.css";
function App() {
  // const [preloadState, setPreloadState] = useState(true);

  // setInterval(() => {
  //   setPreloadState(false);
  // }, 3000);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.5, delay: 0.1 }}
    >
      <div className="main-section">
        <ToastContainer style={{ fontSize: 14 }} />
        <Router>
          <AppHeader />
          <Topbar />
          <Routes>
            <Route path="/" element={<DashBoard />} />
          </Routes>
          <AppFooter />
        </Router>
      </div>
    </motion.section>
  );
}

export default App;
