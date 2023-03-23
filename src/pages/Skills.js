import React, { useContext } from "react";
import { motion } from "framer-motion";
import useAppDirection from "../hooks/useAppDirection";

export default function Skills() {

    const { isUp, location, navArrows } = useAppDirection("/aboutme", "/", 1000);

    return (
        <motion.div
            initial={{ opacity: 0, y: location.state.value, transition: { duration: 0.8 } }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
            exit={{ opacity: 0, y: isUp ? 1000 : -1000, transition: { duration: 0.8 } }}
            className="skills--background"
        >
        </motion.div>
    )
}