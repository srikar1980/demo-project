import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import ProtectedRoute from "./components/ProtectedRoute";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

export default function App() {
  const auth = true;

  return (
    <main>
      <Header />
      <div className="content-area">
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route element={<ProtectedRoute isLoggedIn={auth} />}>
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />}></Route>
          </Route>
          {/* <Route
            path="contact"
            element={
              <ProtectedRoute isLoggedIn={auth}>
                <Contact />
              </ProtectedRoute>
            }
          ></Route> */}
        </Routes>
      </div>

      <Footer />
    </main>
  );
}
