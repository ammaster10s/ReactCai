import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const DesktopSeven = React.lazy(() => import("pages/DesktopSeven"));
const DesktopEight = React.lazy(() => import("pages/DesktopEight"));
const One = React.lazy(() => import("pages/One"));
const Page4 = React.lazy(() => import("pages/Page4"));
const Page3 = React.lazy(() => import("pages/Page3"));
const DesktopFive = React.lazy(() => import("pages/DesktopFive"));
const DesktopSix = React.lazy(() => import("pages/DesktopSix"));
const Page2 = React.lazy(() => import("pages/Page2"));
const Page1 = React.lazy(() => import("pages/Page1"));
const Page = React.lazy(() => import("pages/Page"));
const DesktopThree = React.lazy(() => import("pages/DesktopThree"));
const DesktopOne = React.lazy(() => import("pages/DesktopOne"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<DesktopOne />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/desktopthree" element={<DesktopThree />} />
          <Route path="/page" element={<Page />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/desktopsix" element={<DesktopSix />} />
          <Route path="/desktopfive" element={<DesktopFive />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/one" element={<One />} />
          <Route path="/desktopeight" element={<DesktopEight />} />
          <Route path="/desktopseven" element={<DesktopSeven />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
