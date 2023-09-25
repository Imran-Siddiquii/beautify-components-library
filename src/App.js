import Header from "./documentation/Header";
import Home from "./pages/Home";
import "./styles.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Components from "./pages/Components";
import Sidebar from "./documentation/Sidebar";
import BadgeDoc from "./documentation/Badge";
import ButtonDoc from "./documentation/Button";
import TextDoc from "./documentation/Text";
import AvatarDoc from "./documentation/Avatar";
import HeadingDoc from "./documentation/Heading";
import AlertDoc from "./documentation/Alert";
import CardDoc from "./documentation/Card";
import ImageDoc from "./documentation/Image";

export default function App() {
  const location = useLocation();
  const showSidebar = !(
    location.pathname === "/" || location.pathname === "/components"
  );
  return (
    <div className="app">
      <Header />
      <div className="content">
        {showSidebar && <Sidebar />}
        <div className="page-content">
          <Routes>
            <Route exact path="/" element={<Home />} />

            <Route exact path="/components" element={<Components />} />

            <Route exact path="/avatar" element={<AvatarDoc />} />

            <Route exact path="/alert" element={<AlertDoc />} />

            <Route exact path="/badge" element={<BadgeDoc />} />

            <Route exact path="/button" element={<ButtonDoc />} />

            <Route exact path="/card" element={<CardDoc />} />

            <Route exact path="/heading" element={<HeadingDoc />} />

            <Route exact path="/text" element={<TextDoc />} />

            <Route exact path="/image" element={<ImageDoc />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
