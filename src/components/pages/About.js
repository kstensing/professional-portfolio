import React from 'react';

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <img className='card-img-center screenshot mx-1'
          src={require(`../../assets/portrait.jpg`)}
          alt={("portrait")}
         
          key={("portrait")}
          />
      <p>
        Hi there! My name is Kate Stensing and I'm a software developer looking to challenge myself and
        create impressive functional products. Below is some of my work, take a look!
      </p>
      
        A little bit about me...I am a new mother of one, my daughter Kairi. My partner and I have enjoyed
        the journey into parenthood and our pace of life has slowed since the pandemic, in the best way. We
        love to try new recipes, spend time outdoors, and play board games. We have a 5 year old
        Newfoundland/Great Pyrenees dog named Rho who isn't so sure about the new small human in her home,
        but she's handling it well.
               
      <p>
        I'm located in the suburbs of Minneapolis, Minnesota and would love to expand my portfolio and add
        value to your company - please reach out!
      </p>
    </div>
  );
}
