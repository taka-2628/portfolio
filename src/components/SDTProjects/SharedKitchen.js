import React from "react";

function SharedKitchen({data}){

  const project = data.find(({ id }) => (id === "shared-kitchen"));
  
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
          <p>Collaborators: {project.collaborators.map((collaborator, index) => (<span key={index}><a href={collaborator.url}>{collaborator.name}</a></span>))}</p>:
          null
        }
      </div>
      <div className="sdt-project">
        <p>
          <em>Shared Kitchen</em> project is an attempt to emphasize the feeling of another individual within a space without their physical presence. It uses the application of motion tracking technology combined with visual and sound stimuli to create a virtual presence of another person and a sense of cooking with them in our kitchen. 
        </p>
        <div className="video_wrapper">
          <iframe id="shared-kitchen-video" src={project.images.cover_image}></iframe>
        </div>
        <p>
          The past two years filled with quarantines and isolation have allowed us to reflect on the importance of daily encounters and interactions both directly and indirectly with others. Video and phone calls have helped alleviate the lack of connection but it has not addressed the more subtle aspects of what it means to be in a space with another person.
        </p>
        
        <p>
          Whether it’s the comfort of sitting together watching a movie...<br/>
          Just passing by one another throughout the day…
        </p>
        <img className="sk-diagram" src={project.images.image2}></img>
        <p>
          There is something nice about indirectly interacting with someone via their presence. While cooking a meal, reading a book in the same room, etc, you do not have to be engaged in constant conversations. There is a certain feeling or awareness of their presence via slight movements and subtle sounds that allows us to feel connected to their presence. 
        </p>
        <p>
          This no-verbal sense of awareness and interaction with another person is what inspired this project.
        </p>

        <br/>
        
        <p>
          The project uses <a href="http://reactivision.sourceforge.net/">reactTIVision</a> to track the motion of a person in a kitchen with a webcam. The space is divided into quadrants in x-axis (horizontally) on the screen. When a fiduciary marker on the back of the person is detected in one of the quadrants, <a href="https://processing.org/">Processing</a> receives the position information of the marker from reacTIVision and sends different webhook request to IFTTT depending on which quadrant the marker is detected in. 
        </p>
        <div className="sk-prototyping">
          <img src={project.images.image7}></img>
          <img src={project.images.image6}></img>
        </div>
        <p>
          Each quadrant is associated with a kind of activity (for example, the leftmost quadrant in a kitchen is the sink and associated with washing dishes or vegetables), and is assigned a color of light and specific sound (blue and sound of running water for the quadrant with the sink). 
        </p>
        <p>
          Using Kasa smart bulbs and speakers, a detection of activity in a quadrant triggers webhook requests to IFTTT, which in turn sends requests and instructions to change the color of the lighting and plays sounds on the speakers. 
        </p>
        <img className="sk-diagram" src={project.images.image4}></img>
        
        
        <p>
          When installed in the two kitchens, the movement/activity of person A in their space will create responses in person B’ space, and vice versa. 
        </p>
        <p>
          The changing of light intensity among the light bulbs will create an indication of presence/relative location in the kitchen. The sound played based on their location would correspond to activity such as chopping/frying, etc.
        </p>
        <img className="sk-diagram" src={project.images.image5}></img>
        
        <p>
          While the exact motions and timing may not be synchronous between the two people, it would allow them to feel the presence of each other and understanding of their movement and activity. 
        </p>
      </div>
      
    </div>
  )
}

export default SharedKitchen;