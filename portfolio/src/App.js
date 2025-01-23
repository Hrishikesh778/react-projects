import Home from "./Home";
import React from "react";
import Nav from "./components/Navbar/Nav";
import Skills from "./components/Skills/Skills";
import Project from "./components/Project/Project";
import Education from "./components/Education/Education";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Main from "./components/Main/Main";

function App() {
  // let SkillArr = ['HTML', 'CSS', 'JS', 'Reactjs', "Jquery", "Tailwind CSS"]
 let maintext="Hrishikesh Bhoir"
 let mainsubtext="Full Stack Java Developer"
 let mainImg="./images/profile.png"


  let SkillArr = [
    {
      skill: 'HTML',
      image: "./images/html.png"
    },
    {
      skill: 'CSS',
      image: "./images/css.webp"
    },
    {
      skill: 'JS',
      image: "./images/javascript.webp"
    },
    {
      skill: 'Jquery',
      image: "./images/jquery.png"
    },
    {
      skill: 'ReactJS',
      image: "./images/react.png"
    },
    {
      skill: 'Java',
      image: "./images/java.png"
    }


  ]


  let projArr = ['Smart Checkout System With Recomender', 'KT-Revaluation Form System']
  let Educationarr = [
    {
      college: "BE.Comp | ARMIET",
      year: "2016-2019"
    },
    {
      college: "Diploma in computer engineering | Balasaheb Mhatre Polytechnic ",
      year: "2013-2016"
    }
  ]

  let Experiencearr = [
    {
      name: ".NET Developer| Renaissance Insurance Services PVT LTD",
      year: "Mar. 2021- Mar. 2022",
      description: "•	Worked as a ASP.Net Software Developer for 1 Year. Where I maintained and worked on their takemyinsurance.com website."

    }
  ]

  let about = "Highly motivated and detail-oriented Full Stack Java developer seeking a challenging role that utilizes my skills. To deliver high-quality, scalable, and efficient software solutions that meet business needs and exceed customer expectations."



  return (
    <div>
      
      <Nav />
      <Main maintext={maintext} mainsubtext={mainsubtext} mainImg={mainImg}/>
      <Skills skill={SkillArr} />
      <Project Projects={projArr} />
      <Education Educations={Educationarr} />
      <Experience Experiences={Experiencearr} />
      <About about={about} />

    </div>
  );
}

export default App;
