import React from "react";
import Comments from "../Comments";

function HowToDoNothing({data}){
  const project = data.find(({ id }) => (id === "how-to-do-nothing"));
  
  return (
    <div className="sdt-project-container">
      <h1>{project.title}</h1>
      <div className="sdt-project-detail">
          <p>
            {project.detail.school} | {project.detail.year} | {project.detail.class} 
          </p>
          <p>
            Critic: {project.detail.critic}
          </p>
          {
            project.collaborators ? 
            <p>Collaborators: {project.collaborators.map((collaborator, index) => (<a key={index} href={collaborator.url}>{collaborator.name} </a>))}</p>:
            null
          }
      </div>
      <div className="sdt-project">
        <p>
          <em>How To Do Nothing</em> project intentionally creates a distraction (from being locked to screens) and attempts to do the opposite of how technology is typically used. Instead of hijacking your attention, it forces you to look away from your phone or laptop and focus on your surroundings and yourself.
        </p>
        <img id="how-to-do-nothing-gif" src={project.images.cover_image}></img>
        <p>
          Pieces of technology that we interact with every day, from apps in our smartphone or laptop, wearable devices, to IoT devices in our home or office, are designed to increase efficiency and productivity so that more can be done in a shorter amount of time or less efforts/resources.
        </p>
        <p> 
          At the same time, as different apps and devices compete for our attention, they are becoming addictive by design so that they can keep us as engaged as possible for as long as possible. 
        </p>
        <p>
          In this project, I created an IFTTT recipe that forces myself to take break from the work. Working with smart home devices like Kasa Smart Plug, SwitchBot smart switches, and things I had in my apartment such as an airbed old, MacBook, and a projector, I created a spatial interface in my living which creates the intentional distraction. 
        </p>
        <div id="gadgets">
          <img src={project.images.image3}></img>
          <img src={project.images.image4}></img>
          <img src={project.images.image5}></img>
          <img src={project.images.image6}></img>
        </div>
        <p>
          My IFTTT recipe is tailored to my schedule of a week in the semester. On Mondays and Thursdays, I have design studios, and for that, I usually have to work long hours, especially on days prior to the studios, I would sometimes work more than 10 hours. 
        </p>
        
        
        <img id="how-to-do-nothing-calender" src={project.images.image2}></img>
        <p>
          On the nights before design studios, the IFTTT recipe triggers a series of events in my living space: 
        </p>
        <ul>
          <li>at 10:00 pm, inflate the air bed</li>
          <li>at 10:05 pm, turn on the projector</li>
          <li>at 10:07 pm, turn off the light</li>
        </ul>
        
        <p>
          Change of the interior environment triggered by IFTTT microservice enforces breaks from computer/work, gives you a moment to loosen up and reflect on things. 
        </p>
      </div>
    </div>
  )
}

export default HowToDoNothing;