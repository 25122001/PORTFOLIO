import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText"  >
          Together, let's create <br />
          something incredible....
          </span>
          <span className="primaryText">
          Begin by<a href="mailto:santhoyuva3@gmail.com">saying hello</a>
          </span> 
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
            <p>Chengalpattu,TamilNadu </p>
          </div>
          <ul className={css.menu}>
            <li><a href="#Home">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#work" >Experience</a></li>
            <li><a href="#portfolio">Projects</a></li>
            <li><a href="#Skills">Skills</a></li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
