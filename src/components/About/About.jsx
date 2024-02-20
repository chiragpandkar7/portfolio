import React from "react";

import styles from "./About.module.css";
import { getImageURL } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageURL("about/sd.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Software Developer</h3>
              <p>
              Recently graduated with a B.Tech in Computer Engineering from SMT. Kashibai Navale College of Engineering, Pune, I am now leveraging my academic achievements and skills as a dynamic member of CCTech. 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageURL("about/second.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Proactive Developer</h3>
              <p>
              I bring practical experience in software development through hands-on projects and internships. Notably, I have successfully implemented a Hospital Management System, showcasing my proficiency in web technologies such as HTML, CSS, PHP, and MySQL.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageURL("about/third.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Continuous Learner and Contributor</h3>
              <p>
              Committed to personal and professional growth, I actively engage in competitive programming, constantly seeking to enhance my skills and tackle challenging problems.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};