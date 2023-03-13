import React from 'react'
import projects from './../projects.json'
import '../Styles/projects.css'

export default function Project () {
 console.log(projects);
 return (
  <>
   <section className="projects">
    {projects.map((project,id) => {
      const {image,name,technologies,link,description} = project 
     return (
       <div className="singleProject" key={id}>
     <img src={image} alt={name} />
     <h2>{name}</h2>
     <h3>{technologies}</h3>
     <p>Check the codes  <a href={link}>here</a></p>
     <p>{description}</p>
    </div>
     )
    })}
   
   </section>
  </>
 )
}