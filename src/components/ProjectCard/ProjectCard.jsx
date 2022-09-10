import React from 'react'
import '../ProjectCard/ProjectCard.css'

const ProjectCard = (props) => {

  return (
    <div className='project-card-parent'>
      <img className='project-image' src={props.imageUrl} alt="" />
      <p className='project-title'>{props.projectName}</p>
      <p className='project-description'>{props.projectDescription}</p>
    </div>
  )
}

export default ProjectCard