import React, { useContext } from "react";
import { motion } from "framer-motion";
import useAppDirection from "../hooks/useAppDirection";


export default function Main() {

    const { isUp, location } = useAppDirection("/skills", "/", 1000);

    return (
        <motion.div
            className="main--container"
            initial={{ opacity: 0, y: -1000, transition: { duration: 0.8 } }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
            exit={{ opacity: 0, y: -1000, transition: { duration: 0.8 } }}
        >
        </motion.div >
    )
}