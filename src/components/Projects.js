import React from 'react'
import projects from './../projects.json'
import '../Styles/projects.css'

export default function Project () {
 console.log(projects);
 return (
  <>
   <section className="projects">
    {projects.map((project,id) => {
      const {image,name,technologies,code,link,description} = project 
     return (
       <div className="singleProject" key={id}>
       <div className="image">
        <img src={image} alt={name} />
       </div>
      <div className="projectDetails">
        <h2>{name}</h2>
        <h4>{technologies}</h4>
        <p>Check the codes <a href={code}>here</a> </p>
        <p>See it <a href={link}>live</a> </p>
        <p>{description}</p>
      </div> 
    </div>
     )
    })}
   </section>
  </>
 )
}