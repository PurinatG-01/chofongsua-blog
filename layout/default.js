import React, { useEffect } from "react"
import { PageContainer } from "../components/global"
import NavBar from "../components/_layout/navbar"
import { motion } from "framer-motion"

export default function Layout(props) {
  return (
    <motion.div
      transition={{ type: "spring", duration: 1.2 }}
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <NavBar />
      <PageContainer>{props.children}</PageContainer>
    </motion.div>
  )
}
