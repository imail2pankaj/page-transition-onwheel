import React from "react";
import { motion } from "framer-motion";
import useAppDirection from "../hooks/useAppDirection";


export default function AboutMe() {
    const { isUp, location } = useAppDirection("/work", "/skills", 1000, -1000);

    return (
        <motion.div
            className="aboutme--top"
            initial={{ opacity: 0, y: location.state.value, transition: { duration: 0.8 } }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
            exit={{ opacity: 0, y:  isUp ? 1300 : -1300, transition: { duration: 0.8 } }}
        >
        </motion.div >
    )
}