import React from "react";
import GithubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Home.css";

function Home(){
    return (
        <div className="home">
            <div className="about">
               <h2>Hey there! My name is Sankalp. </h2>
               <div className="prompt">
                <p> 
                    I am currently pursuing an Electrical and Computer Engineering degree at the University of Waterloo. My passions lie in computer vision and neural networks, but I also spend a fair amount of time with front-end engineering as well! You can find all my projects on my GitHub page.
                </p>
                <a href="https://github.com/SankalpUW" target="_blank"><GithubIcon /></a>
                <a href="mailto: skodande@uwaterloo.ca" target="_blank"><EmailIcon /></a>
                </div> 
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2>Front-End</h2>
                        <span> React, Javascript, Bootstrap, NodeJS, CSS, HTML</span>
                    </li>
                    <li className="item">
                        <h2>Back-end</h2>
                        <span>C, C++, Python, Ruby on Rails, MongoDB, SQL , TensorFlow, Pytorch</span>
                    </li>
                    <li className="item">
                        <h2>Developer Tools</h2>
                        <span>Jenkins, Git, Postman, JSON, npm, SQLite, MongoDB  </span>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default Home;