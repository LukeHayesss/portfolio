import React from 'react';
import currently from '../assets/currently image.png';
import foodzy from '../assets/foodzy-1.png';
import jaka from '../assets/jakabek-homey.png';
import uber from '../assets/uber-img.png';
import insta from '../assets/insta-img.png';
import spotify from '../assets/spotify-img.png';
import ubereats from '../assets/ubereats-img.png'


const Projects = () => {
   const projects = [
      {
         img: currently,
         title: 'currently',
         desc: 'Map application built for a US startup. Tracks extreme weather events around the world; built with React.js, Leaflet.js, D3.js, AWS, Styled-Components, and Python. Responsible for the overall build + design.',
         live: 'https://ambitious-tree-0fbea500f.2.azurestaticapps.net/',
         code: 'https://github.com/LukeHayesss/extremes-build'
      },
      {
         img: foodzy,
         title: 'foodzy',
         desc: 'App where you can filter through recipes depending on diet preference (such as vegan, gluten free), or health conditions (such as diabetes, or heart-health). Built with React.js, NodeJS, SCSS, Framer Motion, the Spoonacular API, React Icons, Firebase, and more.',
         live: '',
         code: 'https://github.com/LukeHayesss/final-project-foodzy'
      },
      {
         img: jaka,
         title: 'jakabek',
         desc: 'Rebuilt the website for Jakabek Immigration Law, refreshing the UI, integrating external plugins, and coming up with custom code solutions to implement all requested changes.',
         live: 'https://jakabeklaw.com/',
         code: ''
      },
      {
         img: uber,
         title: 'uber',
         desc: 'Uber clone built using React Native, Redux, Tailwind CSS and Google Navigation API. Updates distance, travel time, and cost to travel, for three separate tiers of Uber pricing.',
         live: '',
         code: 'https://github.com/LukeHayesss/uber'
      },
      {
         img: insta,
         title: 'insta',
         desc: 'A fully-functioning Instagram clone built using Next.js. Upload photos, add captions, like + unlike posts, and store all of the post data and comment/liking/unliking data in the Firebase Database. Styled with Tailwind CSS, user authorization done via NextAuth.',
         live: '',
         code: 'https://github.com/LukeHayesss/instagram-clone'
      },
      {
         img: spotify,
         title: 'spotify',
         desc: 'Spotify recreation using Next.js, React.js, NextAuth, Spotify API, and Recoil.',
         live: '',
         code: 'https://github.com/LukeHayesss/spotify'
      },
      {
         img: ubereats,
         title: 'uber eats',
         desc: 'Ubereats recreation using React Native, Redux, Google Maps API, Firebase, and Stripe Payments.',
         live: '',
         code: 'https://github.com/LukeHayesss/ubereats-2'
      },
   ]
   return (
      <section className="bg-primary text-white px-5 py-32" id="projects">
        <div id='bg'>
        <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
          <div className="about-info mb-5">
            <h2 className="text-6xl font-bold mb-5 border-b-[5px] w-[230px] border-[#007AFC] pb-2">
              Projects
            </h2>
  
            <p className="pb-5 text-2xl">
            Below are a selection of projects I've worked on. Hover over each image for more info.
            </p>
          </div>
  
          <div className="about-img"></div>
        </div>
  
        <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
          {projects.map((project, i) => {
            return (
              <div className="relative" key={i}>
                <img src={project.img} alt={project.title} />
                <div className="flex absolute left-0 right-0 top-[22px] bottom-0 mx-auto w-[90%] h-[90%] bg-primary opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                  <p className="py-5 text-lg text-center font-bold px-2 text-white">
                    {project.desc}
                  </p>
  
                  <div className="mx-auto">
                    <a
                      href={project.live}
                      className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                    >
                      Live
                    </a>
                    <a
                      href={project.code}
                      className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </section>
    );
  };
  
  export default Projects;