import { useState } from 'react';
import './About.css';
import { Card, Collapse} from 'react-bootstrap'; 
import img from "../../assets/profilepic.jpg"

const About = () => {
    const [open, setOpen] = useState(true);
  return (
    <div class="aboutme-container">
        <button class="btn-77" onClick={() => setOpen(!open)}>About Me</button>
        <div class={`content-container ${open ? 'open' : ''}`} style={{ minHeight: '150px' }}>
            <Collapse in={open} dimension="width">
                <div className={`text-container ${open ? 'open' : ''}`}>
                    <Card class="aboutme-text" body style={{ width: '50rem' }}>Hello! I'm Shubham Banyal, a passionate and driven software developer with a Bachelor's 
                        degree in Computer Science from Maynooth University,
                        where I graduated with a 2.1 GPA. My journey through university has instilled in me a deep appreciation for problem-solving and the ever-evolving world of technology.
                        From a young age, I've been drawn to the intricate puzzles that coding presents. Whether it's debugging a stubborn piece of code or architecting a complex system from scratch, 
                        I find immense satisfaction in unraveling challenges and crafting elegant solutions.
                    </Card>
                </div>
            </Collapse>
            <div className={`img-container ${open ? 'open' : ''}`}>
                <img src={img} alt="Profile Pic" className="profile-pic"/>
            </div>
        </div>

    </div>
  )
}

export default About
