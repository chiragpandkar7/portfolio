import React from "react";
import "./module.css";
import { getImageURL } from "../../utils";

export const Hero = () => {
    return (
        <section className="container">
            <div className="content">
                <h1 className="titleHero">Hi, I'm Chirag</h1>
                <p className="description">
                    Member of Technical Staff at CCTech. I'm a Software Developer with 5 months of experience using C++, C#, OpenGL, QT, HTML, CSS, Javascript, React and NodeJS.
                </p>
                <a href="mailto:chirag.pandkar@cctech.co.in" className="contactBtn">Contact Me</a>
            </div>
            <img src= {getImageURL("hero/heroImage.png")} alt="Hero" className="heroImg"/>
            <div className="topBlur" />
            <div className="bottomBlur" />
        </section>
    );
};

