import React from 'react';

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <p>
        Download my <a download href="../../assets/resume.pdf">resume</a>
      </p>
      <h2>
        Front-end Proficiencies
      </h2>
      <ul>
         <li>HTML</li>
         <li>CSS</li>
         <li>JavaScript</li>
         <li>jQuery</li>
         <li>responsive design</li>
         <li>React</li>
         <li>Bootstrap</li>
         <li>SEO</li>
        </ul>
      <h2>
        Back-end Proficiencies
      </h2>
        <ul>
         <li>APIs</li>
         <li>Node</li>
         <li>Express</li>
         <li>MySQL, Sequelize</li>
         <li>MongoDB, Mongoose</li>
         <li>REST</li>
        </ul>
    </div>
  );
}
