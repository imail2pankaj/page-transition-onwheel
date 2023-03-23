import React from "react";
import { motion } from "framer-motion";
import useAppDirection from "../hooks/useAppDirection";
import { screenHeight } from "../utils/constants";


export default function AboutMe() {
    const { isUp, location } = useAppDirection("/work", "/skills", screenHeight, (-1 * screenHeight));

    return (
        <motion.div
            className="aboutme--top"
            initial={{ opacity: 0, y: location.state.value, transition: { duration: 0.8 } }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
            exit={{ opacity: 0, y:  isUp ? screenHeight : (-1 * screenHeight), transition: { duration: 0.8 } }}
        >
        </motion.div >
    )
}