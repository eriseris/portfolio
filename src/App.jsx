import { AnimatePresence, motion } from "motion/react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Layout } from "./components";
import { Contact, Projects, Privacy, NotFound } from "./pages";
import PortfolioDetail from "./PortfolioDetail";
import PortfolioHome from "./PortfolioHome";
import PortfolioAbout from "./PortfolioAbout";

export default function App(){const location=useLocation();return <Layout><AnimatePresence mode="wait"><motion.div key={location.pathname} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0,y:-12}} transition={{duration:.35}}><Routes location={location}><Route path="/" element={<PortfolioHome/>}/><Route path="/about" element={<PortfolioAbout/>}/><Route path="/contact" element={<Contact/>}/><Route path="/project" element={<Projects/>}/><Route path="/project/:slug" element={<PortfolioDetail/>}/><Route path="/legal-pages/privacy-policy" element={<Privacy/>}/><Route path="*" element={<NotFound/>}/></Routes></motion.div></AnimatePresence></Layout>}
