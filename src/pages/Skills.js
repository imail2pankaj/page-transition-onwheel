import React, { useContext } from "react";
import { motion } from "framer-motion";
import useAppDirection from "../hooks/useAppDirection";
import { screenHeight } from "../utils/constants";
export default function Skills() {

    const { isUp, location, navArrows } = useAppDirection("/aboutme", "/", screenHeight);

    return (
        <motion.div
            initial={{ opacity: 0, y: location.state.value, transition: { duration: 0.8 } }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
            exit={{ opacity: 0, y: isUp ? screenHeight : (-1 * screenHeight), transition: { duration: 0.8 } }}
            className="skills--background"
        >
        </motion.div>
    )
}