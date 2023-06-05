import React from "react";
import styles from "./styles/bottomFooter.module.css";
import { Code } from "react-feather";
import { FaGooglePlusG, FaLinkedinIn, FaGithub } from "react-icons/fa";

function BottomFooter() {
  return (
    <div className={styles.container}>
      <div className={styles.minContainer}>
        <div className={styles.headBox}>
          <p className={styles.brand}>
            Interview<span className={styles.letter}>Lit</span>
          </p>
        
        </div>
        <div className={styles.dev}>
          <div className={styles.devHead}>Developers</div>
          <h4>Abhishek Singh Chauhan</h4>
          <h4>Rohit Sigar</h4>
          <h4>Shikhar Shukla</h4>
        </div>
        <div className={styles.break}></div>
      </div>
   
      <p className={styles.copyright}> &copy; CodeX. All Rights reserved.</p>
    </div>
  );
}

export default BottomFooter;
