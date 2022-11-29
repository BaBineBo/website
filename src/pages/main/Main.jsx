import React from "react";

// Import componentes
import BigName from "./BigName";
import Header from "../../constants/header/Header";

const Main = () => {
  return (
    <div className="cl">
      <div className="row justify-content-center">
        <img src="./itsAme.jpeg" alt="is pic of me" />
      </div>

      <div className="content row">
        <h2>Who am I?</h2>
        <p>
          I'm Sabine Randow, a 5th year student at Chalmers currently enrolled
          in the master program High Performance Computer Systems (MPHPC for
          short). I moved to Gothenburg the day after my High School graduation
          2018, and have been glued to my computer ever since. In my spare time
          I'm addicted to keyboards, flowers and making pies. Currently making games in Godot and 
          painting 2D art in Aseprite while not working on master thesis.
        </p>
      </div>

      <div className="content row">
        <h2>What have I done?</h2>
        <p>
          I've been at Chalmers for a while and have managed to squeeze in a lot
          of volunteer work for the student division, some real work and side
          projects.
        </p>

        <div>
          <h3>What I school?</h3>
          <ul>
            <li>Bachelors in Computer Science and Engineering (Datateknik).</li>
            <li> Masters in High Performance Computer Systems.</li>
          </ul>
        </div>

        <div>
          <h3>What I work?</h3>
          <ul>
            <li>
              Laid the foundation of a new webbsite and tools for Chalmers
              Studentkår Rekrytering (CSR)
            </li>
            <li>Was a project leader at CSR, leading recruitment-projects.</li>
            <li>
              Student Assistant for the course in Computer system engineering
              (EDA333, Datorsystemteknik) 2022.
            </li>
            <li>Summer internship at Opera working with React and Go.</li>
          </ul>
        </div>
        <div>
          <h3>What I volunteer?</h3>
          <ul>
            <li>Spent 2 year on the divisions board.</li>
            <li>
              Was the head of DNS, the student educational unit. I attended
              evaluations of courses and handled situations that arose with
              courses.
            </li>
            <li>
              I was the head of DRust, a committee that takes care of the
              student division premises.
            </li>
            <li>
              I played{" "}
              <a href="https://en.wikipedia.org/wiki/Viola" target="_blank">
                viola
              </a>{" "}
              (not a violin i promise they are different) in a student
              orchestra/theater group called Chalmers Barockensemble
            </li>
          </ul>
        </div>
      </div>

      <div className="content row">
        <h2>What do I want?</h2>
        <p>A workplace where I am challenged logically but get to utilize my more artsy-creative side.
          I want friends in the office and people in the office, sometimes. I want to be part of a team
          that tackles problems together while having fun!</p>
      </div>
    </div>
  );
};

export default Main;
