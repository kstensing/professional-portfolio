import React from 'react';

const Project = ({ index }) => {

  const projects = [
    {
        title: 'Tech Blog',
        image: 'tech-blog',
        linkApplication: 'https://enigmatic-sierra-94103.herokuapp.com/',
        linkRepo:'https://github.com/kstensing/tech-blog'
    },
    {
        title: 'Forecast Films',
        image: 'fantastic-four',
        linkApplication: 'https://kstensing.github.io/fantastic-four/',
        linkRepo:'https://github.com/kstensing/fantastic-four'
    },
    {
        title: 'Travelers Hidden Gems',
        image: 'travelers-hidden-gems',
        linkApplication: 'https://sleepy-woodland-16634.herokuapp.com/',
        linkRepo:'https://github.com/kstensing/travelers-hidden-gems'
    },
    {
        title: 'Weather Dashboard',
        image: 'weather-dashboard',
        linkApplication: 'https://kstensing.github.io/weather-dashboard/',
        linkRepo:'https://github.com/kstensing/weather-dashboard'
    },
    {
        title: 'Code Quiz',
        image: 'code-quiz',
        linkApplication: 'https://kstensing.github.io/code-quiz/',
        linkRepo:'https://github.com/kstensing/code-quiz'
    },
    {
        title: 'Work Day Scheduler',
        image: 'work-day-scheduler',
        linkApplication: 'https://kstensing.github.io/work-day-scheduler/',
        linkRepo:'https://github.com/kstensing/work-day-scheduler'
    }
  ];

  return (
      <div className="card">
        
          <h1 className='card-title'>{projects[index].title}</h1>
          <p><a className='card-link' href={projects[index].linkApplication} >{projects[index].title}</a></p>
          
          <a className='card-link' href={projects[index].linkRepo}>Github Repository</a> 
          <img className='screenshot'
          src={require(`../assets/${projects[index].image}.jpg`)}
          alt={projects[index].image}
         
          key={projects[index].image}
          />
    </div>
  );
};

export default Project;
