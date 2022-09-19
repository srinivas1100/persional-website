import React from 'react'
import '../ProjectCard/ProjectCard.css'

const ProjectCard = (props) => {

  return (
    <div className='project-card-parent'>
      <div className='front-card'>
        <img className='project-image' src={props.imageUrl} alt="" />
        <p className='project-title'>{props.projectName}</p>
        <p className='project-description'>{props.projectDescription}</p>
      </div>
      <div className='back-card'>
        <p className='long-dis'>{props.longdis}</p>
        <a className='source-code' href={props.sourcecode} target="blank">Source Code</a>
      </div>
    </div>
  )
}

export default ProjectCard