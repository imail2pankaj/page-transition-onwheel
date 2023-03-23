import React from "react";
import { motion } from "framer-motion";
import useAppDirection from "../hooks/useAppDirection";
import { screenHeight } from "../utils/constants";

export default function MessageMe() {

    const { isUp, location } = useAppDirection("", "/work", screenHeight, (-1 * screenHeight));

    return (
        <motion.div
            initial={{ opacity: 0, y: location.state.value ? location.state.value : 0, transition: { duration: 0.8 } }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
            exit={{ opacity: 0, y: isUp ? screenHeight : (-1 * screenHeight), transition: { duration: 0.8 } }}
            className="messageme--top"
        >
        </motion.div >
    )
}