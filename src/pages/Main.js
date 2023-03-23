import React, { useContext } from "react";
import { motion } from "framer-motion";
import useAppDirection from "../hooks/useAppDirection";
import { screenHeight } from "../utils/constants";
import { Link } from "react-router-dom";

export default function Main() {

    const { isUp, location } = useAppDirection("/skills", "/", screenHeight);

    return (
        <motion.div
            className="main--container"
            initial={{ opacity: 0, y: (-1 * screenHeight), transition: { duration: 0.8 } }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
            exit={{ opacity: 0, y: (-1 * screenHeight), transition: { duration: 0.8 } }}
        >
            <Link to={`no-video`}>
                No &nbsp;
            </Link>
            <Link>
                Yes
            </Link>
        </motion.div >
    )
}