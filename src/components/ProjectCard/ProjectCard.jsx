import React from 'react'
import '../ProjectCard/ProjectCard.css'

const ProjectCard = () => {

  return (
    <div className='project-card'>
        <img  className='project-image' src="https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg" alt="" />
        <div>
            <h3>Project Name</h3>
            <p>Project Description</p>
        </div>
    </div>
  )
}

export default ProjectCard