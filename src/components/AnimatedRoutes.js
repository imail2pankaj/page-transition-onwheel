import React from "react";
import Skills from "../pages/Skills";
import Main from "../pages/Main";
import AboutMe from "../pages/AboutMe";
import MessageMe from "../pages/MessageMe";
import Work from "../pages/Work"
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NoVideo from "../pages/NoVideo";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route index path="/" element={<Main />} />
        <Route path="/no-video" element={<NoVideo />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/work" element={<Work />} />
        <Route path="/messageme" element={<MessageMe />} />

      </Routes>
    </AnimatePresence>
  );
}
