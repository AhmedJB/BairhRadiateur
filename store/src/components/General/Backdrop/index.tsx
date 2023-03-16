import { motion } from "framer-motion";
import React from "react";


interface propType {
    children :  React.ReactChild | React.ReactFragment | React.ReactPortal | boolean | null | undefined;
    onClick : any

}

const Backdrop = ({ children, onClick } : propType ) => {
 
  return (
    <motion.div
      onClick={onClick}
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;