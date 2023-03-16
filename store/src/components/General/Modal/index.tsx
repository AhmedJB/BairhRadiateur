import { motion } from "framer-motion";
import Backdrop from "../Backdrop";
import React from "react";

const dropIn = {
    hidden: {
      y: "-100vh",
      height:0,
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      height:"auto",
      transition: {
        height: {
          type : "ease",
          duration: 0,

          
        },
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      height:0,
      opacity: 0,
    },
  };


interface propType {
    handleClose : any;
    children : React.ReactChild | React.ReactFragment | React.ReactPortal | boolean | null | undefined;
    classes : string
}


  

const Modal = ({ handleClose, children , classes } : propType) => {

    return (
      <Backdrop onClick={handleClose}>
          <motion.div
            onClick={(e) => e.stopPropagation()}  
            className={classes + " modal"}
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {children}
            
          </motion.div>
      </Backdrop>
    );
  };

  
  export default Modal;